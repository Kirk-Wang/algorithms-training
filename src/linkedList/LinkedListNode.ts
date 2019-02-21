export class LinkedListNode {
  private readonly value: number
  private next: LinkedListNode | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }

  public getValue() {
    return this.value
  }

  public getNext() {
    return this.next
  }

  public setNext(next: LinkedListNode | null) {
    this.next = next
  }

  public static printLinkedList(head: LinkedListNode | null) {
    const list: number[] = []
    while (head) {
      list.push(head.getValue())
      head = head.getNext()
    }
    return list
  }
}
