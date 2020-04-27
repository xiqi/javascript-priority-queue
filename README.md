# JavaScript implementation of Priority Queue

Min Heap or Max Heap

## Install

`yarn add javascript-priority-queue` or `npm install javascript-priority-queue`

## Usage

```javascript
// Include using "import"
import PriorityQueue from 'javascript-priority-queue';
const minQueue = new PriorityQueue('min'); // Lowest priority first
const maxQueue = new PriorityQueue('max'); // Highest priority first

// Include using "require"
const PriorityQueue = require('javascript-priority-queue');
const minQueue = new PriorityQueue.default('min'); // Lowest priority first
const maxQueue = new PriorityQueue.default('max'); // Highest priority first

// Functions
queue.enqueue(SOME_ITEM, PRIORITY_NUMBER); // add to the queue. e.g. queue.enqueue("a", 1)
queue.dequeue(); // returns the current first item and remove it from the queue.
queue.peek(); // returns the current first item
queue.size(); // returns the number of items in the queue
queue.toString(); // NOT IN SORTED ORDER! prints the all items
```

## Example

```javascript
const PriorityQueue = require('javascript-priority-queue');

const queue = new PriorityQueue.default('min');

queue.enqueue('a', 2);
queue.enqueue('b', 1);
queue.enqueue('c', -0.156);
queue.enqueue('d', 351680468468489);
queue.enqueue('e', 50);

console.log(queue.toString());
/* output: (NOT IN SORTED ORDER)
Value: c  Priority: -0.156
Value: a  Priority: 2
Value: b  Priority: 1
Value: d  Priority: 351680468468489
Value: e  Priority: 50
*/

console.log(queue.dequeue());
// output: c

console.log(queue.peek());
// output: b

console.log(queue.size());
// output: 4
```
