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
import { Steps } from './components/stepper'

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
            <Steps activeStep={2} totalSteps={8} />
            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="devicePage.title" />
              </H1>
            </Stack>
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
