import { validateDate } from '../validateDate'
import { cleanup } from '@testing-library/react'

describe('validation', () => {
  afterEach(cleanup)
  let expected = []
  it('passes correct start day', () => {
    expected = []
    expect(validateDate('2010', '10', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '20', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '28', '10')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('fails incorrect start day', () => {
    expected = ['notDay']
    expect(validateDate('2010', '11', '31')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '10', '32')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '10', '0')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '10', '00')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('passes correct start month', () => {
    expected = []
    expect(validateDate('2010', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '01', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '12', '10')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('fails incorrect start month', () => {
    expected = ['notMonth']
    expect(validateDate('2010', '0', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '00', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2010', '13', '10')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('passes correct start year', () => {
    expected = []
    expect(validateDate('2000', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('1900', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('fails incorrect start year', () => {
    //4 digit years
    expected = ['notYear']
    expect(validateDate('0000', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )

    // less than 4 digit years
    expected = ['yearLength']
    expect(validateDate('000', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('330', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('20', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('1', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('passes correct start date in Leap year', () => {
    expected = []
    expect(validateDate('2020', '2', '29')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2016', '02', '29')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('fails incorrect transaction date in Leap year', () => {
    expected = ['notDay']
    expect(validateDate('2019', '2', '29')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2017', '02', '29')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('passes correct transaction date in non-Leap year', () => {
    expected = []
    expect(validateDate('2017', '2', '28')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2019', '02', '28')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('fails incorrect transaction date in non-Leap year', () => {
    expected = ['notDay']
    expect(validateDate('2017', '2', '29')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('2019', '02', '29')).toEqual(
      expect.arrayContaining(expected),
    )
  })
})
