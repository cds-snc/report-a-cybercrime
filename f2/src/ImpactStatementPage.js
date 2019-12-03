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
import { Stack } from '@chakra-ui/core'

export const ImpactStatementPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/scammerdetails">
            <Trans id="impactPage.backButton" />
          </BackButton>

          <Stack spacing={4}>
            <Steps activeStep={4} totalSteps={6} />
            <H1>
              <Trans id="impactPage.title" />
            </H1>
          </Stack>

          <P>
            <Trans id="impactPage.intro" />
          </P>

          <ImpactStatementInfoForm
            onSubmit={(client, data) => {
              client.writeData({ data: { impact: JSON.stringify(data) } })
              history.push(
                getDoneForms(client) ? '/confirmation' : '/contactinfo',
              )
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
