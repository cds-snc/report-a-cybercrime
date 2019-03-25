/** @jsx jsx */
import { Query } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Stats } from './Stats'
import { GET_LANGUAGE_QUERY } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'
import { jsx } from '@emotion/core'
import { Container } from './components/container'
import { Paragraph } from './components/paragraph'

const getCyberSafeLink = lang => {
  return lang === 'en'
    ? 'https://www.getcybersafe.gc.ca/index-en.aspx'
    : 'https://www.pensezcybersecurite.gc.ca/index-fr.aspx'
}

const getCyberTipsLink = lang => {
  return lang === 'en'
    ? 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm'
    : 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-fra.htm'
}

export const Thanks = () => (
  <Query query={GET_LANGUAGE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      let { language } = data
      return (
        <Container m="auto" width={[1, 1 / 2, 1 / 4]}>
          <H1>
            <Trans>Thank you for sharing your story.</Trans>
          </H1>

          <Stats />

          <TrackPageViews />
          <Paragraph>
            <Trans>
              For more information on how to stay safe online, you can visit{' '}
              <a href={getCyberSafeLink(language)}>GetCyberSafe</a> and the{' '}
              <a href={getCyberTipsLink(language)}>
                Top 10 Cyber Crime Prevention Tips.
              </a>
            </Trans>
          </Paragraph>
        </Container>
      )
    }}
  </Query>
)
