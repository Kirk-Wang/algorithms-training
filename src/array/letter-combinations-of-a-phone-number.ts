export const letterCombinations = (strNum: string) => {
  const mapStr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  const arr: any[] = []
  strNum.split('').forEach(num => {
    if (mapStr[+num]) {
      arr.push(mapStr[+num])
    }
  })

  // return arr.reduce((a: any, b: any) => {
  //   const tmp: any[] =[]
  //   for (let i = 0; i < a.length; i++) {
  //     for (let j = 0; j < b.length; j++) {
  //       tmp.push(`${a[i] + b[j]}`)
  //     }
  //   }
  //   return tmp
  // })

  const comp: any = (compArr: any) => {
    const strA = compArr[0]
    const strB = compArr[1]
    const tmp = []
    for (let i = 0; i < strA.length; i++) {
      for (let j = 0; j < strB.length; j++) {
        tmp.push(`${strA[i] + strB[j]}`)
      }
    }
    compArr.splice(0, 2, tmp)

    if (compArr.length > 1) {
      return comp(compArr)
    } else {
      //  console.log(compArr[0].length)
      return compArr[0]
    }
  }

  return comp(arr)
}
