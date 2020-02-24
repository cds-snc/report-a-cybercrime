import { formatDate } from '../formatDate'

describe('formatDate', () => {
  it('formats a full date correctly', () => {
    expect(formatDate(20, 1, 2020)).toEqual('20/1/2020')
  })

  it('formats a month/year correctly', () => {
    expect(formatDate('', 1, 2020)).toEqual('1/2020')
    expect(formatDate(undefined, 1, 2020)).toEqual('1/2020')
  })

  it('formats a year correctly', () => {
    expect(formatDate('', '', 2020)).toEqual('2020')
    expect(formatDate(undefined, undefined, 2020)).toEqual('2020')
  })

  it('formats empty data correctly', () => {
    expect(formatDate('', '', '')).toEqual('')
    expect(formatDate(undefined, undefined, undefined)).toEqual('')
  })
})
