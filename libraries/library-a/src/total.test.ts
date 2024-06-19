import total from './total';

describe('LibA', () => {
    it('total is 3 3', () => {
        expect(total("Total", 1, 2)).toBe('Total: 3');
    });
});
