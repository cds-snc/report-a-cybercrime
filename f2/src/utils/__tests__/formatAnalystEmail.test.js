import { formatAnalystEmail } from '../formatAnalystEmail'

describe('formatAnalystEmail', () => {
  it('returns an error message if there is missing data', () => {
    const data = {}
    console.error = jest.fn()
    const s = formatAnalystEmail(data)
    expect(s).toEqual(expect.stringMatching(/ERROR/))
    expect(console.error).toHaveBeenCalled()
  })

  it('flags self harm words prominently if present', () => {
    const data = { selfHarmWords: 'agile' }
    console.error = jest.fn()
    const s = formatAnalystEmail(data)
    expect(s).toEqual(
      expect.stringMatching(/^\*\*\*\* SELF HARM WORDS FOUND : agile/),
    )
    expect(console.error).toHaveBeenCalled()
  })
})
