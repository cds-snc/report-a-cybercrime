/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { A } from './components/link'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { InfoCard } from './components/container'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { ApolloConsumer } from 'react-apollo'

export const NextSteps = () => {
  const { i18n } = useLingui()
  return (
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
      <H1>
        <Trans id="nextStepsPage.title">Thank you for reporting</Trans>
      </H1>
      <P>
        <Trans id="nextStepsPage.summary">
          We've sent you an email with a summary of your report. Your reference
          number is <strong>#NC300234234</strong>
        </Trans>
      </P>
      <InfoCard>
        <P>
          <strong>
            <Trans id="nextStepsPage.helpResource">
              Where you can get help
            </Trans>
          </strong>
        </P>
        <Ul>
          <Li>
            <A
              href={
                i18n.locale === 'en'
                  ? 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm'
                  : 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-fra.htm'
              }
            >
              <Trans id="nextStepsPage.helpResource1">
                Talk to someone and get support
              </Trans>
            </A>
          </Li>
          <Li>
            <A
              href={
                i18n.locale === 'en'
                  ? 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm'
                  : 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-fra.htm'
              }
            >
              <Trans id="nextStepsPage.helpResource2">
                Find tips to protect yourself in the future
              </Trans>
            </A>
          </Li>
          <Li>
            <A
              href={
                i18n.locale === 'en'
                  ? 'http://www.antifraudcentre.ca/index-eng.htm'
                  : 'http://www.antifraudcentre.ca/index-fra.htm'
              }
            >
              <Trans id="nextStepsPage.helpResource3">
                Follow what scams are trending
              </Trans>
            </A>
          </Li>
        </Ul>
        <P>
          <strong>
            <Trans id="nextStepsPage.nextStepSummary">What happens next</Trans>
          </strong>
        </P>
        <P>
          <Trans id="nextStepsPage.nextStepDetail">
            The RCMP will analyze your report and combine it with others that
            are similar to help police across Canada track down cybercriminals.
          </Trans>
        </P>
      </InfoCard>
      <br></br>
      <P>
        <strong>
          <Trans id="nextStepsPage.otherReportOption">
            You have other reporting options
          </Trans>
        </strong>
      </P>
      <Ul>
        <Li>
          <Trans id="nextStepsPage.otherReportOption1">
            Report directly to the place where the scam happened.
          </Trans>
        </Li>
        <Li>
          <Trans id="nextStepsPage.otherReportOption2">
            Report to your financial institution, if you lost money.
          </Trans>
        </Li>
        <Li>
          <Trans id="nextStepsPage.otherReportOption3">
            Report to the credit bureaus,{' '}
            <A
              href={
                i18n.locale === 'en'
                  ? 'https://www.consumer.equifax.ca/personal/'
                  : 'https://www.consumer.equifax.ca/personnel/'
              }
            >
              Equifax
            </A>{' '}
            and{' '}
            <A
              href={
                i18n.locale === 'en'
                  ? 'https://www.transunion.ca/'
                  : 'https://www.transunion.ca/fr'
              }
            >
              TransUnion
            </A>
            , if your identity was stolen.
          </Trans>
        </Li>
      </Ul>
      <TrackPageViews />
    </Layout>
  )
}
