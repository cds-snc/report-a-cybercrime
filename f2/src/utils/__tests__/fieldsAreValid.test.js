import { fieldsAreValid } from '../fieldsAreValid'
const { formDefaults } = require('../../forms/defaultValues')
const flatten = require('flat')

console.warn = jest.fn() // surpress warning messages

describe('fieldsAreValid', () => {
  it('passes valid fields', () => {
    const requiredFields = flatten(formDefaults, { safe: true })
    expect(fieldsAreValid(requiredFields)).toEqual(true)
  })

  it('fails if there are extra fields', () => {
    let requiredFields = flatten(formDefaults, { safe: true })
    requiredFields.extraTestField = 'extra'
    expect(fieldsAreValid(requiredFields)).toEqual(false)
  })

  it('fails if there is a missing field', () => {
    let requiredFields = flatten(formDefaults, { safe: true })
    delete requiredFields['consent.consentOptions']
    expect(fieldsAreValid(requiredFields)).toEqual(false)
  })

  it('fails if an expected field has the wrong type', () => {
    let requiredFields = flatten(formDefaults, { safe: true })
    requiredFields['consent.consentOptions'] = 'string'
    expect(fieldsAreValid(requiredFields)).toEqual(false)
  })
})
