import { hasGroupsSizeX } from '../../src/algorithms-training'

describe('hasGroupsSizeX test', () => {
  it(`hasGroupsSizeX([1,2,3,4,4,3,2,1])`, () => {
    expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true)
  })

  it(`hasGroupsSizeX([1,1,1,2,2,2,3,3])`, () => {
    expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toEqual(false)
  })

  it(`hasGroupsSizeX([1])`, () => {
    expect(hasGroupsSizeX([1])).toEqual(false)
  })

  it(`hasGroupsSizeX([1,1])`, () => {
    expect(hasGroupsSizeX([1, 1])).toEqual(true)
  })

  it(`hasGroupsSizeX([1,1,2,2,2,2])`, () => {
    expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toEqual(true)
  })
})
