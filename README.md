# fingertree-based-js
Applications of Finger Tree. This project also demostrates usage of Finger Tree in implementing other data structures.

## Setup
Using npm:
```bash
npm install fingertree-based
```

## API
### Sequence
Random access sequence, supports `length`, `push`, `get` and `set`
#### init
Create a new Sequence
```javascript
import { Sequence } from 'fingertree-based';
let seq = new Sequence;
```
#### length
Get the length of a sequence
```javascript
let len = sequence.length;
```
#### push(val)
Push a new element of any type into sequence
```javascript
sequence.push('a');
sequence.push(1);
```
#### get(index)
Get element positioned by index, zero-indexed. Minus value is also allowed. It will throw an error if `index` out of range.
```javascript
sequence.get(0); // get the first element
sequence.get(-1); // get the last element
sequence.get(1000000); // throws an error if index out of range
```
#### set(index, val)
Set element at `index`. Similar rules with `index` work like `get` here.
```javascript
sequence.set(0, 'hello'); // set the first element
sequence.set(-1, 1); // set the first element
sequence.set(10000, 'error'); // throws an error if index out of range
```

### PriorityQueue
PriorityQueue, supports `push` and `pop`.
#### init
Create a new priority queue.
```javascript
import { PriorityQueue } from 'fingertree-based';
let queue = new PriorityQueue;
```
#### empty
Check if the queue is empty.
```javascript
let empty = queue.empty; // true or false
```
#### push(element, prioriry)
Push an element of any type with `priority`. `priority` should be a non-negative integer or an error will be throwed.
```javascript
queue.push('a', 1);
queue.push(123, 0);
queue.push('error', -1); // throws an error
```
#### pop()
Pop the element with largest priority. Throws an error if queue is already empty.
```javascript
let element = queue.pop();
```