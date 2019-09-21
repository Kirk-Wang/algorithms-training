export function grayCode(n: number) {
  if (n === 0) {
    return [0]
  }
  const calc = (n: number): string[] => {
    if (n === 1) {
      return ['0', '1']
    } else {
      const prev: string[] = calc(n - 1)
      const len = Math.pow(2, n)
      const maxPos = len - 1
      const half = len / 2
      const curGrayCode: string[] = []
      // 砍一半
      for (let i = 0; i < half; i++) {
        // 0
        curGrayCode[i] = `0${prev[i]}`
        curGrayCode[maxPos - i] = `1${prev[i]}`
      }
      return curGrayCode
    }
  }
  return calc(n).map(item => parseInt(item, 2))
}
