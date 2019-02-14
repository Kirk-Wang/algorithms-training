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
 */
export const reverseWords = (words: string) =>
  words
    .split(' ')
    .map(word => {
      return word
        .split('')
        .reverse()
        .join('')
    })
    .join(' ')
