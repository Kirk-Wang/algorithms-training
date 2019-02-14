import { reverseWords } from '../../src/algorithms-training'

describe('Reverse Words test', () => {
  it(`Let's take LeetCode contest is s'teL ekat edoCteeL tsetnoc`, () => {
    expect(reverseWords(`Let's take LeetCode contest`)).toBe(`s'teL ekat edoCteeL tsetnoc`)
  })
})
