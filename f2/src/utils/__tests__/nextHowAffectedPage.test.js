import { nextAffectedPage } from '../nextHowAffectedPage'

describe('nextAffectedPage', () => {
  describe('when all options selected', () => {
    const allOptions = [
      'whatWasAffectedForm.financial',
      'whatWasAffectedForm.personal_information',
      'whatWasAffectedForm.devices',
      'whatWasAffectedForm.business_assets',
      'whatWasAffectedForm.other',
    ]

    it('finds the first page after the how affected page', () => {
      expect(nextAffectedPage(allOptions, 'whatwasaffected')).toEqual('money')
    })

    it('finds the second page after the how affected page', () => {
      expect(nextAffectedPage(allOptions, 'money')).toEqual('information')
    })

    it('finds the last page after the how affected page', () => {
      expect(nextAffectedPage(allOptions, 'business')).toEqual('whathappened')
    })

    it('defaults to the whathappened page', () => {
      expect(nextAffectedPage(allOptions, 'not a page')).toEqual('whathappened')
    })
  })
  describe('when two options selected', () => {
    const twoOptions = [
      'whatWasAffectedForm.personal_information',
      'whatWasAffectedForm.devices',
    ]

    it('finds the first page after the how affected page', () => {
      expect(nextAffectedPage(twoOptions, 'whatwasaffected')).toEqual(
        'information',
      )
    })

    it('finds the second page after the how affected page', () => {
      expect(nextAffectedPage(twoOptions, 'information')).toEqual('devices')
    })

    it('finds the last page after the how affected page', () => {
      expect(nextAffectedPage(twoOptions, 'devices')).toEqual('whathappened')
    })
  })

  describe('when no options selected', () => {
    const noOptions = []

    it('skips to the whatHappened page', () => {
      expect(nextAffectedPage(noOptions, 'whatwasaffected')).toEqual(
        'whathappened',
      )
    })
  })
})
