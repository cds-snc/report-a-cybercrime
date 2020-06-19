import { whatWasAffectedPages } from '../forms/WhatWasAffectedForm'

export const nextWhatWasAffectedUrl = (optionsSelected, currentPage) => {
  let pages = whatWasAffectedPages.filter(
    (page) => page.url !== '' && optionsSelected.indexOf(page.key) > -1,
  )
  pages.unshift({ key: '', url: 'whatwasaffected' }) // start of list
  pages.push({ key: '', url: 'whathappened' }) // end of list

  console.log('')
  console.log(`Current Page: ${currentPage}`)
  console.log(`What was affected pages: ${JSON.stringify(pages, null, 2)}`)
  console.log('')

  for (const [index, page] of pages.entries()) {
    if (page.url === currentPage) {
      let test = pages[Math.min(index + 1, pages.length)].url
      console.log(`Test value: ${test}`)
      return test
    }
  }
  return pages[pages.length - 1].url
}
