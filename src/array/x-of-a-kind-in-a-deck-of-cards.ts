export const hasGroupsSizeX = (inputArr: number[]) => {
  const tmp: number[] = []
  const groups: any[] = []
  let min = 0
  const match = (num: number) => {
    if (!tmp.length || tmp[0] === num) {
      tmp.push(num)
    } else {
      setGroups()
      setMin()
      tmp.length = 0
      tmp.push(num)
    }
  }
  const setGroups = () => groups.push([...tmp])
  const setMin = () => (min > tmp.length || min === 0 ? (min = tmp.length) : min)

  inputArr.sort().forEach(x => match(x))
  setGroups()
  setMin()
  return groups.every(x => x.length % min === 0 && min >= 2)
}
