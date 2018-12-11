import React from 'react'
import { css } from 'react-emotion'
import { Query } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { H1, H3 } from './utils/headers'
import {
  GET_LANGUAGE_QUERY,
  GET_STATS_QUERY,
} from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'

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
  <Query query={GET_LANGUAGE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      let { language } = data
      return (
        <div className={centercontent}>
          <H1>
            <Trans>Thank you for sharing your story.</Trans>
          </H1>

          <Query query={GET_STATS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`

              let { stats } = data
              return (
                <H3>
                  <Trans>
                    You are the {stats ? stats.reportCount : ''}th person to use
                    this tool to share a cybercrime story.
                  </Trans>
                </H3>
              )
            }}
          </Query>

          <TrackPageViews />
          <div className={paragraph}>
            <Trans>
              For more information on how to stay safe online, you can visit{' '}
              <a
                href={
                  language === 'en'
                    ? 'https://www.getcybersafe.gc.ca/index-en.aspx'
                    : 'https://www.pensezcybersecurite.gc.ca/index-fr.aspx'
                }
              >
                GetCyberSafe
              </a>{' '}
              and the{' '}
              <a
                href={
                  language === 'en'
                    ? 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm'
                    : 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-fra.htm'
                }
              >
                Top 10 Cyber Crime Prevention Tips.
              </a>
            </Trans>
          </div>
        </div>
      )
    }}
  </Query>
)
