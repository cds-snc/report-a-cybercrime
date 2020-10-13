// 'use strict'

const { getFileExtension } = require('./filenameUtils')

const fs = require('fs')

const { formatDate } = require('./formatDate')
var zipcodes = require('zipcodes')

const unCamel = (text) =>
  text.replace(/([A-Z])|([\d]+)/g, ' $1$2').toLowerCase()

const formatLineHtml = (label, text) =>
  text && text !== ''
    ? `<tr><td style="width:300px">${label}</td><td>${text}</td></tr>\n`
    : ''

const formatTable = (rows) => `<table><tbody>\n${rows}</tbody></table>\n\n`

const formatDownloadLink = (filename, url) =>
  `<tr><td colspan='2'><a href='${url}'>Download ${filename}</a></tr></td>\n`

const formatSection = (title, rows) =>
  `<h2>${title}</h2>\n` +
  (rows !== '' ? formatTable(rows) : lang['analystReport.noData'])

let lang
let langEn = fs.readFileSync('src/locales/en.json')
let langFr = fs.readFileSync('src/locales/fr.json')
let langJsonEn = JSON.parse(langEn)
let langJsonFr = JSON.parse(langFr)

const formatReportInfo = (data) => {
  //set language to use based report language
  data.language === 'en' ? (lang = langJsonEn) : (lang = langJsonFr)

  let selfHarmString = data.language === 'en' ? 'None' : 'Aucun'

  let returnString = ''

  if (data.selfHarmWords.length) {
    selfHarmString = lang['analystReport.selfHarmString']
    returnString =
      `\n\n<h1 style="background-color:yellow;">` +
      lang['analystReport.selfHarmWord'] +
      `${data.selfHarmWords}</h1>`
  }

  let origAnonymousFromObj = data.anonymous.anonymousOptions[0].replace(
    'anonymousPage.',
    '',
  )

  let isAnonymous
  if (origAnonymousFromObj === 'yes') {
    isAnonymous = data.language === 'en' ? 'Yes' : 'Oui'
  } else {
    isAnonymous = data.language === 'en' ? 'No' : 'Non'
  }

  let reportLanguage = data.language === 'fr' ? 'Français' : 'English'

  let fyiForm
  if (data.fyiForm === 'yes') {
    fyiForm =
      data.language === 'en' ? 'Qick Tip' : 'soumettre des renseignements'
  } else {
    fyiForm = data.language === 'en' ? 'Full Report' : 'Rapport complet'
  }

  // let fyiForm = data.fyiForm === 'yes' ? 'Qick Tip' : 'Full Report'

  returnString +=
    '<h2>' +
    lang['analystReport.reportInformation'] +
    '</h2>' +
    formatTable(
      formatLineHtml(lang['analystReport.reportNumber'], data.reportId) +
        formatLineHtml(
          lang['analystReport.dateReceived'],
          data.submissionTime,
        ) +
        formatLineHtml(lang['analystReport.reportLanguage'], reportLanguage) +
        formatLineHtml(lang['analystReport.reportVersion'], data.prodVersion) +
        formatLineHtml(lang['confirmationPage.anonymous.title'], isAnonymous) +
        formatLineHtml(lang['analystReport.fyiForm'], fyiForm) +
        formatLineHtml(lang['analystReport.flagged'], selfHarmString),
    )

  // we delete the parts of the data object that we've displayed, so that at the end we can display the rest and ensure that we didn't miss anything
  delete data.anonymous.anonymousOptions
  delete data.reportId
  delete data.submissionTime
  delete data.language
  delete data.appVersion // git hash not used in report
  delete data.prodVersion
  delete data.selfHarmWords
  delete data.submissionDate
  delete data.prodVersion
  return returnString
}

const formatVictimDetails = (data) => {
  const origConsentString = data.consent.consentOptions
    .map((option) => option.replace('privacyConsentInfoForm.', ''))
    .join(', ')

  let consentString =
    origConsentString === 'yes'
      ? lang['analystReport.consent.yes']
      : lang['analystReport.consent.no']

  let postalCity = ''
  let postalProv = ''
  try {
    let location = zipcodes.lookup(data.location.postalCode)
    if (data.location.postalCode) {
      if (location === undefined) {
        postalCity = lang['locationinfoPage.postalCity.notFoundWarning'] //'Location lookup is not found'
        postalProv = lang['locationinfoPage.postalProv.notFoundWarning'] //ocation lookup is not found'
      } else {
        postalCity = location.city
        postalProv = location.state
      }
    }
  } catch (error) {
    //logging
    console.error(error)
  }

  const rows =
    formatLineHtml(
      lang['contactinfoPage.fullName'],
      data.contactInfo.fullName,
    ) +
    formatLineHtml(
      lang['contactinfoPage.emailAddress'],
      data.contactInfo.email,
    ) +
    formatLineHtml(
      lang['contactinfoPage.phoneNumber'],
      data.contactInfo.phone,
    ) +
    formatLineHtml(lang['LocationAnonymousInfoForm.city'], data.location.city) +
    formatLineHtml(
      lang['LocationAnonymousInfoForm.province'],
      data.location.province,
    ) +
    formatLineHtml(
      lang['locationinfoPage.postalCode'],
      data.location.postalCode,
    ) +
    formatLineHtml(lang['locationinfoPage.postalCity'], postalCity) +
    formatLineHtml(lang['locationinfoPage.postalProv'], postalProv) +
    formatLineHtml(lang['privacyConsentInfoForm.consent'], consentString) +
    formatLineHtml(
      lang['whoAreYouReportForPage.title'],
      lang[data.whoAreYouReportFor.whoYouReportFor],
    ) +
    formatLineHtml(
      lang['whoAreYouReportForPage.details'],
      data.whoAreYouReportFor.someoneDescription,
    ) +
    formatLineHtml(
      lang['whoAreYouReportForPage.details'],
      data.whoAreYouReportFor.businessDescription,
    )

  delete data.contactInfo.fullName
  delete data.contactInfo.email
  delete data.contactInfo.phone
  delete data.location.city
  delete data.location.province
  delete data.location.postalCode
  delete data.consent.consentOptions
  delete data.whoAreYouReportFor.whoYouReportFor
  delete data.whoAreYouReportFor.someoneDescription
  delete data.whoAreYouReportFor.businessDescription
  return formatSection(lang['contactInfoPage.victimDetail'], rows)
}

const formatIncidentInformation = (data) => {
  const freq = data.whenDidItHappen.incidentFrequency
  let occurenceLine = ''

  if (freq === 'once') {
    const occurenceString = formatDate(
      data.whenDidItHappen.happenedOnceDay,
      data.whenDidItHappen.happenedOnceMonth,
      data.whenDidItHappen.happenedOnceYear,
    )
    occurenceLine =
      formatLineHtml(
        lang['confirmationPage.howManyTimes'],
        lang['whenDidItHappenPage.options.once'],
      ) +
      formatLineHtml(
        lang['whenDidItHappenPage.singleDate.label'],
        occurenceString,
      )
  } else if (freq === 'moreThanOnce') {
    const startDateString = formatDate(
      data.whenDidItHappen.startDay,
      data.whenDidItHappen.startMonth,
      data.whenDidItHappen.startYear,
    )

    const endtDateString = formatDate(
      data.whenDidItHappen.endDay,
      data.whenDidItHappen.endMonth,
      data.whenDidItHappen.endYear,
    )

    occurenceLine =
      formatLineHtml(
        lang['confirmationPage.howManyTimes'],
        lang['whenDidItHappenPage.options.moreThanOnce'],
      ) +
      formatLineHtml(
        lang['whenDidItHappenPage.dateRange.start.label'],
        startDateString,
      ) +
      formatLineHtml(
        lang['whenDidItHappenPage.dateRange.end.label'],
        endtDateString,
      )
  } else if (freq === 'notSure') {
    const textAreaString = data.whenDidItHappen.description
    occurenceLine =
      formatLineHtml(
        lang['confirmationPage.howManyTimes'],
        lang['whenDidItHappenPage.options.notSure'],
      ) +
      formatLineHtml(
        lang['whenDidItHappenPage.options.notSure.details'],
        textAreaString,
      )
  }

  const OrigMethodOfCommsString = data.howdiditstart.howDidTheyReachYou
    .map((how) => unCamel(how.replace('howDidTheyReachYou.', '')))
    .join(', ')

  let methodOfCommsString = OrigMethodOfCommsString
  let languageAdjustedAvailableMethodOfComms = {
    email: lang['analystReport.methodOfComms.email'],
    phone: lang['analystReport.methodOfComms.phone'],
    online: lang['analystReport.methodOfComms.online'],
    app: lang['analystReport.methodOfComms.app'],
    others: lang['analystReport.methodOfComms.others'],
  }

  for (var key_mc in languageAdjustedAvailableMethodOfComms) {
    if (methodOfCommsString.includes(key_mc)) {
      methodOfCommsString = methodOfCommsString.replace(
        key_mc,
        languageAdjustedAvailableMethodOfComms[key_mc],
      )
    }
  }

  const OrigAffectedString = data.whatWasAffected.affectedOptions
    .map((option) => unCamel(option.replace('whatWasAffectedForm.', '')))
    .filter((option) => option !== 'other')
    .join(', ')

  let affectedString = OrigAffectedString
  let languageAdjustedAffectedString = {
    financial: lang['analystReport.affected.financial'],
    'personal information': lang['analystReport.affected.personalinformation'],
    business_assets: lang['analystReport.affected.business_assets'],
    devices: lang['analystReport.affected.devices'],
    other: lang['analystReport.affected.other'],
  }

  for (var key_as in languageAdjustedAffectedString) {
    if (affectedString.includes(key_as)) {
      affectedString = affectedString.replace(
        key_as,
        languageAdjustedAffectedString[key_as],
      )
    }
  }

  const rows =
    formatLineHtml(lang['howDidTheyReachYou.question'], methodOfCommsString) +
    occurenceLine +
    formatLineHtml(lang['confirmationPage.ImpactTitle'], affectedString)
  delete data.howdiditstart.startDay
  delete data.howdiditstart.startMonth
  delete data.howdiditstart.startYear
  delete data.howdiditstart.howManyTimes
  delete data.whenDidItHappen.happenedOnceDay
  delete data.whenDidItHappen.happenedOnceMonth
  delete data.whenDidItHappen.happenedOnceYear
  delete data.whenDidItHappen.startDay
  delete data.whenDidItHappen.startMonth
  delete data.whenDidItHappen.startYear
  delete data.whenDidItHappen.endDay
  delete data.whenDidItHappen.endMonth
  delete data.whenDidItHappen.endYear
  delete data.whenDidItHappen.incidentFrequency
  delete data.whenDidItHappen.description
  delete data.howdiditstart.howDidTheyReachYou
  delete data.whatWasAffected.affectedOptions
  delete data.fyiForm
  return formatSection(lang['analystReport.incidentInformation'], rows)
}

const formatNarrative = (data) => {
  const origInfoReqString = data.personalInformation.typeOfInfoReq
    .map((info) => unCamel(info.replace('typeOfInfoReq.', '')))
    .map((info) =>
      info === 'other' &&
      data.personalInformation.infoReqOther &&
      data.personalInformation.infoReqOther !== ''
        ? data.personalInformation.infoReqOther
        : info,
    )
    .join(', ')

  let infoReqString = origInfoReqString
  let languageAdjustedAvailableInfoReqString = {
    'credit card': lang['typeOfInfoReq.creditCard'],
    dob: lang['typeOfInfoReq.dob'],
    'home address': lang['typeOfInfoReq.homeAddress'],
    sin: lang['typeOfInfoReq.sin'],
    other: lang['typeOfInfoReq.other'],
  }

  for (var key_ir in languageAdjustedAvailableInfoReqString) {
    if (infoReqString.includes(key_ir)) {
      infoReqString = infoReqString.replace(
        key_ir,
        languageAdjustedAvailableInfoReqString[key_ir],
      )
    }
  }

  const origInfoObtainedString = data.personalInformation.typeOfInfoObtained
    .map((info) => unCamel(info.replace('typeOfInfoObtained.', '')))
    .map((info) =>
      info === 'other' &&
      data.personalInformation.infoObtainedOther &&
      data.personalInformation.infoObtainedOther !== ''
        ? data.personalInformation.infoObtainedOther
        : info,
    )
    .join(', ')

  let infoObtainedString = origInfoObtainedString
  let languageAdjustedInfoObtainedString = {
    'credit card': lang['typeOfInfoObtained.creditCard'],
    dob: lang['typeOfInfoObtained.dob'],
    'home address': lang['typeOfInfoObtained.homeAddress'],
    sin: lang['typeOfInfoObtained.sin'],
    other: lang['typeOfInfoObtained.other'],
  }

  for (var key_io in languageAdjustedInfoObtainedString) {
    if (infoObtainedString.includes(key_io)) {
      infoObtainedString = infoObtainedString.replace(
        key_io,
        languageAdjustedInfoObtainedString[key_io],
      )
    }
  }

  const origNumberofEmployeeString = data.businessInfo.numberOfEmployee.replace(
    'numberOfEmployee.',
    '',
  )

  let numberofEmployeeString = origNumberofEmployeeString
  let languageAdjustedNumberofEmployeeString = {
    '1To99': lang['analystReport.numberOfEmployee.1To99'],
    '100To499': lang['analystReport.numberOfEmployee.100To499'],
    '500More': lang['analystReport.numberOfEmployee.500More'],
  }

  for (var key_ne in languageAdjustedNumberofEmployeeString) {
    if (numberofEmployeeString.includes(key_ne)) {
      numberofEmployeeString = numberofEmployeeString.replace(
        key_ne,
        languageAdjustedNumberofEmployeeString[key_ne],
      )
    }
  }

  const rows =
    formatLineHtml(
      lang['whatHappenedPage.title'],
      data.whatHappened.whatHappened,
    ) +
    formatLineHtml(
      lang['confirmationPage.moneyLost.demandedMoney'],
      data.moneyLost.demandedMoney,
    ) +
    formatLineHtml(
      lang['confirmationPage.personalInformation.typeOfInfoReq'],
      infoReqString,
    ) +
    formatLineHtml(
      lang['confirmationPage.moneyLost.moneyTaken'],
      data.moneyLost.moneyTaken,
    ) +
    formatLineHtml(
      lang['confirmationPage.personalInformation.typeOfInfoObtained'],
      infoObtainedString,
    ) +
    formatLineHtml(
      lang['confirmationPage.devices.device'],
      data.devicesInfo.device,
    ) +
    formatLineHtml(
      lang['confirmationPage.devices.account'],
      data.devicesInfo.account,
    ) +
    formatLineHtml(
      lang['businessPage.nameOfBusiness'],
      data.businessInfo.nameOfBusiness,
    ) +
    formatLineHtml(
      lang['confirmationPage.businessInfo.industry'],
      data.businessInfo.industry,
    ) +
    formatLineHtml(
      lang['confirmationPage.businessInfo.role'],
      data.businessInfo.role,
    ) +
    formatLineHtml(
      lang['confirmationPage.businessInfo.numberOfEmployee'],
      numberofEmployeeString,
    ) +
    formatLineHtml(
      lang['confirmationPage.suspectClues.suspectClues3'],
      data.suspectClues.suspectClues3,
    )

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
  return formatSection(lang['analystReport.narrative'], rows)
}

const formatSuspectDetails = (data) => {
  const rows =
    formatLineHtml(
      lang['confirmationPage.suspectClues.suspectClues1'],
      data.suspectClues.suspectClues1,
    ) +
    formatLineHtml(
      lang['confirmationPage.howDidItStart.email'],
      data.howdiditstart.email,
    ) +
    formatLineHtml(
      lang['confirmationPage.howDidItStart.phone'],
      data.howdiditstart.phone,
    ) +
    formatLineHtml(
      lang['confirmationPage.howDidItStart.online'],
      data.howdiditstart.online,
    ) +
    formatLineHtml(
      lang['confirmationPage.howDidItStart.application'],
      data.howdiditstart.application,
    ) +
    formatLineHtml(
      lang['confirmationPage.suspectClues.suspectClues2'],
      data.suspectClues.suspectClues2,
    ) +
    formatLineHtml(
      lang['confirmationPage.howDidItStart.others'],
      data.howdiditstart.others,
    )

  delete data.suspectClues.suspectClues1
  delete data.howdiditstart.email
  delete data.howdiditstart.phone
  delete data.howdiditstart.online
  delete data.howdiditstart.application
  delete data.suspectClues.suspectClues2
  delete data.howdiditstart.others
  return formatSection(lang['suspectClues.suspectDetails'], rows)
}

const formatFinancialTransactions = (data) => {
  const methods = data.moneyLost.methodPayment

  const origPaymentString = methods
    .filter((method) => method !== 'methodPayment.other')
    .map((method) => unCamel(method.replace('methodPayment.', '')))
    .join(', ')

  let paymentString =
    data.moneyLost.methodOther && data.moneyLost.methodOther.length > 0
      ? String(origPaymentString) + ', ' + [data.moneyLost.methodOther]
      : String(origPaymentString)

  let languageAdjustedPaymentString = {
    'e transfer': lang['methodPayment.eTransfer'],
    eTransfer: lang['methodPayment.eTransfer'],
    'credit card': lang['methodPayment.creditCard'],
    creditCard: lang['methodPayment.creditCard'],
    'gift card': lang['methodPayment.giftCard'],
    giftCard: lang['methodPayment.giftCard'],
    cryptocurrency: lang['methodPayment.cryptocurrency'],
    other: lang['methodPayment.other'],
  }

  for (var key_ps in languageAdjustedPaymentString) {
    if (paymentString.includes(key_ps)) {
      paymentString = paymentString.replace(
        key_ps,
        languageAdjustedPaymentString[key_ps],
      )
    }
  }

  const transactionDate = formatDate(
    data.moneyLost.transactionDay,
    data.moneyLost.transactionMonth,
    data.moneyLost.transactionYear,
  )
  const rows =
    formatLineHtml(
      lang['confirmationPage.moneyLost.demandedMoney'],
      data.moneyLost.demandedMoney,
    ) +
    formatLineHtml(
      lang['confirmationPage.moneyLost.moneyTaken'],
      data.moneyLost.moneyTaken,
    ) +
    formatLineHtml(
      lang['confirmationPage.moneyLost.methodPayment'],
      paymentString, //data.moneyLost.paymentString,  // methodOther,
    ) +
    formatLineHtml(
      lang['confirmationPage.moneyLost.transactionDate'],
      transactionDate,
    )

  delete data.moneyLost.methodOther
  delete data.moneyLost.methodPayment
  delete data.moneyLost.demandedMoney
  delete data.moneyLost.moneyTaken
  delete data.moneyLost.transactionDay
  delete data.moneyLost.transactionMonth
  delete data.moneyLost.transactionYear
  return formatSection(lang['moneyLostPage.financialTransactions'], rows)
}

const formatFileAttachments = (data) => {
  const returnString = data.evidence.files
    .map((file) => {
      // Don't include png in the e-mail. They are converted to JPG and those will be included
      let fileExtension = getFileExtension(file.name)
      if (fileExtension.endsWith('png')) {
        return ''
      }

      const offensive =
        file.isImageAdultClassified || file.isImageRacyClassified

      const moderatorString =
        file.adultClassificationScore === 'Could not scan'
          ? formatLineHtml(
              lang['fileUpload.classification.title'],
              lang['fileUpload.classification.cannotscan'],
            )
          : formatLineHtml(
              lang['fileUpload.isAdult'],
              file.isImageAdultClassified,
            ) +
            formatLineHtml(
              lang['fileUpload.adultScore'],
              file.adultClassificationScore,
            ) +
            formatLineHtml(
              lang['fileUpload.isRacy'],
              file.isImageRacyClassified
                ? lang['fileUpload.isRacy.true']
                : lang['fileUpload.isRacy.false'],
            ) +
            formatLineHtml(
              lang['fileUpload.racyScore'],
              file.racyClassificationScore,
            )

      const downloadLink = file.malwareIsClean
        ? formatDownloadLink(file.name, file.sasUrl)
        : ''
      let offensiveWarningBlockedString =
        '<b>' +
        lang['fileUpload.fileAttachment.offensivewarning.block'] +
        '</b>'
      let offensiveWarningMessageString =
        '<b>' + lang['fileUpload.fileAttachment.offensivewarning'] + '</b>'

      return (
        formatLineHtml(
          offensiveWarningBlockedString,
          offensive ? offensiveWarningMessageString : '',
        ) +
        formatLineHtml(lang['fileUpload.fileName'], file.name) +
        formatLineHtml(
          lang['fileUpload.fileDescription'],
          file.fileDescription,
        ) +
        formatLineHtml(lang['fileUpload.fileSize'], file.size + ' bytes') +
        formatLineHtml(lang['fileUpload.CosmosDBFile'], file.sha1) +
        formatLineHtml(
          lang['fileUpload.malwareScan'],
          file.malwareIsClean
            ? lang['fileUpload.malwareScan.clean']
            : file.malwareScanDetail,
        ) +
        moderatorString +
        downloadLink
      )
    })
    .join('<tr><td>&nbsp;</td></tr>')

  delete data.evidence.files
  delete data.evidence.fileDescriptions
  return (
    '<h2>' +
    lang['fileUpload.fileAttachment'] +
    '</h2>\n' +
    (returnString !== ''
      ? formatTable(returnString)
      : lang['fileUpload.noFiles'])
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

    let fieldsMissingWarningString =
      '\n<h2>' + lang['analystReport.fieldsMissing.warning'] + '</h2>\n'
    missingFields = Object.keys(data).length
      ? fieldsMissingWarningString +
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
