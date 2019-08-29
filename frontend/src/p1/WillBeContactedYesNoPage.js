/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { TrackPageViews } from '../TrackPageViews'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { ButtonsContainerYesNo } from '../components/buttons-container'
import { BackButton } from '../components/backbutton'

export const Willbecontacted = () => (
  <Layout>
    <TrackPageViews />
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={4} steps={[{}, {}, {}, {}, {}]} />
    </Container>
    <BackButton route="/p1/uploadfilesquestion" />
    <H1>
      <Trans>Leave your contact information</Trans>
    </H1>
    <P>
      <Trans>
        Would you like to be contacted, should the police need more information?
      </Trans>
    </P>

    <ButtonsContainerYesNo
      yesRoute="/p1/contactinfo"
      noRoute="/p1/confirmation"
    />
  </Layout>
)
