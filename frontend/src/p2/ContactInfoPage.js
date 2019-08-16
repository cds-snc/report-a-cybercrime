/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1, H2 } from '../components/header'
import { P } from '../components/paragraph'
import { Steps } from '../components/stepper'
import { Container } from '../components/container'
import { TrackPageViews } from '../TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from '../components/layout'

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
      <Steps activeStep={4} steps={[{}, {}, {}, {}, {}]} />
    </Container>
    <H1>
      <Trans>Leave your contact information</Trans>
    </H1>
    <H2>
      <Trans>Things will get better</Trans>
    </H2>
    <P>
      <Trans>
        Please provide your contact details so we can get in touch with you in
        case we need to check any details with you in the future. We don’t get
        in contact with everyone who submits a report.
      </Trans>
    </P>
    <TrackPageViews />
    <ContactInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
