const Signal = require('./subclass/signal');
const Tail = require('tail').Tail;
const log2Object = require('../shared/tms/app1/log2Object');
const tms = require('../shared/axios/tms');
const { calculateDeltaMilliseconds } = require('../shared/tms/app1/utility');
// const spark = require('../../../shared/axios/spark');
const moment = require('moment');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('../tmp');
const idToken = localStorage.getItem('idToken');
// const config = require('../../../config/config');
// const sparkToken = config.get('sparkToken');

class PointsMonIO {

    constructor (id, area, path, IO) {
        this.id = id;
        this.area = area;
        this.path = path;
        this.tail = null;
        this.IO = IO;
        this.msg = null;
        this.status = 'Stopped';
    };

    connect = () => {
        try {
            this.tail = new Tail(this.path + `${this.area}.${moment().format('YYYY-MM-DD')}.log`, { fsWatchOptions: { persistent: true }, follow: true });
        } catch(err) {
            this.tail = null;
            console.log(`${ moment().format('YYYY-MM-DD HH:mm:ss:SSS') } Failed to initialise tail for ${this.area}`);
            this.status = 'Error';
            return;
        }
    }

    start = () => {

        // connect and tail configured log file
        this.connect();
        
        // local array specifying what IO to monitor.
        const ioSignals = [];
        this.IO.forEach(sig => {
            let signal = new Signal(this.id, sig.system, sig.signal, sig.ioType, sig.channel, sig.relay, sig.relayType, sig.key, sig.on, sig.off, null, null);
            ioSignals.push(signal);
        });
        
        //specify date for testing this is to be deleted for production
        const logDate = '2024-03-09';

        // set status to started
        this.status = 'Started';
        //output what is being monitored
        // console.log('Monitoring for', ioSignals);
        
        this.tail.on('line', (line) => {
            this.msg = log2Object(line);

            // const postPointState = (data) => {
            //     spark.post('/pointdata', data, {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             idToken: sparkToken
            //         }
            //     })
            //     .then(res => {
            //         console.log('ok - ', data);
            //     })
            //     .catch(err => {
            //        console.log('error - ', err.message);
            //     });
            // }

            const postPointTimings = (data) => {
                tms.post('/pointsmachineswingtime', data, {
                    headers: {
                        "Content-Type": "application/json",
                        idToken: idToken
                    }
                })
                .then(res => {
                    // calculate transaction time in milliseconds
                    console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), 'ok - ', res.data.status, ' Transaction Delta: ', moment().diff(moment(data.tmsTimestamp), 'milliseconds'));
                })
                .catch(err => {
                   console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), 'error - ', err.code);
                });
            }

            if(this.msg.system === 'dig') { // check this is a digital message

                // if exists find reference signal array index
                let ioSignalIndex = ioSignals.findIndex(
                    sig => sig.ioType === (this.msg.output === true ? 'output' : this.msg.input === true ? 'input' : null) && sig.key === this.msg.key
                );

                // check if reference signal is being monitored
                if(ioSignalIndex !== -1) {
                    ioSignals[ioSignalIndex].setState(this.msg.state); // update the state of the reference signal - on or off
                    // update the signal event time and add today's
                    ioSignals[ioSignalIndex].setEventTimestamp(moment(new Date(moment().format('YYYY-MM-DD') + ' ' + this.msg.eventTimestamp)).format('YYYY-MM-DD HH:mm:ss.SSS'));
                    
                    // the following is used when processing specific files retrospectively
                    // ioSignals[ioSignalIndex].setEventTimestamp(moment(new Date(logDate + ' ' + this.msg.eventTimestamp)).format('YYYY-MM-DD HH:mm:ss.SSS'));
                    
                    //console output for monitoring
                    console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), this.id, ioSignals[ioSignalIndex].ioType, ioSignals[ioSignalIndex].signal, parseFloat(ioSignals[ioSignalIndex].key),
                        ioSignals[ioSignalIndex].state === 'on'
                            ? ioSignals[ioSignalIndex].onState
                            :   ioSignals[ioSignalIndex].state === 'off'
                                ? ioSignals[ioSignalIndex].offState
                                : 'ukn'
                    );

                    // post IO state change to time series db
                    // postPointState(ioSignals[ioSignalIndex].signalState()); // disable for now
                    
                    // check for drive and swing times
                    if(ioSignals[ioSignalIndex].signal === 'Points Set Right' || ioSignals[ioSignalIndex].signal === 'Points Set Left') {

                        if(ioSignals[ioSignalIndex].ioType === 'input' && ioSignals[ioSignalIndex].state === 'on') { // points are detected on the left or right

                            // find the corresponding detection lost event
                            let detectionLostIndex = ioSignals.findIndex(sig => sig.id === ioSignals[ioSignalIndex].id && sig.ioType === 'input' && sig.state === 'off');
                            let delta = null;

                            if(detectionLostIndex !== -1) {
                                // delta = moment(ioSignals[ioSignalIndex].eventTimestamp).diff(moment(ioSignals[detectionLostIndex].eventTimestamp), 'millisecond');
                                delta =  calculateDeltaMilliseconds(ioSignals[ioSignalIndex].eventTimestamp, ioSignals[detectionLostIndex].eventTimestamp);
                                console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), this.id, 'Transition', ioSignals[ioSignalIndex].signal, 'Delta', delta);
                                postPointTimings({
                                    id: this.id,
                                    direction: ioSignals[ioSignalIndex].signal,
                                    swingTime: delta,
                                    tmsTimestamp: moment(ioSignals[detectionLostIndex].eventTimestamp).format('YYYY-MM-DD HH:mm:ss.SSS')
                                });
                            }
                        }
                    }
                }
            }
        })

        this.tail.on('error', (err) => {
            console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), err);
            this.status = 'Error';
        })
    };
}

module.exports = PointsMonIO;