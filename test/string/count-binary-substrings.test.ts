import { countBinarySubstrings } from '../../src/algorithms-training'

describe('Count Binary Substrings test', () => {
  it(`countBinarySubstrings("00110011")`, () => {
    expect(countBinarySubstrings('00110011')).toBe(6)
  })
})
