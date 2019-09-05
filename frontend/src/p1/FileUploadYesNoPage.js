/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { ButtonsContainerYesNo } from '../components/buttons-container'
import { BackButton } from '../components/backbutton'

export const FilesToUpload = () => (
  <Layout>
    <TrackPageViews />
    <BackButton route="/p1/suspectinfoquestion">
      <Trans>suspect clues</Trans>
    </BackButton>
    <Steps activeStep={4} totalSteps={6} />
    <H1>
      <Trans>Do you have documents, screenshots, or receipts?</Trans>
    </H1>
    <ButtonsContainerYesNo
      yesRoute="/p1/uploadfiles"
      noRoute="/p1/contactinfoquestion"
    />
  </Layout>
)
