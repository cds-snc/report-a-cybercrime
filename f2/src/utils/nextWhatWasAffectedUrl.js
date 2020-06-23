import { whatWasAffectedPages } from '../forms/WhatWasAffectedForm'

export const nextWhatWasAffectedUrl = (optionsSelected, currentPage) => {
  let pages = whatWasAffectedPages.filter(
    (page) => page.url !== '' && optionsSelected.indexOf(page.key) > -1,
  )
  pages.unshift({ key: '', url: 'whatwasaffected' }) // start of list
  pages.push({ key: '', url: 'whathappened' }) // end of list

  for (const [index, page] of pages.entries()) {
    if (page.url === currentPage) {
      let test = pages[Math.min(index + 1, pages.length)].url
      return test
    }
  }
  return pages[pages.length - 1].url
}

export const getNextPage = (data, selectedOptions) => {
  console.log(selectedOptions)

  for (const page of whatWasAffectedPages) {
    if (selectedOptions.affectedOptions.includes(page['key'])) {
      console.log(page['key'])
      console.log(data[page['formData']])
    }
  }
}

const formComplete = (form) => {}
