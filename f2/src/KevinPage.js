/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { H1 } from './components/header'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack } from '@chakra-ui/core'
import { Steps } from './components/stepper'
import { getDoneForms } from './utils/queriesAndMutations'
import { KevinInfoForm } from './forms/KevinInfoForm'


export const KevinPage = () => (

    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          
          <Stack spacing={10} shouldWrapChildren>
           
            <Stack spacing={4} role="heading" aria-level="1">
            <Steps activeStep={1} totalSteps={6} />
            <H1>
              <Trans id="kevinPage.title" />
            </H1>
          </Stack>

          <KevinInfoForm
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

KevinPage.propTypes = {
  location: PropTypes.object,
}
