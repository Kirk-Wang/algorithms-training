import { LinkedListNode } from './LinkedListNode'

export const linkedListReverser = (head: LinkedListNode | null): LinkedListNode | null => {
  // 处理特殊值
  // size = 0
  // if (head === null) {
  //   return null
  // }
  // // size =1
  // // 只有一个节点，就是 Head 的本身
  // if (head.getNext() === null) {
  //   return head;
  // }

  // 整理一下
  if (head === null || head.getNext() === null) {
    return head
  }
  // 假设 N-1 项已经反转完了
  let newHead: LinkedListNode | null = linkedListReverser(head.getNext())
  // 那么 N-1 项下一项就是自己
  let N1Head = head.getNext()
  N1Head && N1Head.setNext(head)
  // 自己是 N 项，当然就设置 null
  head.setNext(null)
  // 把新的头指针返回
  return newHead
}
