import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Layout } from './components/layout'
import { DevicesForm } from './forms/DevicesForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const DevicesPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />

        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/">
            <Trans id="devicePage.backButton" />
          </BackButton>

          <Stack spacing={4} role="heading" aria-level="1">
            <H1 as="span">
              <Trans id="devicePage.title" />
            </H1>
          </Stack>

          <DevicesForm
             onSubmit={data => {
              dispatch({
                type: 'saveFormData',
                data: { devicesInfo: data },
              })
              history.push(doneForms ? '/confirmation' : '/contactinfo')
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
}
