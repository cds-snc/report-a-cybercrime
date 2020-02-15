// 'use strict'

const formatReportInfo = data => {
  const selfHarmString = data.selfHarmWords.length
    ? data.selfHarmWords
    : 'no self harm words'
  const returnString = `Report information    
  
Report number          ${data.reportId}
Date received          ${data.submissionTime}
Report language        ${data.language}
Flagged                ${selfHarmString}
`
  delete data.reportId
  delete data.submissionTime
  delete data.language
  delete data.selfHarmWords
  return returnString
}

const formatVictimDetails = data => {
  const consentString = data.consent.consentOptions
    .map(option => option.replace('privacyConsentInfoForm.', ''))
    .join(', ')

  const returnString = `
Victim details

Email                  ${data.contactInfo.email}
Phone number           ${data.contactInfo.phone}
Postal code            ${data.location.postalCode}
City                   ${data.location.cityTown}
Consent                ${consentString}
`
  delete data.contactInfo.email
  delete data.contactInfo.phone
  delete data.location.postalCode
  delete data.location.cityTown
  delete data.consent.consentOptions
  return returnString
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
    .join(', ')

  const returnString = `
Incident information

Occurrence date            ${occurenceString}
Frequency of occurrence    ${freqString}
Method of communication    ${methodOfCommsString}
What could be affected     ${affectedString}
   (other)                 ${data.whatWasAffected.optionOther}
`
  delete data.howdiditstart.whenDidItStart
  delete data.howdiditstart.howManyTimes
  delete data.howdiditstart.howDidTheyReachYou
  delete data.whatWasAffected.affectedOptions
  delete data.whatWasAffected.optionOther
  return returnString
}

const formatNarrative = data => {
  const infoReqString = data.personalInformation.typeOfInfoReq
    .map(info => info.replace('typeOfInfoReq.', ''))
    .join(', ')

  const infoObtainedString = data.personalInformation.typeOfInfoObtained
    .map(info => info.replace('typeOfInfoObtained.', ''))
    .join(', ')

  let affectedString = `${data.devicesInfo.deviceOrAccount}
1${data.moneyLost.tellUsMore}
2${data.personalInformation.tellUsMore}
3${data.devicesInfo.devicesTellUsMore}
4${data.businessInfo.business}
5${data.suspectClues.suspectClues3}
`
  affectedString.replace(/\n\s*\n/g, '\n')
  const returnString = `
Narrative

${data.whatHappened.whatHappened}

They asked for ${data.moneyLost.demandedMoney}
They asked for ${infoReqString} ${data.personalInformation.infoReqOther}

I lost ${data.moneyLost.moneyTaken}
I lost ${infoObtainedString} ${data.personalInformation.infoObtainedOther}
${affectedString != '\n' ? '\nThis affected:\n' + affectedString : ''}
`
  delete data.personalInformation.typeOfInfoReq
  delete data.personalInformation.typeOfInfoObtained
  delete data.whatHappened.whatHappened
  delete data.moneyLost.demandedMoney
  delete data.personalInformation.infoReqOther
  delete data.moneyLost.moneyTaken
  delete data.personalInformation.infoObtainedOther
  delete data.devicesInfo.deviceOrAccount
  delete data.moneyLost.tellUsMore
  delete data.personalInformation.tellUsMore
  delete data.devicesInfo.devicesTellUsMore
  delete data.businessInfo.business
  delete data.suspectClues.suspectClues3
  return returnString
}

const formatSuspectDetails = data => {
  const returnString = `
Suspect details

Name                   ${data.suspectClues.suspectClues1}
Email                  ${data.howdiditstart.email}
Phone number           ${data.howdiditstart.phone}
Website                ${data.howdiditstart.online}
Application            ${data.howdiditstart.application}
Address                ${data.suspectClues.suspectClues2}
Other                  ${data.howdiditstart.other}
`
  delete data.suspectClues.suspectClues1
  delete data.howdiditstart.email
  delete data.howdiditstart.phone
  delete data.howdiditstart.online
  delete data.howdiditstart.application
  delete data.suspectClues.suspectClues2
  delete data.howdiditstart.other
  return returnString
}

const formatFinancialTransactions = data => {
  const paymentString = data.moneyLost.methodPayment
    .map(method => method.replace(/methodPayment\./g, ''))
    .join(', ')

  const returnString = `
Financial transactions

Money requested        ${data.moneyLost.demandedMoney}
Money lost             ${data.moneyLost.moneyTaken}
Method of payment      ${paymentString}
Transaction date       ${data.moneyLost.transactionDate}  
`
  delete data.moneyLost.methodPayment
  delete data.moneyLost.demandedMoney
  delete data.moneyLost.moneyTaken
  delete data.moneyLost.transactionDate
  return returnString
}

const formatFileAttachments = (data, files) => {
  const fileStringList = Object.keys(files)
    .map(
      (file, index) => `
      File name:   ${file}
      Description: ${data.evidence.fileDescriptions[index]}
      `,
    )
    .join('')
  const returnString = `
File attachments
${fileStringList}
`
  delete data.evidence.fileDescriptions
  return returnString
}

const formatAnalystEmail = (data, files) => {
  let returnString = `
  ${formatReportInfo(data)}
  ${formatVictimDetails(data)}
  ${formatIncidentInformation(data)}
  ${formatNarrative(data)}
  ${formatSuspectDetails(data)}
  ${formatFinancialTransactions(data)}
  ${formatFileAttachments(data, files)}
`
  Object.keys(data).forEach(key => {
    if (Object.keys(data[key]).length === 0) delete data[key]
  })
  let missingFields = Object.keys(data).length
    ? 'Extra Fields:\n\n' + JSON.stringify(data, null, '  ')
    : ''
  return returnString + missingFields
}

module.exports = { formatAnalystEmail }
