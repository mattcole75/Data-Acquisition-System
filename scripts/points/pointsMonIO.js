const PointsMonIO = require('../../class/pointsMonIO');
const config = require('../../config/io/pointMonIOConfig');
const pointIO = [];

// load point IO
config.forEach(point => {
    const { id, area, path, IO } = point
    const pointMonIO = new PointsMonIO(id, area, path, IO);
    pointIO.push(pointMonIO);

    console.log('ok - ' + id + ' IO monitor is ready.');
});

// start monitoring
pointIO.forEach(io => {
    io.start();

    console.log('ok - ' + io.area + ' IO monitoring started.');
});