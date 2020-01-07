/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack } from '@chakra-ui/core'
import { WarningBanner } from './components/warning-banner'

export const LandingPage = props => {
  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <H1>
              <Trans id="landingPage.title" />
            </H1>
            <Stack spacing={4}>
              <P>
                <Trans id="landingPage.intro" />
              </P>
              <P>
                <Trans id="landingPage.required0" />
              </P>
              <Ul>
                <Li>
                  <Trans id="landingPage.required1" />
                </Li>
                <Li>
                  <Trans id="landingPage.required2" />
                </Li>
                <Li>
                  <Trans id="landingPage.required3" />
                </Li>
                <Li>
                  <Trans id="landingPage.required4" />
                </Li>
              </Ul>
            </Stack>
            <Button
              rightIcon="chevron-right"
              onClick={() => {
                history.push('/timeframe')
              }}>
              <Trans id="landingPage.nextButton" />
            </Button>
          </Stack>
        </Layout>
      )}
    />
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}
