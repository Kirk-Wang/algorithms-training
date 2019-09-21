import { grayCode } from '../../src/algorithms-training'

describe('grayCode test', () => {
  it(`n:1`, () => {
    expect(grayCode(1)).toBe(true)
  })
})
