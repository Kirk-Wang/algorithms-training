export const countBinarySubstrings = (s: string) => {
  const match = (substr: string) => {
    // 开头连续 0 | 1
    const i = (substr.match(/^(0+|1+)/) || [])[0] // 0 or 1
    const j = (+i[0] ^ 1).toString().repeat(i.length) // 相同长度的 0 or 1
    const reg = new RegExp(`^(${i}${j})`)
    if (reg.test(substr)) {
      return RegExp.$1
    }
    return ''
  }

  let final = []
  for (let i = 0; i < s.length - 1; i++) {
    let str = match(s.slice(i))
    if (str) {
      final.push(str)
    }
  }
  return final.length
}
