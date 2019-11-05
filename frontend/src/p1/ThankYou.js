/**@jsx jsx */
import { jsx } from '@emotion/core'
import { I18n } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { A } from '../components/link'
import { ApolloConsumer, Query } from 'react-apollo'
import { TrackPageViews } from '../TrackPageViews'
import { Layout } from '../components/layout'
import { GET_LANGUAGE_QUERY } from '../utils/queriesAndMutations'

export const ThankYou = () => (
  <I18n>
    {() => {
      return (
        <Query query={GET_LANGUAGE_QUERY}>
          {({ data: { language } }) => (
            <Layout>
              <ApolloConsumer>
                {client =>
                  client.writeData({
                    data: {
                      doneForms: false,
                      scamInfo: JSON.stringify({}),
                      lostMoney: JSON.stringify({}),
                      suspectInfo: JSON.stringify({}),
                      files: [],
                      contactInfo: JSON.stringify({}),
                    },
                  })
                }
              </ApolloConsumer>
              <TrackPageViews />

              <H1>
                <Trans>Thank you for reporting</Trans>
              </H1>
              <P>
                <Trans>
                  The{' '}
                  <A
                    href={
                      language === 'en'
                        ? 'http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3'
                        : 'http://www.rcmp-grc.gc.ca/fr/groupe-national-coordination-cybercriminalite-gncc'
                    }
                  >
                    RCMP&apos;s National Cybercrime Coordination Unit
                  </A>{' '}
                  will assess the information and combine it with other reports
                  to help police catch scammers.
                </Trans>
              </P>
              <P>
                <Trans>
                  Your reference number is <strong>#NC300234234</strong>. Keep
                  this number for your records or to add more information later.
                </Trans>
              </P>
            </Layout>
          )}
        </Query>
      )
    }}
  </I18n>
)