export function reverseWordsInAStringIII(s: string) {
  return s
    .split(/\s/)
    .map(item =>
      item
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
}
