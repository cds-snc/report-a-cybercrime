import { formatPhoneNumber } from '../formatPhoneNumber'

describe('formatPhoneNumber', () => {
  it('turns an empty number into an empty string', () => {
    expect(formatPhoneNumber('')).toEqual('')
    expect(formatPhoneNumber(undefined)).toEqual('')
  })

  it('leaves a funny number alone', () => {
    expect(formatPhoneNumber('hi there')).toEqual('hi there')
    expect(formatPhoneNumber('123-4567')).toEqual('123-4567')
    expect(formatPhoneNumber('+1 123 456 7890')).toEqual('+1 123 456 7890')
  })

  it('formats a valid number correctly', () => {
    expect(formatPhoneNumber('123 456 7890')).toEqual('(123) 456-7890')
    expect(formatPhoneNumber('123-456-7890')).toEqual('(123) 456-7890')
    expect(formatPhoneNumber('(123)456-7890')).toEqual('(123) 456-7890')
  })
})
