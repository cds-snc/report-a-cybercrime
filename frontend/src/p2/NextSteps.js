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
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P>
      <Trans>
        We've sent you a confirmation email with a summary of your report.
      </Trans>
    </P>
    <H3>
      <Trans>What happens next</Trans>
    </H3>
    <Ul>
      <Li>
        <Trans>
          The RCMP's{' '}
          <A href="http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3">
            National Cybercrime Coordination Unit
          </A>{' '}
          will analyze your report and link it with others that are similar.
        </Trans>
      </Li>
      <Li>
        <Trans>
          Once there's enough information, police could launch an investigation.
          It's unlikely you'll hear from police directly, and they may only get
          in touch months from now, if at all.
        </Trans>
      </Li>
      <Li>
        <Trans>
          You can tell us more by reporting again and referencing report number
          #NC300234234.
        </Trans>
      </Li>
    </Ul>
    <H3>
      <Trans>You have other reporting options</Trans>
    </H3>
    <Ul>
      <Li>
        <Trans>
          If it happened online, report directly to the website where the scam
          took place.
        </Trans>
      </Li>
      <Li>
        <Trans>
          If you lost money, report to the financial institution where you sent
          money.
        </Trans>
      </Li>
      <Li>
        <Trans>
          If your identity was stolen, report to the credit bureaus,{' '}
          <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
          <A href="https://www.transunion.ca/">TransUnion</A>.
        </Trans>
      </Li>
    </Ul>
    <H3>
      <Trans>You can get more support</Trans>
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
