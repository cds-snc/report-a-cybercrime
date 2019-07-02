/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Steps } from './components/stepper'
import { Container } from './components/container'
import { TrackPageViews } from './TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from './components/layout'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/confirmation')
}

export const ContactInfoPage = () => (
  <Layout>
    <Container css={topBarContainer}>
      <Steps activeStep={4} />
    </Container>
    <H1>
      <Trans>Enter your contact information</Trans>
    </H1>
    <TrackPageViews />
    <ContactInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
