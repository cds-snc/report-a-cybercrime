import { formatDate } from '../formatDate'

describe('formatDate', () => {
  it('formats a full date correctly', () => {
    expect(formatDate(20, 11, 2020)).toEqual('2020-11-20')
    expect(formatDate('20', '11', '2020')).toEqual('2020-11-20')
  })

  it('pads days and months', () => {
    expect(formatDate(1, 2, 2020)).toEqual('2020-02-01')
  })

  it('formats a month/year correctly', () => {
    expect(formatDate('', 11, 2020)).toEqual('2020-11')
    expect(formatDate(undefined, 11, 2020)).toEqual('2020-11')
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
