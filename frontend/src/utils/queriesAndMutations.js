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
    $scamInfo: scamInfoInput!
    $lostMoney: lostMoneyInput!
    $suspectInfo: suspectInfoInput!
    $files: [String]!
    $contactInfo: contactInfoInput!
  ) {
    submitReport(
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
