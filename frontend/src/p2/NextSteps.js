/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { A } from '../components/link'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { InfoCard } from '../components/container'
import { TrackPageViews } from '../TrackPageViews'
import { Layout } from '../components/layout'
import { ButtonsContainer } from '../components/buttons-container'
import { ApolloConsumer } from 'react-apollo'
import { BackButton } from '../components/backbutton'
import { Query } from 'react-apollo'
import { GET_LANGUAGE_QUERY } from '../utils/queriesAndMutations'

export const NextSteps = () => (
  <I18n>
    {({ i18n }) => {
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
                      timeFrame: JSON.stringify({}),
                      whatHappened: JSON.stringify({}),
                      scammerDetails: JSON.stringify({}),
                      impact: JSON.stringify({}),
                      tellUsMore: JSON.stringify({}),
                    },
                  })
                }
              </ApolloConsumer>
              <BackButton route="/p2/contactinfo">
                <Trans>the confirmation</Trans>
              </BackButton>
              <H1>
                <Trans>Thank you for reporting</Trans>
              </H1>
              <P>
                <Trans>
                  We've sent you an email with a summary of your report. Your
                  reference number is <strong>#NC300234234</strong>.
                </Trans>
              </P>
              <InfoCard>
                <P>
                  <Trans>
                    <strong>Where you can get help</strong>
                  </Trans>
                </P>
                <Ul>
                  <Li>
                    <A
                      href={
                        language === 'en'
                          ? 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm'
                          : 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-fra.htm'
                      }
                    >
                      <Trans>Talk to someone and get support</Trans>
                    </A>
                  </Li>
                  <Li>
                    <A
                      href={
                        language === 'en'
                          ? 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm'
                          : 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-fra.htm'
                      }
                    >
                      <Trans>Find tips to protect yourself in the future</Trans>
                    </A>
                  </Li>
                  <Li>
                    <A
                      href={
                        language === 'en'
                          ? 'http://www.antifraudcentre.ca/index-eng.htm'
                          : 'http://www.antifraudcentre.ca/index-fra.htm'
                      }
                    >
                      <Trans>Follow what scams are trending</Trans>
                    </A>
                  </Li>
                </Ul>
                <P>
                  <Trans>
                    <strong>What happens next</strong>
                  </Trans>
                </P>
                <P>
                  <Trans></Trans>
                </P>
                <P>
                  <Trans>
                    The RCMP will analyze your report and combine it with others
                    that are similar to help police across Canada track down
                    cybercriminals.
                  </Trans>
                </P>
              </InfoCard>
              <br></br>
              <P>
                <Trans>
                  <strong>You have other reporting options</strong>
                </Trans>
              </P>
              <Ul>
                <Li>
                  <Trans>
                    Report directly to the place where the scam happened.
                  </Trans>
                </Li>
                <Li>
                  <Trans>
                    Report to your financial institution, if you lost money.
                  </Trans>
                </Li>
                <Li>
                  <Trans>
                    Report to the credit bureaus,{' '}
                    <A href="https://www.consumer.equifax.ca/personal/">
                      Equifax
                    </A>{' '}
                    and <A href="https://www.transunion.ca/">TransUnion</A>, if
                    your identity was stolen.
                  </Trans>
                </Li>
              </Ul>
              <TrackPageViews />
              <ButtonsContainer
                buttonLink={true}
                cancel={false}
                route="/p2/timeframe"
              />
            </Layout>
          )}
        </Query>
      )
    }}
  </I18n>
)
