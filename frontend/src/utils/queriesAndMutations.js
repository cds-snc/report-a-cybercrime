import gql from 'graphql-tag'

export const GET_LANGUAGE_QUERY = gql`
  query GetLanguage {
    language @client
  }
`
export const FLAGGINGS_WITHIN = gql`
  query($identifier: String!, $startDate: DateTime!, $endDate: DateTime!) {
    stats {
      flaggingsWithin(
        identifier: $identifier
        startDate: $startDate
        endDate: $endDate
      ) {
        identifier
        summaryTotal
        summary {
          date
          total
        }
      }
    }
  }
`

export const GET_STATS_QUERY = gql`
  query GetStats {
    stats {
      reportCount
    }
  }
`

export const FLAG_IDENTIFIER_MUTATION = gql`
  mutation flagIdentifier($identifier: String) {
    flagIdentifier(identifier: $identifier) {
      identifier
    }
  }
`

export const SUBMIT_REPORT_MUTATION = gql`
  mutation submitReport(
    $source: String!
    $scamInfo: scamInfoInput!
    $lostMoney: lostMoneyInput!
    $suspectInfo: suspectInfoInput!
    $files: [String]!
    $contactInfo: contactInfoInput!
  ) {
    submitReport(
      source: $source
      scamInfo: $scamInfo
      lostMoney: $lostMoney
      suspectInfo: $suspectInfo
      files: $files
      contactInfo: $contactInfo
    ) {
      reportID
    }
  }
`

export const UPLOAD_FILE_MUTATION = gql`
  mutation uploadFile($file: Upload!, $fileDescription: String!) {
    uploadFile(file: $file, fileDescription: $fileDescription) {
      success
      errorMessage
      md5
    }
  }
`

export const getDoneForms = client => {
  let { doneForms } = client.readQuery({
    query: gql`
      query readCache {
        doneForms
      }
    `,
  })
  return doneForms
}

// P1 cache queries

export const getScamInfo = client => {
  let { scamInfo } = client.readQuery({
    query: gql`
      query readCache {
        scamInfo
      }
    `,
  })
  let {
    howWereYouContacted,
    otherMethodOfContact,
    whenWereYouContacted,
    scamDetails,
  } = JSON.parse(scamInfo)
  return {
    howWereYouContacted: howWereYouContacted ? howWereYouContacted : [],
    otherMethodOfContact: otherMethodOfContact ? otherMethodOfContact : '',
    whenWereYouContacted: whenWereYouContacted ? whenWereYouContacted : '',
    scamDetails: scamDetails ? scamDetails : '',
  }
}

export const getLostMoney = client => {
  let { lostMoney } = client.readQuery({
    query: gql`
      query readCache {
        lostMoney
      }
    `,
  })
  let {
    lostAmount,
    lostCurrency,
    lostOtherCurrency,
    lostMethodsOfPayment,
    lostOtherMethodOfPayment,
  } = JSON.parse(lostMoney)

  return {
    lostAmount: lostAmount ? lostAmount : '',
    lostCurrency: lostCurrency ? lostCurrency : '',
    lostOtherCurrency: lostOtherCurrency ? lostOtherCurrency : '',
    lostMethodsOfPayment: lostMethodsOfPayment ? lostMethodsOfPayment : [],
    lostOtherMethodOfPayment: lostOtherMethodOfPayment
      ? lostOtherMethodOfPayment
      : '',
  }
}

export const getSuspectInfo = client => {
  let { suspectInfo } = client.readQuery({
    query: gql`
      query readCache {
        suspectInfo
      }
    `,
  })
  let {
    suspectName,
    suspectAddress,
    suspectLanguage,
    otherSuspectLanguage,
    suspectPhone,
    suspectEmail,
    suspectWebsite,
    suspectIP,
  } = JSON.parse(suspectInfo)
  return {
    suspectName: suspectName ? suspectName : '',
    suspectAddress: suspectAddress ? suspectAddress : '',
    suspectLanguage: suspectLanguage ? suspectLanguage : [],
    otherSuspectLanguage: otherSuspectLanguage ? otherSuspectLanguage : '',
    suspectPhone: suspectPhone ? suspectPhone : '',
    suspectEmail: suspectEmail ? suspectEmail : '',
    suspectWebsite: suspectWebsite ? suspectWebsite : '',
    suspectIP: suspectIP ? suspectIP : '',
  }
}

export const getFiles = client => {
  const { files } = client.readQuery({
    query: gql`
      query readCache {
        files
      }
    `,
  })
  return files ? files : []
}

export const getContactInfo = client => {
  const { contactInfo } = client.readQuery({
    query: gql`
      query readCache {
        contactInfo
      }
    `,
  })
  let {
    userIsTheVictim,
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = JSON.parse(contactInfo)

  return {
    userIsTheVictim: userIsTheVictim ? userIsTheVictim : '',
    contactInfoName: contactInfoName ? contactInfoName : '',
    contactInfoEmail: contactInfoEmail ? contactInfoEmail : '',
    contactInfoPhone: contactInfoPhone ? contactInfoPhone : '',
  }
}

// P2 cache queries

export const getTimeFrame = client => {
  const queryResult = client.readQuery({
    query: gql`
      query readCache {
        timeFrame
      }
    `,
  })
  const { startDate, endDate } = JSON.parse(queryResult.timeFrame)
  return {
    startDate: startDate ? startDate : new Date().toISOString(),
    endDate: endDate ? endDate : new Date().toISOString(),
  }
}

export const getWhatHappened = client => {
  const queryResult = client.readQuery({
    query: gql`
      query readCache {
        whatHappened
      }
    `,
  })
  let { whatHappened } = JSON.parse(queryResult.whatHappened)

  return {
    whatHappened: whatHappened ? whatHappened : '',
  }
}

export const getScammerDetails = client => {
  const queryResult = client.readQuery({
    query: gql`
      query readCache {
        scammerDetails
      }
    `,
  })
  let { scammerDetails, files, fileDescriptions } = JSON.parse(
    queryResult.scammerDetails,
  )

  return {
    scammerDetails: scammerDetails ? scammerDetails : '',
    files: files ? files : [],
    fileDescriptions: fileDescriptions ? fileDescriptions : [],
  }
}

export const getImpact = client => {
  const queryResult = client.readQuery({
    query: gql`
      query readCache {
        impact
      }
    `,
  })
  let { howWereYouAffected, otherImpact, damage } = JSON.parse(
    queryResult.impact,
  )
  return {
    howWereYouAffected: howWereYouAffected ? howWereYouAffected : [],
    otherImpact: otherImpact ? otherImpact : '',
    damage: damage ? damage : '',
  }
}

export const getP2ContactInfo = client => {
  const queryResult = client.readQuery({
    query: gql`
      query readCache {
        contactInfo
      }
    `,
  })
  let { fullName, email, phone, postalCode } = JSON.parse(
    queryResult.contactInfo,
  )
  return {
    fullName: fullName ? fullName : '',
    email: email ? email : '',
    phone: phone ? phone : '',
    postalCode: postalCode ? postalCode : '',
  }
}

export const getTellUsMore = client => {
  const queryResult = client.readQuery({
    query: gql`
      query readCache {
        tellUsMore
      }
    `,
  })
  let { tellUsMore } = JSON.parse(queryResult.tellUsMore)

  return {
    tellUsMore: tellUsMore ? tellUsMore : '',
  }
}
