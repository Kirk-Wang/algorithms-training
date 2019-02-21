import { LinkedListNode } from './LinkedListNode'

export const linkedListCreator = (list: Array<number>) => {
  // 后特殊，一行一行的看
  if (!list.length) {
    // 这里就是数学归纳法中的 N=1 的情况
    return null
  }
  // 先一般
  const firstNode = new LinkedListNode(list[0])
  // 每次规模的缩小程度必须为 1
  // 对于规模为 N-1 的问题能够正确的运行
  firstNode.setNext(linkedListCreator(list.slice(1)))
  return firstNode
}
