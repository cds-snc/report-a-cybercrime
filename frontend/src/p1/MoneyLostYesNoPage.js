/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import { ButtonsContainerYesNo } from '../components/buttons-container'
import { BackButton } from '../components/backbutton'

export const LoseMoney = () => (
  <Layout>
    <TrackPageViews />
    <BackButton route="/p1/scaminfo">
      <Trans>what happened</Trans>
    </BackButton>
    <Steps activeStep={2} totalSteps={6} />
    <H1>
      <Trans>Did you lose any money as part of this scam?</Trans>
    </H1>

    <ButtonsContainerYesNo
      yesRoute="../moneylost"
      noRoute="../suspectinfoquestion"
    />
  </Layout>
)
