export const countBinarySubstrings = (str: string) => {
  let count = 0
  for (let i = 0; i < str.length - 1; i++) {
    const tmpStr = str.substr(i)
    const strA = (tmpStr.match(/^(0+|1+)/) || [])[0] || ''
    if (
      (tmpStr.match(new RegExp(`${strA}${(+strA[0] ^ 1).toString().repeat(strA.length)}`)) || [])[0]
    ) {
      count++
    }
  }
  return count
}
