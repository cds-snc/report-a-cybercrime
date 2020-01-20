import { generateReportId } from '../generateReportId'

describe('generateReportId', () => {
  it('has the correct structure: NCFRS prefix then 11 characters', () => {
    const id = generateReportId()
    expect(id).toEqual(expect.stringMatching(/^NCFRS-.{11}$/))
  })

  it('has different consecutive values', () => {
    const id1 = generateReportId()
    const id2 = generateReportId()
    expect(id1).not.toEqual(id2)
  })
})
