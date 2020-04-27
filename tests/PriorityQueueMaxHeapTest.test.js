import PriorityQueue from '../index';

const testCases = [
  {
    input: [
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 3, priority: 3 }
    ],
    expect: [3, 2, 1]
  },
  {
    input: [
      { value: 1, priority: 1 },
      { value: 3, priority: 3 },
      { value: 2, priority: 2 }
    ],
    expect: [3, 2, 1]
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
    expect: [2, 1]
  },
  {
    input: [
      { value: 2, priority: 2 },
      { value: 1, priority: 1 }
    ],
    expect: [2, 1]
  },
  {
    input: [
      { value: 2, priority: 2 },
      { value: 2, priority: 2 },
      { value: 2, priority: 2 },
      { value: 2, priority: 2 },
      { value: 1, priority: 1 }
    ],
    expect: [2, 2, 2, 2, 1]
  },
  {
    input: [
      { value: 2, priority: 2 },
      { value: -100, priority: -100 }
    ],
    expect: [2, -100]
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
    expect: [8, 4, 1]
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
    expect: [21, 9, 6, 3, 2, 1]
  },
  {
    input: [
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 1, priority: 1 }
    ],
    expect: [2, 1, 1]
  },
  {
    input: [
      { value: 'a', priority: 5648418484155151 },
      { value: 'b', priority: 25458484848 },
      { value: 'c', priority: 4574844844848645565615615514815 }
    ],
    expect: ['c', 'a', 'b']
  }
];

function priorityQueueMaxHeapTester(items) {
  const result = [];
  const queue = new PriorityQueue('max');
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
    expect(priorityQueueMaxHeapTester(testCase.input)).toBe(JSON.stringify(testCase.expect));
  });
});
