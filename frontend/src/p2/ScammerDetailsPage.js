/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Steps } from '../components/stepper'
import { TrackPageViews } from '../TrackPageViews'
import { ScammerDetailsForm } from './forms/ScammerDetailsForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { scammerDetails: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : 'impact')
}

export const ScammerDetailsPage = () => {
  return (
    <Layout>
      <BackButton route="/p2/whathappened">
        <Trans>What happened</Trans>
      </BackButton>
      <Steps activeStep={3} totalSteps={6} />
      <H1>
        <Trans>Add suspect clues</Trans>
      </H1>
      <P>
        <Trans>
          Any clues about the source of the scam can help police track down the
          scammer.
        </Trans>
      </P>
      <TrackPageViews />
      <ScammerDetailsForm onSubmit={submitAndNavigate} />
    </Layout>
  )
}
