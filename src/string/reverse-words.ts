/**
 * 557. 反转字符串中的单词 III
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 *
 * ### Example (es module)
 * ```js
 * import { reverseWords } from 'algorithms-training'
 * console.log(reverseWords(`Let's take LeetCode contest`))
 * // => s'teL ekat edoCteeL tsetnoc
 * ```
 *
 */
export const reverseWords = (words: string) =>
  words
    // 也可以直接用 match 匹配单词
    // 但是这里有一个问题，match匹配不到会返回 null
    // split 匹配不到还是会直接返回原数组，不影响后续的 map
    // .match(/[\w']+/g)
    .split(/\s/g) // 这里的空格直接换成正则
    .map(word =>
      word
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
