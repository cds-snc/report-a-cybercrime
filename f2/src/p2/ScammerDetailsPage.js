/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Steps } from '../components/stepper'
import { TrackPageViews } from '../TrackPageViews'
import { ScammerDetailsForm } from './forms/ScammerDetailsForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

export const ScammerDetailsPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <BackButton route="/whathappened">
          <Trans>the scam</Trans>
        </BackButton>
        <Steps activeStep={3} totalSteps={6} />
        <H1>
          <Trans>Add suspect clues</Trans>
        </H1>
        <P>
          <Trans>
            Any clues about the source of the scam can help police track down
            the scammer.
          </Trans>
        </P>
        <TrackPageViews />
        <ScammerDetailsForm
          onSubmit={(client, data) => {
            client.writeData({ data: { scammerDetails: JSON.stringify(data) } })
            history.push(getDoneForms(client) ? '/confirmation' : '/impact')
          }}
        />
      </Layout>
    )}
  />
)
