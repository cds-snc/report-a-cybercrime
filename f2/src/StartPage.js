/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { H1 } from './components/header'
import { Layout } from './components/layout'
import { TrackPageViews } from './TrackPageViews'
import { Stack, Icon } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const StartPage = props => {
  const [state, dispatch] = useStateValue()
  if (state.doneForms) {
    dispatch({ type: 'saveDoneForms', data: false })
  }

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <H1>
              <Trans id="startPage.title" />
            </H1>
            <Stack spacing={4}>
              <P>
                <Trans id="startPage.intro" />
              </P>
            </Stack>
            <Button
              mb={10}
              onClick={() => {
                history.push('/')
              }}
            >
              <Trans id="startPage.nextButton" />
              <Icon
                focusable="false"
                ml={2}
                mr={-2}
                name="chevron-right"
                size="28px"
              />
            </Button>
          </Stack>
          <P>
                <Trans id="startPage.byphone" />
              </P>
              <P>
                <Trans id="startPage.hours" />
              </P>
              <P>
                <Trans id="startPage.number" />
              </P>
        </Layout>
      )}
    />
  )
}
