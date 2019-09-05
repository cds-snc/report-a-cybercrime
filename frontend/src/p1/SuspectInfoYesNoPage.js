/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { ButtonsContainerYesNo } from '../components/buttons-container'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { BackButton } from '../components/backbutton'

export const Suspectinfo = () => (
  <Layout>
    <TrackPageViews />
    <BackButton route="/p1/moneylost">
      <Trans>money lost</Trans>
    </BackButton>
    <Steps activeStep={3} totalSteps={6} />
    <H1>
      <Trans>Add suspect clues</Trans>
    </H1>
    <P>
      <Trans>
        Do you have any information about where the scam came from or how the
        scammer contacted you?
      </Trans>
    </P>

    <ButtonsContainerYesNo
      yesRoute="/p1/suspectinfo"
      noRoute="/p1/uploadfilesquestion"
    />
  </Layout>
)
