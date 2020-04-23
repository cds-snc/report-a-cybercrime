import { formatPostalCode } from '../formatPostalCode'

describe('formatPostalCode', () => {
  it('turns an empty or undefined string into an empty string', () => {
    expect(formatPostalCode('')).toEqual('')
    expect(formatPostalCode(undefined)).toEqual('')
  })

  it('leaves correctly formatted postal codes alone', () => {
    expect(formatPostalCode('A1A 2B2')).toEqual('A1A 2B2')
  })

  it('capitalizes letters', () => {
    expect(formatPostalCode('a1A 2b2')).toEqual('A1A 2B2')
  })

  it('adds a space in the middle if needed', () => {
    expect(formatPostalCode('A1A2B2')).toEqual('A1A 2B2')
  })
})
