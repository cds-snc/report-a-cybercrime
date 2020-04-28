import { validateDate } from '../validateDate'
import { cleanup } from '@testing-library/react'

describe('validation', () => {
  afterEach(cleanup)
  let expected = []
  it('passes correct start day', () => {
    expected = ['notDay', 'notMonth', 'isFuture', 'yearLength']
    expect(validateDate('2010', '10', '10')).toEqual(
      expect.not.arrayContaining(expected),
    )
    expect(validateDate('2010', '1', '10')).toEqual(
      expect.not.arrayContaining(expected),
    )
    expect(validateDate('2010', '20', '10')).toEqual(
      expect.not.arrayContaining(expected),
    )
    expect(validateDate('2010', '28', '10')).toEqual(
      expect.not.arrayContaining(expected),
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
    expected = ['notDay', 'notMonth', 'isFuture', 'yearLength']
    expect(validateDate('2010', '1', '10')).toEqual(
      expect.not.arrayContaining(expected),
    )
    expect(validateDate('2010', '01', '10')).toEqual(
      expect.not.arrayContaining(expected),
    )
    expect(validateDate('2010', '12', '10')).toEqual(
      expect.not.arrayContaining(expected),
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
    expected = ['yearLength']
    expect(validateDate('1', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('20', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('300', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
  })

  it('fails incorrect start year', () => {
    expected = ['yearLength']
    expect(validateDate('000', '1', '10')).toEqual(
      expect.arrayContaining(expected),
    )
    expect(validateDate('0000', '1', '10')).toEqual(
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
  it('pass correct start date in Leap year', () => {
    expect(
      validateDate({
        startDay: '29',
        startMonth: '2',
        startYear: '2020',
      }).startDay,
    ).toBeUndefined()
    expect(
      validateDate({
        startDay: '29',
        startMonth: '02',
        startYear: '2016',
      }).startDay,
    ).toBeUndefined()
  })
  it('fails incorrect transaction date in Leap year', () => {
    expect(
      validateDate({
        startDay: '30',
        startMonth: '2',
        startYear: '2020',
      }).startDay,
    ).not.toBeUndefined()
    expect(
      validateDate({
        startDay: '30',
        startMonth: '2',
        startYear: '2016',
      }).startDay,
    ).not.toBeUndefined()
  })
  it('pass correct transaction date in non-Leap year', () => {
    expect(
      validateDate({
        startDay: '28',
        startMonth: '2',
        startYear: '2017',
      }).startDay,
    ).toBeUndefined()
    expect(
      validateDate({
        startDay: '28',
        startMonth: '02',
        startYear: '2017',
      }).startDay,
    ).toBeUndefined()
  })
  it('fails incorrect transaction date in non-Leap year', () => {
    expect(
      validateDate({
        startDay: '29',
        startMonth: '2',
        startYear: '2017',
      }).startDay,
    ).not.toBeUndefined()
    expect(
      validateDate({
        startDay: '29',
        startMonth: '2',
        startYear: '2017',
      }).startDay,
    ).not.toBeUndefined()
  })
})
