import connect, { Monoid, Measured } from 'fingertree-js';

class PriorityMonoid extends Monoid {
    static get mempty() { return -1; }
    static mappend(a, b) { return Math.max(a, b); }
}

class PriorityMeasured extends Measured {
    constructor(val, priority) {
        super();
        this.val = val;
        this.priority = priority;
    }

    measure() { return this.priority; }

    get() { return this.val; }
}

const { Empty, FingerTree } = connect(PriorityMonoid);

export class PriorityQueue {
    tree = null;

    constructor() {
        this.tree = new Empty;
    }

    get empty() {
        return !~this.tree.measure();
    }

    push(val, priority) {
        if (!Number.isInteger(priority) || priority < 0) {
            throw new Error('priority error');
        }
        this.tree = this.tree.append(new PriorityMeasured(val, priority));
        return this;
    }

    pop() {
        if (this.tree.empty) {
            throw new Error('empty queue');
        }
        let max = this.tree.measure();
        const predicate = v => v >= max;
        let [left, hit, right] = this.tree.search(predicate);
        this.tree = FingerTree.concat(left, right);
        return hit.get();
    }
}
