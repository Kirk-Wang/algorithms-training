export const letterCombinations = (strNum: string) => {
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const letterArr = []
  for (let i = 0; i < strNum.length; i++) {
    letterArr.push(map[+strNum[i]].split(''))
  }
  return letterArr.reduce((arr1, arr2) => {
    const tmp: string[] = []
    arr1.forEach(str1 => arr2.forEach((str2: string) => tmp.push(`${str1}${str2}`)))
    return tmp
  })
}
