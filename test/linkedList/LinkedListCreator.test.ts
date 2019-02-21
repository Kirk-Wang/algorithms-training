import { linkedListCreator, LinkedListNode } from '../../src/algorithms-training'

describe('linkedListCreator test', () => {
  it(`linkedListCreator([1, 2, 3, 4, 5])`, () => {
    expect(LinkedListNode.printLinkedList(linkedListCreator([1, 2, 3, 4, 5]))).toEqual([
      1,
      2,
      3,
      4,
      5
    ])
  })
})
