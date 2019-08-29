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

export const FilesToUpload = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={3} steps={[{}, {}, {}, {}, {}]} />
    </Container>
    <TrackPageViews />
    <BackButton route="/p1/suspectinfoquestion" />
    <H1>
      <Trans>Attach supporting files</Trans>
    </H1>
    <P>
      <Trans>
        Do you have any documents, images, screenshots, or receipts?
      </Trans>
    </P>

    <ButtonsContainerYesNo
      yesRoute="/p1/uploadfiles"
      noRoute="/p1/contactinfoquestion"
    />
  </Layout>
)
