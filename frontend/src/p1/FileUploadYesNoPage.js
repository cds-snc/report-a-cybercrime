/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { ButtonsContainerYesNo } from '../components/buttons-container'
import { BackButton } from '../components/backbutton'

export const FilesToUpload = () => (
  <Layout>
    <TrackPageViews />
    <BackButton route="/p1/suspectinfoquestion">
      <Trans>Suspect info question</Trans>
    </BackButton>
    <Steps activeStep={4} totalSteps={6} />
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
