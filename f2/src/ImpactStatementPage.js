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
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const ImpactStatementPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/scammerdetails">
              <Trans id="impactPage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <Steps activeStep={4} totalSteps={6} />
              <H1 as="span">
                <Trans id="impactPage.title" />
              </H1>
            </Stack>

            <P>
              <Trans id="impactPage.intro" />
            </P>

            <ImpactStatementInfoForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { impact: data } })
                history.push(doneForms ? '/confirmation' : '/contactinfo')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
