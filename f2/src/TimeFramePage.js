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
import { Text, Stack } from '@chakra-ui/core'

export const TimeFramePage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <BackButton route="/">
          <Trans>the start page</Trans>
        </BackButton>
        <Stack spacing={2}>
          <Steps activeStep={1} totalSteps={6} />
          <H1>
            <Trans>When did the scam happen?</Trans>
          </H1>
          <Text>
            <Trans>
              It’s okay if you don’t know exactly when it took place. You can
              give your best guess or leave this blank.
            </Trans>
          </Text>
          <TrackPageViews />
        </Stack>

        <TimeFrameInfoForm
          onSubmit={(client, data) => {
            client.writeData({ data: { timeFrame: JSON.stringify(data) } })
            history.push(
              getDoneForms(client) ? '/confirmation' : '/whathappened',
            )
          }}
        />
      </Layout>
    )}
  />
)
