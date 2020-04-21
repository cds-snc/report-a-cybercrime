import { validate } from '../validateDate'

describe('validation', () => {
  afterEach(cleanup)

  it('passes correct start day', () => {
    expect(validate({ startDay: '1' }).startDay).toBeUndefined()
    expect(validate({ startDay: '01' }).startDay).toBeUndefined()
    expect(validate({ startDay: '20' }).startDay).toBeUndefined()
    expect(validate({ startDay: '28' }).startDay).toBeUndefined()
  })

  it('fails incorrect start day', () => {
    expect(validate({ startDay: '0' }).startDay).not.toBeUndefined()
    expect(validate({ startDay: '00' }).startDay).not.toBeUndefined()
    expect(validate({ startDay: '32' }).startDay).not.toBeUndefined()
  })

  it('passes correct start month', () => {
    expect(validate({ startMonth: '1' }).startMonth).toBeUndefined()
    expect(validate({ startMonth: '01' }).startMonth).toBeUndefined()
    expect(validate({ startMonth: '12' }).startMonth).toBeUndefined()
    expect(validate({ startMonth: '08' }).startMonth).toBeUndefined()
  })

  it('fails incorrect start month', () => {
    expect(validate({ startMonth: '0' }).startMonth).not.toBeUndefined()
    expect(validate({ startMonth: '00' }).startMonth).not.toBeUndefined()
    expect(validate({ startMonth: '13' }).startMonth).not.toBeUndefined()
  })

  it('passes correct start year', () => {
    expect(validate({ startYear: '1900' }).startYear).toBeUndefined()
    expect(validate({ startYear: '2020' }).startYear).toBeUndefined()
    expect(validate({ startYear: '0001' }).startYear).toBeUndefined()
  })

  it('fails incorrect start year', () => {
    expect(validate({ startYear: '000' }).startYear).not.toBeUndefined()
    expect(validate({ startYear: '0000' }).startYear).not.toBeUndefined()
    expect(validate({ startYear: '202' }).startYear).not.toBeUndefined()
    expect(validate({ startYear: '20' }).startYear).not.toBeUndefined()
  })
  it('pass correct start date in Leap year', () => {
    expect(
      validate({
        startDay: '29',
        startMonth: '2',
        startYear: '2020',
      }).startDay,
    ).toBeUndefined()
    expect(
      validate({
        startDay: '29',
        startMonth: '02',
        startYear: '2016',
      }).startDay,
    ).toBeUndefined()
  })
  it('fails incorrect transaction date in Leap year', () => {
    expect(
      validate({
        startDay: '30',
        startMonth: '2',
        startYear: '2020',
      }).startDay,
    ).not.toBeUndefined()
    expect(
      validate({
        startDay: '30',
        startMonth: '2',
        startYear: '2016',
      }).startDay,
    ).not.toBeUndefined()
  })
  it('pass correct transaction date in non-Leap year', () => {
    expect(
      validate({
        startDay: '28',
        startMonth: '2',
        startYear: '2017',
      }).startDay,
    ).toBeUndefined()
    expect(
      validate({
        startDay: '28',
        startMonth: '02',
        startYear: '2017',
      }).startDay,
    ).toBeUndefined()
  })
  it('fails incorrect transaction date in non-Leap year', () => {
    expect(
      validate({
        startDay: '29',
        startMonth: '2',
        startYear: '2017',
      }).startDay,
    ).not.toBeUndefined()
    expect(
      validate({
        startDay: '29',
        startMonth: '2',
        startYear: '2017',
      }).startDay,
    ).not.toBeUndefined()
  })
})
