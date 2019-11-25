import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { TimeFrameInfoForm } from './forms/TimeFrameInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { getDoneForms } from './utils/queriesAndMutations'
import { BackButton } from './components/backbutton'
import { Steps } from './components/stepper'
import { Stack, Box } from '@chakra-ui/core'

export const TimeFramePage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />

        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/">
            <Trans id="timeFramePage.backButton" />
          </BackButton>

          <Stack spacing={4}>
            <Steps activeStep={1} totalSteps={6} />

            <H1>
              <Trans id="timeFramePage.title" />
            </H1>
          </Stack>

          <P>
            <Trans id="timeFramePage.intro" />
          </P>

          <TimeFrameInfoForm
            onSubmit={(client, data) => {
              client.writeData({ data: { timeFrame: JSON.stringify(data) } })
              history.push(
                getDoneForms(client) ? '/confirmation' : '/whathappened',
              )
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
