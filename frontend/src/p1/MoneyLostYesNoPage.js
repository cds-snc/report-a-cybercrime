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

export const LoseMoney = () => (
  <Layout>
    <TrackPageViews />
    <BackButton route="/p1/scaminfo">
      <Trans>Scam info</Trans>
    </BackButton>
    <Steps activeStep={2} totalSteps={6} />
    <H1>
      <Trans>Tell us if money was lost</Trans>
    </H1>
    <P>
      <Trans>Did the scam involve a request for money?</Trans>
    </P>

    <ButtonsContainerYesNo
      yesRoute="../moneylost"
      noRoute="../suspectinfoquestion"
    />
  </Layout>
)
