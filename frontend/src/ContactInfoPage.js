/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Steps } from './components/stepper'
import { Container } from './components/container'
import { TrackPageViews } from './TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from './components/layout'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { contactInfo: JSON.stringify(data) } })
  navigate('/confirmation')
}

export const ContactInfoPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps
        activeStep={4}
        steps={[
          { href: '/scaminfo' },
          { href: '/moneylost' },
          { href: '/suspectinfo' },
          { href: 'uploadfiles' },
          {},
        ]}
      />
    </Container>
    <H1>
      <Trans>Leave your contact information</Trans>
    </H1>
    <P>
      <Trans>
        A local police officer may need to follow up for more information,
        should your report becomes an investigation.
      </Trans>
    </P>
    <TrackPageViews />
    <ContactInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
