const moment = require('moment');
const PointsMonIO = require('../../class/pointsMonIO');
const config = require('../../config/io/pointMonIOConfig');
const pointIO = [];

// load point IO
const loadConfig = () => {
    config.forEach(point => {
        const { id, area, path, IO } = point
        const pointMonIO = new PointsMonIO(id, area, path, IO);
        pointIO.push(pointMonIO);
    
        console.log('ok - ' + id + ' IO monitor is ready.');
    });
}

// start monitoring
const start = () => {
    pointIO.forEach(io => {
        io.start();
    
        console.log('ok - ' + io.area + ' IO monitoring started.');
    });
}

const checkIO = () => {
    console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), 'Checking io...')
    let started = 0;
    let stopped = 0;
    let error = 0;

    pointIO.forEach(io => {
        switch(io.status) {
            case 'Error':
                error ++;
                break;
            case 'Started':
                started ++;
                break;
            case 'Stopped':
                stopped ++;
                break
            default:
                break;
        }

        if(io.status === 'Error')
            console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), 'check - ' + io.area + ' - ' + io.status);
    });
    console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'),'Started: ', started, ' | Stopped: ', stopped, ' | Error: ', error);
}

const rotateLogs = () => {
    console.log(moment().format('YYYY-MM-DD HH:mm:ss:SSS'), 'Rotating Log Files...')
    pointIO.forEach(io => {
        io.connect();
    });

    setInterval(rotateLogs, moment("24:00:00", "hh:mm:ss").diff(moment(), 'milliseconds'));
}

const tryStartFailedIO = () => {
    pointIO.forEach(io => {
        if(io.status === 'Error') {
            io.start();
        }
    });
}

loadConfig();
start();

setInterval(checkIO, 60000);
setInterval(tryStartFailedIO, 30000);
setInterval(rotateLogs, moment("24:00:00", "hh:mm:ss").diff(moment(), 'milliseconds'));