/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H3 } from '../components/header'
import { P } from '../components/paragraph'
import { A } from '../components/link'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { TrackPageViews } from '../TrackPageViews'
import { Layout } from '../components/layout'

export const NextSteps = () => (
  <Layout>
    <H1>
      <Trans>Thank you for reporting this scam</Trans>
    </H1>
    <P>
      <Trans>
        Your reference number is <strong>#NC300234234</strong>. Keep this number
        for your records or to add more information later.
      </Trans>
    </P>
    <H3>
      <Trans>What happens next</Trans>
    </H3>
    <Ul>
      <Li>
        <Trans>
          You will receive a confirmation email with a summary of your report.
        </Trans>
      </Li>
      <Li>
        <Trans>
          The RCMP's{' '}
          <A href="http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3">
            National Cybercrime Coordination Unit
          </A>{' '}
          will analyze your report and link it with others that are similar to
          help police investigations.
        </Trans>
      </Li>
    </Ul>
    <H3>
      <Trans>You have other reporting options</Trans>
    </H3>
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
    <H3>
      <Trans>You can get support</Trans>
    </H3>
    <Ul>
      <Li>
        <Trans>
          <A href="http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm">
            Get assistance from Victim Services
          </A>
        </Trans>
      </Li>
      <Li>
        <Trans>
          <A href="http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm">
            Learn how to protect yourself in the future
          </A>
        </Trans>
      </Li>
      <Li>
        <Trans>
          <A href="http://www.antifraudcentre.ca/index-eng.htm">
            See what scams are trending
          </A>
        </Trans>
      </Li>
    </Ul>
    <TrackPageViews />
  </Layout>
)
