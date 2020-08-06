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

  let selfHarmString = 'none'
  let returnString = ''

  if (data.selfHarmWords.length) {
    selfHarmString = lang['analystReport.selfHarmString']
    returnString =
      `\n\n<h1 style="background-color:yellow;">` +
      lang['analystReport.selfHarmWord'] +
      `${data.selfHarmWords}</h1>`
  }

  let isAnonymous =
    data.anonymous.anonymousOptions.length > 0
      ? data.anonymous.anonymousOptions[0].replace('anonymousPage.', '')
      : 'no'
  let reportLanguage = data.language === 'en' ? 'English' : 'French'

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
  const consentString = data.consent.consentOptions
    .map((option) => option.replace('privacyConsentInfoForm.', ''))
    .join(', ')

  let postalCity = ''
  let postalProv = ''
  try {
    let location = zipcodes.lookup(data.location.postalCode)
    if (data.location.postalCode) {
      if (location === undefined) {
        postalCity = 'Location lookup is not found'
        postalProv = 'Location lookup is not found'
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
  let occurenceLine

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
  } else {
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

  const methodOfCommsString = data.howdiditstart.howDidTheyReachYou
    .map((how) => unCamel(how.replace('howDidTheyReachYou.', '')))
    .join(', ')
  const affectedString = data.whatWasAffected.affectedOptions
    .map((option) => unCamel(option.replace('whatWasAffectedForm.', '')))
    .filter((option) => option !== 'other')
    .join(', ')

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
  return formatSection(lang['howDidItStartPage.incidentInformation'], rows)
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
      unCamel(
        data.businessInfo.numberOfEmployee.replace('numberOfEmployee.', ''),
      ),
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

  const paymentStringOrig = methods
    .filter((method) => method !== 'methodPayment.other')
    .map((method) => unCamel(method.replace('methodPayment.', '')))
    .join(', ')

  let paymentString =
    data.moneyLost.methodOther && data.moneyLost.methodOther.length > 0
      ? String(paymentStringOrig) + ', ' + [data.moneyLost.methodOther]
      : String(paymentStringOrig)

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
      paymentString,
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
          ? formatLineHtml('Image classification:', 'Could not scan content')
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
              file.isImageRacyClassified,
            ) +
            formatLineHtml(
              lang['fileUpload.racyScore'],
              file.racyClassificationScore,
            )

      const downloadLink = file.malwareIsClean
        ? formatDownloadLink(file.name, file.sasUrl)
        : ''

      return (
        formatLineHtml(
          '<b>WARNING:</b>',
          offensive ? '<b>Image may be offensive</b>' : '',
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
          file.malwareIsClean ? 'Clean' : file.malwareScanDetail,
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
