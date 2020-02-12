// 'use strict'

const formatReportInfo = data => {
  const selfHarmString = data.selfHarmWords.length
    ? data.selfHarmWords
    : 'no self harm words'
  return `
Report information    
  
Report number          ${data.reportId}
Date received          ${data.submissionTime}
Report language        ${data.language}
Flagged                ${selfHarmString}

              [    file upload failed due to content moderation?     ]
  `
}

const formatVictimDetails = data => {
  const consentString = data.consent.consentOptions
    .map(option => option.replace('privacyConsentInfoForm.', ''))
    .join(', ')

  return `
Victim details

Anonymous              [    anonymous yes/no     ]
Name                   [    full name     ]
Email                  ${data.contactInfo.email}
Phone number           [    phone number  }
Postal code            ${data.location.postalCode}
City                   ${data.location.cityTown} [  province     ]
Consent                ${consentString}

  `
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

  return `
Incident information

Occurrence date            ${occurenceString}
Frequency of occurrence    ${freqString}
Method of communication    ${methodOfCommsString}
What could be affected     ${affectedString}
                           ${data.whatWasAffected.affectedOptions.optionOther}
`
}

const formatNarrative = data => {
  const infoReqString = data.personalInformation.typeOfInfoReq
    .map(info => info.replace('typeOfInfoReq.', ''))
    .join(', ')

  const infoObtainedString = data.personalInformation.typeOfInfoObtained
    .map(info => info.replace('typeOfInfoObtained.', ''))
    .join(', ')

  return `
Narrative

${data.whatHappened.whatHappened}

They asked for ${data.moneyLost.demandedMoney}
They asked for ${infoReqString} ${data.personalInformation.infoReqOther}

I lost ${data.moneyLost.moneyTaken}
I lost ${infoObtainedString} ${data.personalInformation.infoObtainedOther}

This affected ${data.devicesInfo.deviceOrAccount}

${data.moneyLost.tellUsMore}

${data.personalInformation.tellUsMore}

${data.devicesInfo.devicesTellUsMore}

${data.businessInfo.business}

${data.suspectClues.suspectClues3}
`
}

const formatSuspectDetails = data => {
  return `
Suspect details

Name                   ${data.suspectClues.suspectClues}
Email                  ${data.howdiditstart.email}
Phone number           ${data.howdiditstart.phone}
Website                ${data.howdiditstart.online}
Application            ${data.howdiditstart.application}
Address                ${data.suspectClues.suspectClues2}
Other                  ${data.howdiditstart.other}
  `
}

const formatFinancialTransactions = data => {
  const paymentString = data.moneyLost.methodPayment
    .map(method => method.replace(/methodPayment\./g, ''))
    .join(', ')

  return `
Financial transactions

Money requested        ${data.moneyLost.demandedMoney}
Money lost             ${data.moneyLost.moneyTaken}
Method of payment      ${paymentString}
Transaction date       ${data.moneyLost.transactionDate}  
`
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
  return `
File attachments
${fileStringList}
`
}

const formatAnalystEmail = (data, files) => {
  return `
  ${formatReportInfo(data)}
  ${formatVictimDetails(data)}
  ${formatIncidentInformation(data)}
  ${formatNarrative(data)}
  ${formatSuspectDetails(data)}
  ${formatFinancialTransactions(data)}
  ${formatFileAttachments(data, files)}
  `
}

module.exports = { formatAnalystEmail }
