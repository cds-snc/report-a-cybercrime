import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { TimeFrameInfoForm } from './forms/TimeFrameInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Steps } from './components/stepper'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const TimeFramePage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/">
              <Trans id="timeFramePage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <Steps activeStep={1} totalSteps={6} />
              <H1 as="span">
                <Trans id="timeFramePage.title" />
              </H1>
            </Stack>

            <P>
              <Trans id="timeFramePage.intro" />
            </P>

            <TimeFrameInfoForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { timeFrame: data } })
                history.push(doneForms ? '/confirmation' : '/whathappened')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
