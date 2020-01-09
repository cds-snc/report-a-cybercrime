export const nextAffectedPage = (optionsSelected, currentPage) => {
  let pages = [
    { key: '', url: 'whatwasaffected' },
    { key: 'whatWasAffectedForm.financial', url: 'money' },
    { key: 'whatWasAffectedForm.personal_information', url: 'information' },
    { key: 'whatWasAffectedForm.devices', url: 'devices' },
    { key: 'whatWasAffectedForm.business_assets', url: 'business' },
    { key: '', url: 'whathappened' },
  ].filter(page => page.key == '' || optionsSelected.indexOf(page.key) > -1)

  for (const [index, page] of pages.entries()) {
    if (page.url == currentPage) {
      return pages[Math.min(index + 1, pages.length)].url
    }
  }
  return pages[pages.length - 1].url
}
