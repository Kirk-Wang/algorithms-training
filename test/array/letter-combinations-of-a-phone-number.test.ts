import { letterCombinations } from '../../src/algorithms-training'

describe('letterCombinations test', () => {
  it(`letterCombinations(23)`, () => {
    expect(letterCombinations(`23`)).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })
})
