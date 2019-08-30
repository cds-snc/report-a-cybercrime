/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { Steps } from '../components/stepper'
import { TrackPageViews } from '../TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from '../components/layout'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { contactInfo: JSON.stringify(data) } })
  navigate('confirmation')
}

export const ContactInfoPage = () => (
  <Layout>
    <BackButton route="/p1/contactinfoquestion" />
    <Steps activeStep={5} totalSteps={6} />
    <H1>
      <Trans>Leave your contact information</Trans>
    </H1>
    <TrackPageViews />
    <ContactInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
