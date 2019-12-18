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

export const KevinPage = props => {
  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <ApolloConsumer>
            {client =>
              client.writeData({
                data: {
                  doneForms: false,
                  scamInfo: JSON.stringify({}),
                  lostMoney: JSON.stringify({}),
                  suspectInfo: JSON.stringify({}),
                  files: [],
                  contactInfo: JSON.stringify({}),
                  timeFrame: JSON.stringify({}),
                  whatHappened: JSON.stringify({}),
                  scammerDetails: JSON.stringify({}),
                  impact: JSON.stringify({}),
                  tellUsMore: JSON.stringify({}),
                },
              })
            }
          </ApolloConsumer>
          <Stack spacing={10} shouldWrapChildren>
            <H1>
              <Trans id="kevinPage.title" />
            </H1>

            <Stack spacing={4}>
              
            </Stack>

            <Button
              rightIcon="chevron-right"
              onClick={() => {
                history.push('/timeframe')
              }}
            >
              <Trans id="landingPage.nextButton" />
            </Button>
          </Stack>
        </Layout>
      )}
    />
  )
}

KevinPage.propTypes = {
  location: PropTypes.object,
}
