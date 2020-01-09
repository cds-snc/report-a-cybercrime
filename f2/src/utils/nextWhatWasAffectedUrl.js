import { whatWasAffectedPages } from '../forms/WhatWasAffectedForm'

export const nextWhatWasAffectedUrl = (optionsSelected, currentPage) => {
  let pages = whatWasAffectedPages.filter(
    page => page.url !== '' && optionsSelected.indexOf(page.key) > -1,
  )
  pages.unshift({ key: '', url: 'whatwasaffected' }) // start of list
  pages.push({ key: '', url: 'whathappened' }) // end of list

  for (const [index, page] of pages.entries()) {
    if (page.url === currentPage) {
      return pages[Math.min(index + 1, pages.length)].url
    }
  }
  return pages[pages.length - 1].url
}
