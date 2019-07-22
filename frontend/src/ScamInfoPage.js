/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { TrackPageViews } from './TrackPageViews'
import { ScamInfoForm } from './forms/ScamInfoForm'
import { Container } from './components/container'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { scamInfo: JSON.stringify(data) } })
  navigate('/moneylostquestion')
}

export const ScamInfoPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={0} steps={[{}, {}, {}, {}, {}]} />
    </Container>
    <H1>
      <Trans>Describe the scam</Trans>
    </H1>
    <P>
      <Trans>
        Provide as many details as possible so that your report can be linked to
        other similar reports. Any information about where, when, and how the
        scam took place is useful.
      </Trans>
    </P>
    <TrackPageViews />
    <ScamInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
