export function repeatedSubstringPattern(s: string): boolean {
  const pattern = /^(\w+)\1+$/
  return pattern.test(s)
}
