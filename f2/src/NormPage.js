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
import { Stack } from '@chakra-ui/core'
import { Button } from './components/button'

export const NormPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <em>This is my page</em>
        <Button
        rightIcon="chevron-right"
              onClick={() => {
                history.push('/norm')
              }}
            >
              <Trans id="landingPage.nextButton" />
            </Button>
      </Layout>
    )}
  />
)
