import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { DevicesForm } from './forms/DevicesForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { nextWhatWasAffectedUrl } from './utils/nextWhatWasAffectedUrl'

export const DevicesPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms, formData } = state
  const affectedOptions = formData.whatWasAffected
    ? formData.whatWasAffected.affectedOptions
    : []

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/whatwasaffected">
              <Trans id="devicePage.backButton" />
            </BackButton>
              <H1 >
                <Trans id="devicePage.title" />
              </H1>
            <Stack spacing={4}>
              <P>
                <Trans id="devicePage.intro" />
              </P>
            </Stack>

            <DevicesForm
              onSubmit={data => {
                dispatch({
                  type: 'saveFormData',
                  data: { devicesInfo: data },
                })
                history.push(
                  doneForms
                    ? '/confirmation'
                    : nextWhatWasAffectedUrl(affectedOptions, 'devices'),
                )
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
