import PriorityQueue from '../index';

const testCases = [
  {
    input: [
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 3, priority: 3 }
    ],
    expect: [1, 2, 3]
  },
  {
    input: [
      { value: 1, priority: 1 },
      { value: 3, priority: 3 },
      { value: 2, priority: 2 }
    ],
    expect: [1, 2, 3]
  },
  {
    input: [{ value: 1, priority: 1 }],
    expect: [1]
  },
  {
    input: [
      { value: 1, priority: 1 },
      { value: 2, priority: 2 }
    ],
    expect: [1, 2]
  },
  {
    input: [
      { value: 2, priority: 2 },
      { value: 1, priority: 1 }
    ],
    expect: [1, 2]
  },
  {
    input: [
      { value: 2, priority: 2 },
      { value: 2, priority: 2 },
      { value: 2, priority: 2 },
      { value: 2, priority: 2 },
      { value: 1, priority: 1 }
    ],
    expect: [1, 2, 2, 2, 2]
  },
  {
    input: [
      { value: 2, priority: 2 },
      { value: -100, priority: -100 }
    ],
    expect: [-100, 2]
  },
  {
    input: [],
    expect: []
  },
  {
    input: [
      { value: 4, priority: 4 },
      { value: 1, priority: 1 },
      { value: 8, priority: 8 }
    ],
    expect: [1, 4, 8]
  },
  {
    input: [
      { value: 3, priority: 3 },
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 9, priority: 9 },
      { value: 6, priority: 6 },
      { value: 21, priority: 21 }
    ],
    expect: [1, 2, 3, 6, 9, 21]
  },
  {
    input: [
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 1, priority: 1 }
    ],
    expect: [1, 1, 2]
  },
  {
    input: [
      { value: 'a', priority: 5648418484155151 },
      { value: 'b', priority: 25458484848 },
      { value: 'c', priority: 4574844844848645565615615514815 }
    ],
    expect: ['b', 'a', 'c']
  }
];

function priorityQueueMinHeapTester(items) {
  const result = [];
  const queue = new PriorityQueue('min');
  items.forEach((item) => {
    queue.enqueue(item.value, item.priority);
  });

  while (queue.size() > 0) {
    result.push(queue.dequeue());
  }
  return JSON.stringify(result);
}

testCases.forEach((testCase) => {
  test(JSON.stringify(testCase), () => {
    expect(priorityQueueMinHeapTester(testCase.input)).toBe(JSON.stringify(testCase.expect));
  });
});
