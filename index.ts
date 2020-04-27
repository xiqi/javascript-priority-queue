/**
 * Priority Queue using Heap
 * Usage:
 *  const queue = new PriorityQueue()    -> min heap
 *  const queue = new PriorityQueue("min")    -> min heap
 *  const queue = new PriorityQueue("max")    -> max heap
 *
 *  queue.enqueue(SOME_ITEM, PRIORITY_NUMBER);    // e.g. queue.enqueue("a", 1)
 *  queue.dequeue();    // e.g. returns "a"
 *  queue.peek();    // returns the current first item
 *  queue.toString();    // print the current state of the entire queue (NOT IN SORTED ORDER!)
 *  queue.size();    // number of items
 *
 */

import Item from './item';

export default class {
  private heap: Array<Item>;
  private type: number;

  constructor(heapType: string) {
    this.heap = [new Item(null, 0, true)];
    this.type = 0;
    if (heapType === 'max' || heapType === 'MAX') {
      this.type = 1;
    } else if (heapType === 'min' || heapType === 'MIN') {
      this.type = -1;
    } else {
      throw new Error(`PriorityQueue type should be either 'min' or 'max'!`);
    }
  }

  public enqueue(value: any, priority: number): void {
    if (isNaN(priority)) {
      throw new Error("The 'priority' value of a PriorityQueue item is expected to be a number!");
    }
    const newNode = new Item(value, priority);
    this.heap.push(newNode);
    let currentNodeIndex = this.heap.length - 1;
    let currentParentIndex = Math.floor(currentNodeIndex / 2);
    while (
      !this.heap[currentParentIndex].isHead &&
      (newNode.priority - this.heap[currentParentIndex].priority) * this.type > 0
    ) {
      const tmp = this.heap[currentParentIndex];
      this.heap[currentParentIndex] = this.heap[currentNodeIndex];
      this.heap[currentNodeIndex] = tmp;
      currentNodeIndex = currentParentIndex;
      currentParentIndex = Math.floor(currentNodeIndex / 2);
    }
  }

  // returns value only (without priority)
  public dequeue(): any {
    const result = this.heap[1];
    if (this.heap.length > 2) {
      const pop = this.heap.pop();
      if (pop) {
        this.heap[1] = pop;
      }
    } else {
      this.heap.pop();
    }
    this.heapify(1);
    return result.value;
  }

  // ITEMS NOT IN SORTED ORDER!
  public toString(): string {
    const result = [];
    for (let index = 1; index < this.heap.length; index += 1) {
      result.push(`Value: ${this.heap[index].value}  Priority: ${this.heap[index].priority}`);
    }
    return result.join('\n');
  }

  public size(): number {
    return this.heap.length - 1;
  }

  public peek(): any {
    return this.heap[1].value;
  }

  private heapify(index: number): void {
    if (
      this.heap[index] &&
      ((this.heap[index * 2] && (this.heap[index].priority - this.heap[index * 2].priority) * this.type < 0) ||
        (this.heap[index * 2 + 1] && (this.heap[index].priority - this.heap[index * 2 + 1].priority) * this.type < 0))
    ) {
      if (
        !this.heap[index * 2 + 1] ||
        (this.heap[index * 2].priority - this.heap[index * 2 + 1].priority) * this.type > 0
      ) {
        const tmp = this.heap[index * 2];
        this.heap[index * 2] = this.heap[index];
        this.heap[index] = tmp;
        this.heapify(index * 2);
      } else {
        const tmp = this.heap[index * 2 + 1];
        this.heap[index * 2 + 1] = this.heap[index];
        this.heap[index] = tmp;
        this.heapify(index * 2 + 1);
      }
    }
  }
}
