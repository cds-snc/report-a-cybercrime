/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Steps } from './components/stepper'
import { TrackPageViews } from './TrackPageViews'
import { ScammerDetailsForm } from './forms/ScammerDetailsForm'
import { Layout } from './components/layout'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'

export const ScammerDetailsPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <BackButton route="/whathappened">
          <Trans id="scammerDetail.backButton" />
        </BackButton>
        <Steps activeStep={3} totalSteps={6} />
        <H1>
          <Trans id="scammerDetail.title" />
        </H1>
        <P>
          <Trans id="scammerDetail.intro" />
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
