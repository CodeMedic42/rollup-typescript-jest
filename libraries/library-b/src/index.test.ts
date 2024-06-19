import sum from './index';

describe('LibB', () => {
    test('sum 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
