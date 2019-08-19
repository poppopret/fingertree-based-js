import { PriorityQueue } from '../src';

describe('PriorityQueue', () => {
    test('empty', () => {
        let queue = new PriorityQueue;
        expect(queue.empty).toEqual(true);
        queue.push(1, 1);
        expect(queue.empty).toEqual(false);
        queue.pop();
        expect(queue.empty).toEqual(true);
    });

    test('push', () => {
        let queue = new PriorityQueue;
        expect(queue.tree.measure()).toEqual(-1);
        expect(() => queue.push()).toThrow();
        expect(queue.push(1, 1).tree.measure()).toEqual(1);
        expect(queue.push(12, 23).tree.measure()).toEqual(23);
        expect(queue.push(12, 3).tree.measure()).toEqual(23);
    });

    test('pop', () => {
        let queue = new PriorityQueue;
        [4, 5, 1, 3, 2].forEach((val, index) => queue.push(index, val));
        expect(queue.pop()).toEqual(1);
        expect(queue.pop()).toEqual(0);
        expect(queue.pop()).toEqual(3);
        expect(queue.pop()).toEqual(4);
        expect(queue.pop()).toEqual(2);
        expect(() => queue.pop()).toThrow();
    });
});
