import { canPlaceFlowers } from '../../src/algorithms-training'

describe('canPlaceFlowers test', () => {
  it(`[0,1,0,1,0,0,0,1]-->true`, () => {
    expect(canPlaceFlowers([0, 1, 0, 1, 0, 0, 0, 1], 1)).toBe(true)
  })
  it(`[1,0,0,1,0,0,1,0,0,1,0,1]-->true`, () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], 2)).toBe(true)
  })
  it(`[1,0,0,0,0,1,0,0,1,0]-->true`, () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 0, 1, 0, 0, 1, 0], 1)).toBe(true)
  })
  it(`[1,0,1,0,1,0,0,0,0,1,0,0,1,0,0]-->true`, () => {
    expect(canPlaceFlowers([1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0], 2)).toBe(true)
  })
})
