import gql from 'graphql-tag'

export const GET_LANGUAGE_QUERY = gql`
  query GetLanguage {
    language @client
  }
`

export const GET_STATS_QUERY = gql`
  query GetStats {
    stats {
      reportCount
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
