/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Button } from './components/button'
import { H1 } from './components/header'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack } from '@chakra-ui/core'

export const NormPage = props => {
  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <H1>
              <Trans id="normPage.title" />
            </H1>

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

NormPage.propTypes = {
  location: PropTypes.object,
}
