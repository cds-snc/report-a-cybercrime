export const whatWasAffectedPages = {
  FINANCIAL: {
    key: 'whatWasAffectedForm.financial',
    url: 'moneylost',
    nextPageTextInPreviousPage: 'previousPageofMoneyLost.nextPage',
  },
  INFORMATION: {
    key: 'whatWasAffectedForm.personalInformation',
    url: 'information',
    nextPageTextInPreviousPage: 'previousPageofInformation.nextPage',
  },
  DEVICES: {
    key: 'whatWasAffectedForm.devices',
    url: 'devices',
    nextPageTextInPreviousPage: 'previousPageofDevices.nextPage',
  },
  BUSINESS: {
    key: 'whatWasAffectedForm.business_assets',
    url: 'business',
    nextPageTextInPreviousPage: 'previousPageofBusiness.nextPage',
  },
  OTHER: {
    key: 'whatWasAffectedForm.other',
    url: '',
    nextPageTextInPreviousPage: '',
  },
  FIRST_PAGE: {
    key: 'whatWasAffectedForm',
    url: 'whatwasaffected',
    nextPageTextInPreviousPage: '',
  },
  LAST_PAGE: {
    key: '',
    url: 'whathappened',
    nextPageTextInPreviousPage: 'previousPageofWhathappened.nextPage',
  },
  CONFIRMATION: {
    key: '',
    url: 'confirmation',
    nextPageTextInPreviousPage: 'previousPageofConfirmation.nextPage',
  },
}

export const whatWasAffectedNavState = {
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

export const nextPage = (navObject, doneForms) => {
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
      return doneForms
        ? whatWasAffectedPages.CONFIRMATION
        : whatWasAffectedPages.LAST_PAGE
    }

    if (navObject.currentPage.key === whatWasAffectedPages.FIRST_PAGE.key) {
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
    return doneForms
      ? whatWasAffectedPages.CONFIRMATION
      : whatWasAffectedPages.LAST_PAGE
  }
}

export const navigate = (doneForms, whatWasAffectedNavState) => {
  if (doneForms && !whatWasAffectedNavState.editOptions) {
    whatWasAffectedNavState.nextPage = whatWasAffectedPages.CONFIRMATION
  } else {
    whatWasAffectedNavState.nextPage = nextPage(
      whatWasAffectedNavState,
      doneForms,
    )
  }

  if (whatWasAffectedNavState.nextPage === whatWasAffectedPages.CONFIRMATION) {
    whatWasAffectedNavState.editOptions = false
  }
}
