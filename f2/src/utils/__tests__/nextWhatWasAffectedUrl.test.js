import { nextWhatWasAffectedUrl } from '../nextWhatWasAffectedUrl'
import { whatWasAffectedPages } from '../../forms/WhatWasAffectedForm'

describe('nextWhatWasAffectedUrl', () => {
  describe('when all options selected', () => {
    const allOptions = whatWasAffectedPages.map(page => page.key)

    it('finds the first page after the how affected page', () => {
      expect(nextWhatWasAffectedUrl(allOptions, 'whatwasaffected')).toEqual(
        whatWasAffectedPages[0].url,
      )
    })

    it('finds the second page after the how affected page', () => {
      expect(
        nextWhatWasAffectedUrl(allOptions, whatWasAffectedPages[0].url),
      ).toEqual(whatWasAffectedPages[1].url)
    })

    it('finds the last page after the how affected page', () => {
      expect(
        nextWhatWasAffectedUrl(
          allOptions,
          whatWasAffectedPages[whatWasAffectedPages.length - 1].url,
        ),
      ).toEqual('whathappened')
    })

    it('defaults to the whathappened page', () => {
      expect(nextWhatWasAffectedUrl(allOptions, 'not a page')).toEqual(
        'whathappened',
      )
    })
  })
  describe('when two options selected', () => {
    const twoPages = [whatWasAffectedPages[1], whatWasAffectedPages[3]]
    const twoOptions = twoPages.map(page => page.key)

    it('finds the first page after the how affected page', () => {
      expect(nextWhatWasAffectedUrl(twoOptions, 'whatwasaffected')).toEqual(
        twoPages[0].url,
      )
    })

    it('finds the second page after the how affected page', () => {
      expect(nextWhatWasAffectedUrl(twoOptions, twoPages[0].url)).toEqual(
        twoPages[1].url,
      )
    })

    it('finds the last page after the how affected page', () => {
      expect(nextWhatWasAffectedUrl(twoOptions, twoPages[1].url)).toEqual(
        'whathappened',
      )
    })
  })

  describe('when no options selected', () => {
    const noOptions = []

    it('skips to the whatHappened page', () => {
      expect(nextWhatWasAffectedUrl(noOptions, 'whatwasaffected')).toEqual(
        'whathappened',
      )
    })
  })
})
