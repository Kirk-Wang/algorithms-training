export function reverseWordsInAStringIII(s: string) {
  return s
    .split(' ')
    .map(item =>
      item
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
}
