import { grayCode } from '../../src/algorithms-training'

describe('grayCode test', () => {
  it(`n:0`, () => {
    expect(grayCode(0)).toEqual([0])
  })
  it(`n:1`, () => {
    expect(grayCode(1)).toEqual([0, 1])
  })
  it(`n:2`, () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2])
  })
  it(`n:3`, () => {
    expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4])
  })
})
