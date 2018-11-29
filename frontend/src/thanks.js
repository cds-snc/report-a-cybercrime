import React from 'react'
import { css } from 'react-emotion'
import { Query } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { H1, H3 } from './utils/headers'
import gql from 'graphql-tag'

export const GET_STATS_QUERY = gql`
  query GetStats {
    stats {
      reportCount
    }
  }
`

const centercontent = css`
  max-width: 750px;
  margin: auto;
`

const paragraph = css`
  padding-top: 20pt;
  padding-bottom: 20pt;
  font-size: 20pt;
`

export const Thanks = () => (
  <div className={centercontent}>
    <H1>
      <Trans>Thank you for sharing your story.</Trans>
    </H1>

    <Query query={GET_STATS_QUERY}>
      {({ data: { stats } }) => (
        <H3>
          <Trans>
            You are the {stats ? stats.reportCount : ''}th person to use this
            tool to share a cybercrime story.
          </Trans>
        </H3>
      )}
    </Query>

    <div className={paragraph}>
      <Trans>
        For more information on how to stay safe online, you can visit{' '}
        <a href="https://www.getcybersafe.gc.ca/index-en.aspx">GetCyberSafe</a>{' '}
        and the{' '}
        <a href="http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm">
          Top 10 Cyber Crime Prevention Tips.
        </a>
      </Trans>
    </div>
  </div>
)
