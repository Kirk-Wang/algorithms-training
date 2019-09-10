export const hasGroupsSizeX = (numArr: number[]) => {
  const str = numArr.sort().join('')
  const groups: any = str.match(/(\d)\1+|\d/g)
  const commonDivisor = (a: number, b: number): number => (b === 0 ? a : commonDivisor(b, a % b))
  while (groups && groups.length > 1) {
    const a = groups.shift().length
    const b = groups.shift().length
    const cd: number = commonDivisor(a, b)
    if (cd < 2) {
      return false
    }
    groups.unshift(cd.toString().repeat(cd))
  }
  return groups && groups.length && groups[0].length > 1
}
