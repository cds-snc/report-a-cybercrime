/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { ButtonsContainerYesNo } from '../components/buttons-container'
import { BackButton } from '../components/backbutton'

export const Willbecontacted = () => (
  <Layout>
    <TrackPageViews />
    <BackButton route="/p1/uploadfilesquestion">
      <Trans>supporting files</Trans>
    </BackButton>
    <Steps activeStep={5} totalSteps={6} />
    <H1>
      <Trans>
        Would you like to be contacted, should the police need more information?
      </Trans>
    </H1>

    <ButtonsContainerYesNo
      yesRoute="/p1/contactinfo"
      noRoute="/p1/confirmation"
    />
  </Layout>
)
