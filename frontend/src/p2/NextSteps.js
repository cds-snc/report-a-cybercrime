/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
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

export const NextSteps = () => (
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
        <strong>We've sent you an email with a summary of your report.</strong>
      </Trans>
    </P>
    <P>
      <Trans>
        Your reference number is <strong>#NC300234234</strong>. Keep this for
        your records or to add more information later.
      </Trans>
    </P>
    <InfoCard>
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
          The RCMP will analyze your report and combine it with others that are
          similar to help police across Canada track down cybercriminals.
        </Trans>
      </P>
      <P>
        <Trans>
          <strong>Where you can get help</strong>
        </Trans>
      </P>
      <Ul>
        <Li>
          <Trans>
            <A href="http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm">
              Talk to someone and get support
            </A>
          </Trans>
        </Li>
        <Li>
          <Trans>
            <A href="http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm">
              Find tips to protect yourself in the future
            </A>
          </Trans>
        </Li>
        <Li>
          <Trans>
            <A href="http://www.antifraudcentre.ca/index-eng.htm">
              Follow what scams are trending
            </A>
          </Trans>
        </Li>
      </Ul>
    </InfoCard>
    <br></br>
    <P>
      <Trans>
        <strong>You have other reporting options</strong>
      </Trans>
    </P>
    <Ul>
      <Li>
        <Trans>Report directly to the place where the scam happened.</Trans>
      </Li>
      <Li>
        <Trans>Report to your financial institution, if you lost money.</Trans>
      </Li>
      <Li>
        <Trans>
          Report to the credit bureaus,{' '}
          <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
          <A href="https://www.transunion.ca/">TransUnion</A>, if your identity
          was stolen.
        </Trans>
      </Li>
    </Ul>
    <TrackPageViews />
    <ButtonsContainer buttonLink={true} cancel={false} route="/p2/timeframe" />
  </Layout>
)
