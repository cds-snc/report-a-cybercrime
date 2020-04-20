import { clientFieldsAreValid } from '../clientFieldsAreValid'

describe('clientFieldsAreValid', () => {
  it('returns true if no fields', () => {
    const data = {}
    const defaults = { a: 0, b: 12, c: 4 }
    expect(clientFieldsAreValid(data, defaults)).toEqual(true)
  })

  it('returns true if field is valid', () => {
    const data = { a: 1, b: 2 }
    const defaults = { a: 0, b: 12, c: 4 }
    expect(clientFieldsAreValid(data, defaults)).toEqual(true)
  })

  it('returns false if a field is not valid', () => {
    const data = { a: 1, d: 2 }
    const defaults = { a: 0, b: 12, c: 4 }
    expect(clientFieldsAreValid(data, defaults)).toEqual(false)
  })
})
