/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Steps } from '../components/stepper'
import { Container } from '../components/container'
import { TrackPageViews } from '../TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from '../components/layout'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { contactInfo: JSON.stringify(data) } })
  navigate('/p2/confirmation')
}

export const ContactInfoPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={4} steps={[{}, {}, {}, {}, {}, {}]} />
    </Container>
    <BackButton route="/p2/impact" />
    <H1>
      <Trans>Leave your contact information</Trans>
    </H1>
    <P>
      <Trans>
        We will use this to send you a confirmation email and to link your
        report to other reports in your area.
      </Trans>
    </P>
    <TrackPageViews />
    <ContactInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
