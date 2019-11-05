/* eslint-disable react/no-unescaped-entities */

import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { Steps } from './components/stepper'
import { ImpactStatementInfoForm } from './forms/ImpactStatementInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'

export const ImpactStatementPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <BackButton route="/scammerdetails">
          <Trans id="impactPage.backButton" />
        </BackButton>
        <Steps activeStep={4} totalSteps={6} />
        <H1>
          <Trans id="impactPage.title" />
        </H1>
        <P>
          <Trans id="impactPage.intro" />
        </P>
        <TrackPageViews />
        <ImpactStatementInfoForm
          onSubmit={(client, data) => {
            client.writeData({ data: { impact: JSON.stringify(data) } })
            history.push(
              getDoneForms(client) ? '/confirmation' : '/contactinfo',
            )
          }}
        />
      </Layout>
    )}
  />
)
