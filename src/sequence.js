import connect, { Monoid, Measured } from 'fingertree-js';

class SizeMonoid extends Monoid {
    static get mempty() { return 0; }
    static mappend(a, b) { return a + b; }
}

class SizeMeasured extends Measured {
    constructor(x) {
        super();
        this.x = x;
    }

    measure() {
        return 1;
    }

    get() { return this.x; }
}

const { Empty, FingerTree } = connect(SizeMonoid);
const at = index => (vl, vr) => {
    return index < 0 ? vr + 1 <= -index : vl - 1 >= index;
};

export class Sequence {
    tree = null;

    constructor() {
        this.tree = new Empty;
    }

    get length() { return this.tree.measure(); }

    push(val) {
        this.tree = this.tree.append(new SizeMeasured(val));
        return this;
    }

    get(index) {
        const predicate = at(index);
        let [, hit] = this.tree.search(predicate);
        if (!hit) {
            throw new Error('out of range');
        }
        return hit.get();
    }

    set(index, val) {
        const predicate = at(index);
        let [left, hit, right] = this.tree.search(predicate);
        if (!hit) {
            throw new Error('out of range');
        }
        this.tree = FingerTree.concat(left.append(new SizeMeasured(val)), right);
        return this;
    }
}