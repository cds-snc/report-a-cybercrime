/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { A } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Container } from './components/container'
import { Layout } from './components/layout'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

export const ThankYou = () => (
  <Layout>
    <TrackPageViews />
    <Container css={topBarContainer}>
      <Steps activeStep={4} />
    </Container>
    <H1>
      <Trans>Thank you for reporting</Trans>
    </H1>
    <P fontSize={[4, null, 5]}>
      <Trans>
        <strong>RCMP has received your report.</strong>
      </Trans>
    </P>
    <P>
      <Trans>
        An analyst will assess the information, combine it with other reports,
        and decide whether the report can become a police investigation.
      </Trans>
    </P>
    <P>
      <Trans>
        If your report becomes an investigation, a local police officer may be
        in touch to get more information.
      </Trans>
    </P>
    <H2 fontSize={[4, null, 5]}>
      <Trans>You may also want to:</Trans>
    </H2>
    <P>
      <ul>
        <li>Report to the service provider where the scam took place.</li>
        <br />
        <li>Report to your financial institution if you lost money.</li>
        <br />
        <li>
          Report to{' '}
          <A href="https://www.consumer.equifax.ca/personal/">Equifax</A> and{' '}
          <A href="https://www.transunion.ca/">TransUnion</A> if your identity
          was stolen.
        </li>
      </ul>
    </P>
  </Layout>
)
