// 'use strict'

const formatLine = (label, text) => (text !== '' ? label + text + '\n' : '')

const formatReportInfo = data => {
  const selfHarmString = data.selfHarmWords.length
    ? data.selfHarmWords
    : 'no self harm words'
  const returnString =
    formatLine('Report number:      ', data.reportId) +
    formatLine('Date received:      ', data.submissionTime) +
    formatLine('Report language:    ', data.language) +
    formatLine('Flagged:            ', selfHarmString)

  delete data.reportId // we delete the parts of the data object that we've displayed
  delete data.submissionTime // so that at the end we can display the rest and ensure that
  delete data.language // we didn't miss anything
  delete data.selfHarmWords
  return (
    'Report information\n\n' + (returnString !== '' ? returnString : 'No Data')
  )
}

const formatVictimDetails = data => {
  const consentString = data.consent.consentOptions
    .map(option => option.replace('privacyConsentInfoForm.', ''))
    .join(', ')

  const returnString =
    formatLine('Name:             ', data.contactInfo.fullName) +
    formatLine('Email:            ', data.contactInfo.email) +
    formatLine('Phone number:     ', data.contactInfo.phone) +
    formatLine('Postal code:      ', data.location.postalCode) +
    formatLine('Consent:          ', consentString)

  delete data.contactInfo.fullName
  delete data.contactInfo.email
  delete data.contactInfo.phone
  delete data.location.postalCode
  delete data.consent.consentOptions
  return (
    '\n\nVictim details\n\n' + (returnString !== '' ? returnString : 'No Data')
  )
}

const formatIncidentInformation = data => {
  const occurenceString = data.howdiditstart.whenDidItStart.replace(
    'whenDidItStart.',
    '',
  )
  const freqString = data.howdiditstart.howManyTimes.replace(
    'howManyTimes.',
    '',
  )
  const methodOfCommsString = data.howdiditstart.howDidTheyReachYou
    .map(how => how.replace('howDidTheyReachYou.', ''))
    .join(', ')
  const affectedString = data.whatWasAffected.affectedOptions
    .map(option => option.replace('whatWasAffectedForm.', ''))
    .filter(option => option !== 'other')
    .join(', ')

  const returnString =
    formatLine('Occurrence date:            ', occurenceString) +
    formatLine('Frequency of occurrence:    ', freqString) +
    formatLine('Method of communication:    ', methodOfCommsString) +
    formatLine('What could be affected:     ', affectedString) +
    formatLine('What could be affected:     ', data.whatWasAffected.optionOther)

  delete data.howdiditstart.whenDidItStart
  delete data.howdiditstart.howManyTimes
  delete data.howdiditstart.howDidTheyReachYou
  delete data.whatWasAffected.affectedOptions
  delete data.whatWasAffected.optionOther
  return (
    '\n\nIncident information\n\n' +
    (returnString !== '' ? returnString : 'No Data')
  )
}

const formatNarrative = data => {
  const infoReqString = data.personalInformation.typeOfInfoReq
    .map(info => info.replace('typeOfInfoReq.', ''))
    .join(', ')

  const infoObtainedString = data.personalInformation.typeOfInfoObtained
    .map(info => info.replace('typeOfInfoObtained.', ''))
    .join(', ')

  const returnString =
    formatLine('What happened:           ', data.whatHappened.whatHappened) +
    formatLine('They asked for:          ', data.moneyLost.demandedMoney) +
    formatLine('They asked for:          ', infoReqString) +
    formatLine(
      'They asked for:          ',
      data.personalInformation.infoReqOther,
    ) +
    formatLine('I lost:                  ', data.moneyLost.moneyTaken) +
    formatLine('I lost:                  ', infoObtainedString) +
    formatLine(
      'I lost:                  ',
      data.personalInformation.infoObtainedOther,
    ) +
    formatLine('Affected devices:        ', data.devicesInfo.deviceOrAccount) +
    formatLine(
      'Affected devices:        ',
      data.devicesInfo.devicesTellUsMore,
    ) +
    formatLine('Affected finances:       ', data.moneyLost.tellUsMore) +
    formatLine(
      'Affected personal info:  ',
      data.personalInformation.tellUsMore,
    ) +
    formatLine('Affected business info:  ', data.businessInfo.business) +
    formatLine('Other clues:             ', data.suspectClues.suspectClues3)

  delete data.personalInformation.typeOfInfoReq
  delete data.personalInformation.typeOfInfoObtained
  delete data.whatHappened.whatHappened
  delete data.personalInformation.infoReqOther
  delete data.personalInformation.infoObtainedOther
  delete data.devicesInfo.deviceOrAccount
  delete data.moneyLost.tellUsMore
  delete data.personalInformation.tellUsMore
  delete data.devicesInfo.devicesTellUsMore
  delete data.businessInfo.business
  delete data.suspectClues.suspectClues3
  return '\n\nNarrative\n\n' + (returnString !== '' ? returnString : 'No Data')
}

const formatSuspectDetails = data => {
  const returnString =
    formatLine('Name:          ', data.suspectClues.suspectClues1) +
    formatLine('Email:         ', data.howdiditstart.email) +
    formatLine('Phone number:  ', data.howdiditstart.phone) +
    formatLine('Website:       ', data.howdiditstart.online) +
    formatLine('Application:   ', data.howdiditstart.application) +
    formatLine('Address:       ', data.suspectClues.suspectClues2) +
    formatLine('Other:         ', data.howdiditstart.others)

  delete data.suspectClues.suspectClues1
  delete data.howdiditstart.email
  delete data.howdiditstart.phone
  delete data.howdiditstart.online
  delete data.howdiditstart.application
  delete data.suspectClues.suspectClues2
  delete data.howdiditstart.others
  return (
    '\n\nSuspect details\n\n' + (returnString !== '' ? returnString : 'No Data')
  )
}

const formatFinancialTransactions = data => {
  const paymentString = data.moneyLost.methodPayment
    .map(method => method.replace('methodPayment.', ''))
    .join(', ')

  const returnString =
    formatLine('Money requested:     ', data.moneyLost.demandedMoney) +
    formatLine('Money lost:          ', data.moneyLost.moneyTaken) +
    formatLine('Method of payment:   ', paymentString) +
    formatLine('Transaction date:    ', data.moneyLost.transactionDate)

  delete data.moneyLost.methodPayment
  delete data.moneyLost.demandedMoney
  delete data.moneyLost.moneyTaken
  delete data.moneyLost.transactionDate
  return (
    '\n\nFinancial transactions\n\n' +
    (returnString !== '' ? returnString : 'No Data')
  )
}

const formatFileAttachments = data => {
  const returnString = data.evidence.files
    .map(
      file =>
        formatLine('File name:     ', file.name) +
        formatLine('Description:   ', file.fileDescription) +
        formatLine('Size:          ', file.size + ' bytes') +
        formatLine('CosmosDB file: ', file.sha1) +
        (file.malwareIsClean
          ? 'Malware scan:  Clean'
          : formatLine('Malware scan:  ', file.malwareScanDetail)),
    )
    .join('\n\n')

  delete data.evidence.files
  delete data.evidence.fileDescriptions
  return (
    '\n\nFile attachments\n\n' +
    (returnString !== '' ? returnString : 'No files attached\n')
  )
}

const formatAnalystEmail = dataOrig => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  let returnString =
    formatReportInfo(data) +
    formatVictimDetails(data) +
    formatIncidentInformation(data) +
    formatNarrative(data) +
    formatSuspectDetails(data) +
    formatFinancialTransactions(data) +
    formatFileAttachments(data)

  // take data object and delete any objects that are now empty, and display the rest
  Object.keys(data).forEach(key => {
    if (Object.keys(data[key]).length === 0) delete data[key]
  })
  let missingFields = Object.keys(data).length
    ? '\n\nExtra Fields:\n' + JSON.stringify(data, null, '  ')
    : ''
  return returnString + missingFields
}

module.exports = { formatAnalystEmail }
