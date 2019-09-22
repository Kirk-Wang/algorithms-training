import { repeatedSubstringPattern } from '../../src/algorithms-training'

describe('repeatedSubstringPattern()', () => {
  it(`abc`, () => {
    expect(repeatedSubstringPattern('abc')).toBe(false)
  })
  it(`abcabc`, () => {
    expect(repeatedSubstringPattern('abcabc')).toBe(true)
  })
  it(`abcabcd`, () => {
    expect(repeatedSubstringPattern('abcabcd')).toBe(false)
  })
})
