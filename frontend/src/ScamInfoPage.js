/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { ScamInfoForm } from './forms/ScamInfoForm'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/moneylostquestion')
}

export const ScamInfoPage = () => (
  <Layout>
    <Container css={topBarContainer}>
      <Steps activeStep={0} />
    </Container>
    <H1 role="banner">
      <Trans>Describe the scam</Trans>
    </H1>
    <P>
      Getting an understanding of how the scam took place could help link your
      report to other similar reports and build a stronger case for an
      investigation.
    </P>
    <TrackPageViews />
    <ScamInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
