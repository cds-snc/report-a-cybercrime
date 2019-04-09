import gql from 'graphql-tag'

export const GET_LANGUAGE_QUERY = gql`
  query GetLanguage {
    language @client
  }
`

export const IDENTIFIER_FLAGGINGS_WITHIN = gql`
  query($identifier: String!) {
    stats {
      identifierFlaggingsWithin(identifier: $identifier) {
        identifier
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

export const SAVE_REPORT_MUTATION = gql`
  mutation saveReport(
    $whatHappened: String
    $whatWasInvolved: String
    $whatWasInvolvedOther: String
    $howWereYouAffected: String
  ) {
    saveReport(
      whatHappened: $whatHappened
      whatWasInvolved: $whatWasInvolved
      whatWasInvolvedOther: $whatWasInvolvedOther
      howWereYouAffected: $howWereYouAffected
    ) {
      whatHappened
      whatWasInvolved
      whatWasInvolvedOther
      howWereYouAffected
    }
  }
`
