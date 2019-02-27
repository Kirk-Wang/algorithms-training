export const canPlaceFlowers = (flowerbed: number[], n: number) => {
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && !flowerbed[i] && !flowerbed[i + 1] && ++i) {
      count++
    } else if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1] && ++i) {
      count++
    }
  }
  return count === n
}
