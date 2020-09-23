import {
  whatWasAffectedPages,
  pages,
  nextPage,
} from '../nextWhatWasAffectedUrl'

describe('nextWhatWasAffectedUrl', () => {
  const whatWasAffectedOptions = [
    whatWasAffectedPages.FINANCIAL.key,
    whatWasAffectedPages.INFORMATION.key,
    whatWasAffectedPages.DEVICES.key,
    whatWasAffectedPages.BUSINESS.key,
  ]

  describe('when all options selected', () => {
    const test1Pages = { ...pages }
    test1Pages.affectedOptions = whatWasAffectedOptions
    test1Pages.currentPage = whatWasAffectedPages.FIRST_PAGE
    it('finds the first page after the how affected page', () => {
      const result = nextPage(test1Pages, false)
      expect(result.url).toEqual(whatWasAffectedPages.FINANCIAL.url)
    })

    it('finds the second page after the how affected page', () => {
      test1Pages.currentPage = whatWasAffectedPages.FINANCIAL
      const result = nextPage(test1Pages, false)
      expect(result.url).toEqual(whatWasAffectedPages.INFORMATION.url)
    })

    it('finds the last page after the how affected page', () => {
      test1Pages.currentPage = whatWasAffectedPages.BUSINESS
      const result = nextPage(test1Pages, false)
      expect(result.url).toEqual('whathappened')
    })

    it('defaults to the whathappened page', () => {
      test1Pages.currentPage = whatWasAffectedPages.WILL_FAIL
      const result = nextPage(test1Pages, false)
      expect(result.url).toEqual('whathappened')
    })
  })

  describe('when two options selected', () => {
    const test2Pages = { ...pages }
    const selectedOptions = [
      whatWasAffectedPages.INFORMATION,
      whatWasAffectedPages.BUSINESS,
    ]
    test2Pages.affectedOptions = [
      selectedOptions[0].key,
      selectedOptions[1].key,
    ]
    test2Pages.currentPage = whatWasAffectedPages.FIRST_PAGE
    it('finds the first page after the how affected page', () => {
      const result = nextPage(test2Pages, false)
      expect(result.url).toEqual(selectedOptions[0].url)
    })

    it('finds the second page after the how affected page', () => {
      test2Pages.currentPage = whatWasAffectedPages.INFORMATION
      const result = nextPage(test2Pages, false)
      expect(result.url).toEqual(selectedOptions[1].url)
    })

    it('finds the last page after the how affected page', () => {
      test2Pages.currentPage = whatWasAffectedPages.BUSINESS
      const result = nextPage(test2Pages)
      expect(result.url).toEqual('whathappened')
    })
  })

  describe('when no options selected', () => {
    const test3Pages = { ...pages }
    test3Pages.affectedOptions = []
    test3Pages.currentPage = whatWasAffectedPages.FIRST_PAGE

    it('skips to the whatHappened page', () => {
      const result = nextPage(test3Pages, false)
      expect(result.url).toEqual('whathappened')
    })
  })
})
