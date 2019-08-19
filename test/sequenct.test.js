import { Sequence } from '../src';

describe('Sequence', () => {
    let seq;
    beforeEach(() => {
        seq = new Sequence;
        [1, 2, 3, 4, 5].forEach(val => seq.push(val));
    });

    test('length', () => {
        expect((new Sequence).length).toEqual(0);
        expect(seq.length).toEqual(5);
        expect(seq.push(8).length).toEqual(6);
    });

    test('get', () => {
        expect(seq.get(0)).toEqual(1);
        expect(seq.get(2)).toEqual(3);
        expect(seq.get(-2)).toEqual(4);
        expect(() => seq.get(5)).toThrow();
        expect(() => seq.get(-6)).toThrow();
    });
    test('set', () => {
        expect(seq.get(0)).toEqual(1);
        seq.set(0, 999);
        expect(seq.get(0)).toEqual(999);
        seq.set(2, 7);
        expect(seq.get(2)).toEqual(7);
        seq.set(-2, 9);
        expect(seq.get(-2)).toEqual(9);
        expect(seq.length).toEqual(5);
    });
});
