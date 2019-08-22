/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Steps } from '../components/stepper'
import { Container } from '../components/container'
import { TrackPageViews } from '../TrackPageViews'
import { ContactInfoForm } from './forms/ContactInfoForm'
import { Layout } from '../components/layout'
import { Link } from '../components/link'

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

    <Container
      width="105px"
      marginTop={[1, null, 1]}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <Link type="button" color="black" to="/p2/impact" textAlign="left">
        <Trans>&#9664; Back </Trans>
      </Link>
    </Container>
    <H1>
      <Trans>Leave your contact information</Trans>
    </H1>
    <P>
      <Trans>
        Please provide your contact details so we can get in touch with you in
        case we need to check any information. We don’t follow up with everyone
        who submits a report.
      </Trans>
    </P>
    <TrackPageViews />
    <ContactInfoForm onSubmit={submitAndNavigate} />
  </Layout>
)
