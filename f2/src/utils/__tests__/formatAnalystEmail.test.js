import { formatAnalystEmail } from '../formatAnalystEmail'

describe('formatAnalystEmail', () => {
  it('returns an error message if there is missing data', () => {
    const data = {}
    console.error = jest.fn()
    const s = formatAnalystEmail(data)
    expect(s).toEqual(expect.stringMatching(/ERROR/))
    expect(console.error).toHaveBeenCalled()
  })
})
