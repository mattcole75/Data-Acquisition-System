
const moment = require('moment');

const calculateDeltaMilliseconds = (transitionEndTime, transitionStartTime) => {
    return moment(transitionEndTime).diff(moment(transitionStartTime), 'millisecond');
};

module.exports = {
    calculateDeltaMilliseconds: calculateDeltaMilliseconds
}