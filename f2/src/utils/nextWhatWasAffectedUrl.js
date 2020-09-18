const { getLogger } = require('./winstonLogger')

const logger = getLogger(__filename)

export const whatWasAffectedPages = {
  FINANCIAL: {
    key: 'whatWasAffectedForm.financial',
    url: 'moneylost',
  },
  INFORMATION: {
    key: 'whatWasAffectedForm.personalInformation',
    url: 'information',
  },
  DEVICES: {
    key: 'whatWasAffectedForm.devices',
    url: 'devices',
  },
  BUSINESS: {
    key: 'whatWasAffectedForm.business_assets',
    url: 'business',
  },
  OTHER: {
    key: 'whatWasAffectedForm.other',
    url: '',
  },
  FIRST_PAGE: {
    key: '',
    url: 'whatwasaffected',
  },
  LAST_PAGE: {
    key: '',
    url: 'whathappened',
  },
  CONFIRMATION: {
    key: '',
    url: 'confirmation',
  },
}

export const pages = {
  firstPage: whatWasAffectedPages.FIRST_PAGE,
  lastPage: whatWasAffectedPages.LAST_PAGE,
  affectedOptions: [],
  currentPage: whatWasAffectedPages.FIRST_PAGE,
  nextPage: '',
  editOptions: false,
}

export const orderSelection = (selection) => {
  //Get ordered array of pages
  const pageOrder = Object.values(whatWasAffectedPages).map((page) => {
    return page.key
  })

  //Order selection using ordered pages
  const orderedSelection = pageOrder.filter((page) => {
    return selection.includes(page)
  })

  return orderedSelection
}

export const nextPage = (navObject) => {
  try {
    const selectedOptions = navObject.affectedOptions
    const lastSelection = selectedOptions.slice(-1)[0]
    let nextPage
    let index

    //If there are no more pages to display proceed to What Happened or Confirmation.
    if (
      navObject.currentPage.key === lastSelection ||
      selectedOptions.length === 0
    ) {
      nextPage = navObject.lastPage
      return nextPage
    }

    if (navObject.currentPage.key === navObject.firstPage.key) {
      //Leaving What Was Affected, proceed to first selection.
      index = selectedOptions[0]
    } else {
      //Get next selection.
      const currentIndex = selectedOptions.indexOf(navObject.currentPage.key)
      index = selectedOptions[currentIndex + 1]
    }

    nextPage = Object.values(whatWasAffectedPages).filter((page) => {
      return page.key === index
    })[0]

    return nextPage
  } catch (error) {
    //If an error occurs default to What Happened
    logger.error({
      message: `ERROR getting next What Was Affected page: ${error}`,
    })
    return navObject.lastPage
  }
}
