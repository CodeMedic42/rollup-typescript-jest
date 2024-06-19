import sum from './index';

describe('LibB', () => {
    it('sum 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
