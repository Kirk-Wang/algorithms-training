export const countBinarySubstrings = (str: string) => {
  // 正则查找题目所要求的串
  const match = (substr: string) => {
    const strA = (substr.match(/^(0+|1+)/) || [])[0] || ''
    const strB = (+strA[0] ^ 1).toString().repeat(strA.length)
    return (substr.match(new RegExp(`${strA}${strB}`)) || [])[0] || ''
  }

  const count = []
  for (let i = 0; i < str.length - 1; i++) {
    match(str.substr(i)) && count.push(match(str.substr(i)))
  }
  return count.length
}
