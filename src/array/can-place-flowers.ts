export const canPlaceFlowers = (flowerbed: number[], n: number) => {
  let i = 0
  let count = 0
  while (i < flowerbed.length) {
    const prev = i === 0 ? 0 : flowerbed[i - 1]
    const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]
    const self = flowerbed[i]
    if (prev === 0 && next === 0 && self === 0) {
      count++
    }
    if (next === 1) {
      i += 3
      continue
    }
    i += 2
  }
  return count === n
}
