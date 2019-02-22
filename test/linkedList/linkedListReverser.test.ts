import {
  linkedListCreator,
  LinkedListNode,
  linkedListReverser
} from '../../src/algorithms-training'

describe('linkedListReverser test', () => {
  it(`linkedListReverser([1, 2, 3, 4, 5])`, () => {
    let head = linkedListReverser(linkedListCreator([1, 2, 3, 4, 5]))

    expect(LinkedListNode.printLinkedList(head)).toEqual([5, 4, 3, 2, 1])
  })
})
