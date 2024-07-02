import total from './total';

describe('LibA', () => {
    test('total is 3 3', () => {
        expect(total("Total", 1, 2)).toBe('Total: 3');
    });

    test('total is 3 3', () => {
        expect(total("Total", 2, 2)).toBe('Total: 4');
    });
});
