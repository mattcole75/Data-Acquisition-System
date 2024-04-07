const { calculateDeltaMilliseconds } = require('../shared/tms/app1/utility');

describe('The tests for the points transition delta calculation', () => {
    
    it('should return 0, given the same start and end time', () => {
        expect(calculateDeltaMilliseconds('1970-01-01 00:00:00.000', '1970-01-01 00:00:00.000')).toBe(0);
    });

    it('should return 1, given a one thousands of a second difference', () => {
        expect(calculateDeltaMilliseconds('1970-01-01 00:00:00.001', '1970-01-01 00:00:00.000')).toBe(1);
    });

    it('should return 10, given a one hundredth of a second difference', () => {
        expect(calculateDeltaMilliseconds('1970-01-01 00:00:00.010', '1970-01-01 00:00:00.000')).toBe(10);
    });

    it('should return 100, given a one tenth of a second difference', () => {
        expect(calculateDeltaMilliseconds('1970-01-01 00:00:00.100', '1970-01-01 00:00:00.000')).toBe(100);
    });

    it('should return 1000, given a one second difference', () => {
        expect(calculateDeltaMilliseconds('1970-01-01 00:00:01.000', '1970-01-01 00:00:00.000')).toBe(1000);
    });

});