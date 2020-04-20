// 'use strict'

const { formatDate } = require('./formatDate')

const unCamel = (text) => text.replace(/([A-Z])/g, ' $1').toLowerCase()

const formatLineHtml = (label, text) =>
  text && text !== '' ? `<tr><td>${label}</td><td>${text}</td></tr>\n` : ''

const formatTable = (rows) => `<table><tbody>\n${rows}</tbody></table>\n\n`

const formatSection = (title, rows) =>
  `<h2>${title}</h2>\n` + (rows !== '' ? formatTable(rows) : '<p>No Data</p>')

const formatReportInfo = (data) => {
  let selfHarmString = 'no self harm words'
  let returnString = ''

  if (data.selfHarmWords.length) {
    selfHarmString = data.selfHarmWords
    returnString = `\n\n<h1>SELF HARM WORDS FOUND : ${selfHarmString}</h1>`
  }

  let isAnonymous = data.anonymous.anonymousOptions[0].replace(
    'anonymousPage.',
    '',
  )
  returnString +=
    '<h2>Report Information</h2>' +
    formatTable(
      formatLineHtml('Report number:', data.reportId) +
        formatLineHtml('Date received:', data.submissionTime) +
        formatLineHtml('Report language:', data.language) +
        formatLineHtml('Report version:', data.prodVersion) +
        formatLineHtml('Anonymous report:', isAnonymous) +
        formatLineHtml('Flagged:', selfHarmString),
    )
  // we delete the parts of the data object that we've displayed, so that at the end we can display the rest and ensure that we didn't miss anything
  delete data.anonymous.anonymousOptions
  delete data.reportId
  delete data.submissionTime
  delete data.language
  delete data.appVersion
  delete data.selfHarmWords
  delete data.submissionDate
  delete data.prodVersion
  return returnString
}

const formatVictimDetails = (data) => {
  const consentString = data.consent.consentOptions
    .map((option) => option.replace('privacyConsentInfoForm.', ''))
    .join(', ')

  const rows =
    formatLineHtml('Name:', data.contactInfo.fullName) +
    formatLineHtml('Email:', data.contactInfo.email) +
    formatLineHtml('Phone number:', data.contactInfo.phone) +
    formatLineHtml('City:', data.location.city) +
    formatLineHtml('Province:', data.location.province) +
    formatLineHtml('Postal code:', data.location.postalCode) +
    formatLineHtml('Consent:', consentString)

  delete data.contactInfo.fullName
  delete data.contactInfo.email
  delete data.contactInfo.phone
  delete data.location.city
  delete data.location.province
  delete data.location.postalCode
  delete data.consent.consentOptions
  return formatSection('Victim details', rows)
}

const formatIncidentInformation = (data) => {
  const occurenceString = formatDate(
    data.howdiditstart.startDay,
    data.howdiditstart.startMonth,
    data.howdiditstart.startYear,
  )
  const freqString = unCamel(
    data.howdiditstart.howManyTimes.replace('howManyTimes.', ''),
  )

  const methodOfCommsString = data.howdiditstart.howDidTheyReachYou
    .map((how) => unCamel(how.replace('howDidTheyReachYou.', '')))
    .join(', ')
  const affectedString = data.whatWasAffected.affectedOptions
    .map((option) => unCamel(option.replace('whatWasAffectedForm.', '')))
    .filter((option) => option !== 'other')
    .join(', ')

  const rows =
    formatLineHtml('Occurrence date:            ', occurenceString) +
    formatLineHtml('Frequency of occurrence:    ', freqString) +
    formatLineHtml('Method of communication:    ', methodOfCommsString) +
    formatLineHtml('What could be affected:     ', affectedString)
  delete data.howdiditstart.startDay
  delete data.howdiditstart.startMonth
  delete data.howdiditstart.startYear
  delete data.howdiditstart.howManyTimes
  delete data.howdiditstart.howDidTheyReachYou
  delete data.whatWasAffected.affectedOptions
  delete data.howdiditstart.whenDidItStart
  return formatSection('Incident information', rows)
}

const formatNarrative = (data) => {
  const infoReqString = data.personalInformation.typeOfInfoReq
    .map((info) => unCamel(info.replace('typeOfInfoReq.', '')))
    .map((info) =>
      info === 'other' &&
      data.personalInformation.infoReqOther &&
      data.personalInformation.infoReqOther !== ''
        ? data.personalInformation.infoReqOther
        : info,
    )
    .join(', ')

  const infoObtainedString = data.personalInformation.typeOfInfoObtained
    .map((info) => unCamel(info.replace('typeOfInfoObtained.', '')))
    .map((info) =>
      info === 'other' &&
      data.personalInformation.infoObtainedOther &&
      data.personalInformation.infoObtainedOther !== ''
        ? data.personalInformation.infoObtainedOther
        : info,
    )
    .join(', ')

  const rows =
    formatLineHtml('What happened:', data.whatHappened.whatHappened) +
    formatLineHtml(
      'They asked for (financial):',
      data.moneyLost.demandedMoney,
    ) +
    formatLineHtml('They asked for (information):', infoReqString) +
    formatLineHtml('I lost (financial):', data.moneyLost.moneyTaken) +
    formatLineHtml('I lost (information):', infoObtainedString) +
    formatLineHtml('Affected device:', data.devicesInfo.device) +
    formatLineHtml('Affected account:', data.devicesInfo.account) +
    formatLineHtml(
      'Name of business/organzation:  ',
      data.businessInfo.nameOfBusiness,
    ) +
    formatLineHtml('Type of industry:  ', data.businessInfo.industry) +
    formatLineHtml('Role:  ', data.businessInfo.role) +
    formatLineHtml(
      'Number of employee:  ',
      data.businessInfo.numberOfEmployee,
    ) +
    formatLineHtml('Other clues:             ', data.suspectClues.suspectClues3)

  delete data.personalInformation.typeOfInfoReq
  delete data.personalInformation.typeOfInfoObtained
  delete data.whatHappened.whatHappened
  delete data.personalInformation.infoReqOther
  delete data.personalInformation.infoObtainedOther
  delete data.devicesInfo.device
  delete data.devicesInfo.account
  delete data.businessInfo.business
  delete data.businessInfo.nameOfBusiness
  delete data.businessInfo.industry
  delete data.businessInfo.role
  delete data.businessInfo.numberOfEmployee
  delete data.suspectClues.suspectClues3
  return formatSection('Narrative', rows)
}

const formatSuspectDetails = (data) => {
  const rows =
    formatLineHtml('Name:          ', data.suspectClues.suspectClues1) +
    formatLineHtml('Email:         ', data.howdiditstart.email) +
    formatLineHtml('Phone number:  ', data.howdiditstart.phone) +
    formatLineHtml('Website:       ', data.howdiditstart.online) +
    formatLineHtml('Application:   ', data.howdiditstart.application) +
    formatLineHtml('Address:       ', data.suspectClues.suspectClues2) +
    formatLineHtml('Other:         ', data.howdiditstart.others)

  delete data.suspectClues.suspectClues1
  delete data.howdiditstart.email
  delete data.howdiditstart.phone
  delete data.howdiditstart.online
  delete data.howdiditstart.application
  delete data.suspectClues.suspectClues2
  delete data.howdiditstart.others
  return formatSection('Suspect details', rows)
}

const formatFinancialTransactions = (data) => {
  const methods =
    data.moneyLost.methodOther && data.moneyLost.methodOther.length > 0
      ? data.moneyLost.methodPayment.concat([data.moneyLost.methodOther])
      : data.moneyLost.methodPayment

  const paymentString = methods
    .filter((method) => method !== 'methodPayment.other')
    .map((method) => unCamel(method.replace('methodPayment.', '')))
    .join(', ')

  const transactionDate = formatDate(
    data.moneyLost.transactionDay,
    data.moneyLost.transactionMonth,
    data.moneyLost.transactionYear,
  )
  const rows =
    formatLineHtml('Money requested:     ', data.moneyLost.demandedMoney) +
    formatLineHtml('Money lost:          ', data.moneyLost.moneyTaken) +
    formatLineHtml('Method of payment:   ', paymentString) +
    formatLineHtml('Transaction date:    ', transactionDate)

  delete data.moneyLost.methodOther
  delete data.moneyLost.methodPayment
  delete data.moneyLost.demandedMoney
  delete data.moneyLost.moneyTaken
  delete data.moneyLost.transactionDay
  delete data.moneyLost.transactionMonth
  delete data.moneyLost.transactionYear
  return formatSection('Financial transactions', rows)
}

const formatFileAttachments = (data) => {
  const returnString = data.evidence.files
    .map((file) => {
      const offensive =
        file.isImageAdultClassified || file.isImageRacyClassified

      const moderatorString =
        file.adultClassificationScore === 'Could not scan'
          ? formatLineHtml('Image classification:', 'Could not scan content')
          : formatLineHtml('Is adult:      ', file.isImageAdultClassified) +
            formatLineHtml('Adult score:   ', file.adultClassificationScore) +
            formatLineHtml('Is racy:       ', file.isImageRacyClassified) +
            formatLineHtml('Racy Score:    ', file.racyClassificationScore)

      return (
        formatLineHtml(
          '<b>WARNING:</b>',
          offensive ? '<b>Image may be offensive</b>' : '',
        ) +
        formatLineHtml('File name:     ', file.name) +
        formatLineHtml('Description:   ', file.fileDescription) +
        formatLineHtml('Size:          ', file.size + ' bytes') +
        formatLineHtml('CosmosDB file: ', file.sha1) +
        formatLineHtml(
          'Malware scan:',
          file.malwareIsClean ? 'Clean' : file.malwareScanDetail,
        ) +
        moderatorString
      )
    })
    .join('<tr><td>&nbsp;</td></tr>')

  delete data.evidence.files
  delete data.evidence.fileDescriptions
  return (
    '<h2>File attachments</h2>\n' +
    (returnString !== '' ? formatTable(returnString) : 'No files attached\n')
  )
}

const formatAnalystEmail = (dataOrig) => {
  let returnString = ''
  let reportInfoString = ''
  let missingFields

  let data
  try {
    data = JSON.parse(JSON.stringify(dataOrig))
    reportInfoString = formatReportInfo(data)
  } catch (error) {
    const errorMessage = `ERROR in formatAnalystEmail (report ${dataOrig.reportId}): ${error}`
    console.error(errorMessage)
    return errorMessage
  }
  try {
    returnString =
      reportInfoString +
      formatVictimDetails(data) +
      formatIncidentInformation(data) +
      formatNarrative(data) +
      formatSuspectDetails(data) +
      formatFinancialTransactions(data) +
      formatFileAttachments(data)

    // take data object and delete any objects that are now empty, and display the rest
    Object.keys(data).forEach((key) => {
      if (Object.keys(data[key]).length === 0) delete data[key]
    })
    missingFields = Object.keys(data).length
      ? '\n<h2>Fields missing from above report</h2>\n' +
        `<p>${JSON.stringify(data, null, '  ')}</p>\n`
      : ''
  } catch (error) {
    const errorMessage =
      reportInfoString +
      `\nERROR in formatAnalystEmail (report ${dataOrig.reportId}): ${error}`
    console.error(errorMessage)
    return errorMessage
  }
  return returnString + missingFields
}

module.exports = { formatAnalystEmail }
