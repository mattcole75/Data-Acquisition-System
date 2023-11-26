const Signal = require('./subclass/signal');
const Tail = require('tail').Tail;
const log2Object = require('../shared/tms/app2/log2Object');
const tms = require('../shared/axios/tms');
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
        this.IO = IO;
        this.tail = new Tail(this.path);
        this.msg = null;
    };

    start = () => {

        // local array specifying what IO to monitor.
        const ioMonitorFor = [];
        this.IO.forEach(sig => {
            let signal = new Signal(this.id, sig.system, sig.signal, sig.ioType, sig.channel, sig.relay, sig.relayType, sig.key, sig.on, sig.off, null, null);
            ioMonitorFor.push(signal);
        });

        // declare local variable
        let direction = null;
        let swingStart = null;
        let swingEnd = null;
        let swingTime = null;

        //specifiy date for testing this is to be deleted
        // const logDate = '2023-11-12';
        
        //output what is being monitored
        console.log('Monitoring for', ioMonitorFor);
        
        this.tail.on('line', (line) => {
            this.msg = log2Object(line);

            const postPointState = (data) => {
                spark.post('/pointdata', data, {
                    headers: {
                        'Content-Type': 'application/json',
                        idToken: sparkToken
                    }
                })
                .then(res => {
                    // console.log('ok - ', data);
                })
                .catch(err => {
                   console.log('error - ', err.message);
                });
            }

            const postPointTimings = (data) => {
                tms.post('/pointsmachineswingtime', data, {
                    headers: {
                        "Content-Type": "application/json",
                        idToken: idToken
                    }
                })
                .then(res => {
                    // console.log('ok - ', data);
                })
                .catch(err => {
                   console.log('error - ', err.message);
                })
                .finally(() => {
                    swingStart = null;
                    swingEnd = null;
                    swingTime = null;
                });
            }

            if(this.msg.system === 'dig') {

                // if exists find reference signal array index
                let index = ioMonitorFor.findIndex(
                    sig => sig.ioType === (this.msg.output === true ? 'output' : this.msg.input === true ? 'input' : null) && sig.key === this.msg.key
                );

                // check if reference signal is being monitored
                if(index !== -1) {
                    // update the state of the reference signal
                    ioMonitorFor[index].setState(this.msg.state);
                    // update the signal event time and add today's
                    ioMonitorFor[index].setEventTimestamp(moment(new Date(moment().format('YYYY-MM-DD') + ' ' + this.msg.eventTimestamp)).format('YYYY-MM-DD HH:mm:ss.SSS'));
                    
                    // the following is used when processing specific files retrospectivly 
                    // ioMonitorFor[index].setEventTimestamp(moment(new Date(logDate + ' ' + this.msg.eventTimestamp)).format('YYYY-MM-DD HH:mm:ss.SSS'));
                    
                    //console output for monitoring
                    console.log(this.id,
                        ioMonitorFor[index].state === 'on'
                            ? ioMonitorFor[index].onState
                            :   ioMonitorFor[index].state === 'off'
                                ? ioMonitorFor[index].offState
                                : 'ukn'
                    )

                    // post IO state change to timeseries db
                    // postPointState(ioMonitorFor[index].signalState()); // disable for now
                    
                    // check for drive and swing times
                    if(ioMonitorFor[index].signal === 'Points Set Right' || ioMonitorFor[index].signal === 'Points Set Left') {

                        // set swing direction
                        direction = ioMonitorFor[index].signal;

                        // point swing time start
                        if(ioMonitorFor[index].ioType === 'input' && ioMonitorFor[index].state === 'off') {
                            swingStart = ioMonitorFor[index].eventTimestamp;
                        }

                        // point swing time end
                        if(ioMonitorFor[index].ioType === 'input' && ioMonitorFor[index].state === 'on') {
                            swingEnd = ioMonitorFor[index].eventTimestamp;

                            if(swingStart !== null) {
                                swingTime = moment(swingEnd).diff(moment(swingStart), 'milliseconds');
                                console.log('Swing Time', swingTime);
                                postPointTimings({
                                    id: this.id,
                                    direction: direction,
                                    swingTime: swingTime,
                                    tmsTimestamp: moment(swingStart).format('YYYY-MM-DD HH:mm:ss.SSS')
                                });
                            }
                        }
                    }
                }
            }       
        })
    };
}

module.exports = PointsMonIO;