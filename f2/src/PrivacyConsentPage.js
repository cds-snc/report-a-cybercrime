import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { Layout } from './components/layout'
import { PrivacyConsentInfoForm } from './forms/PrivacyConsentInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const PrivacyConsentPage = () => {
  const [state, dispatch] = useStateValue() // eslint-disable-line no-unused-vars

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/">
              <Trans id="privacyConsentPage.backButton" />
            </BackButton>

            <Stack spacing={4} role="heading" aria-level="1">
              <H1 as="span">
                <Trans id="privacyConsentPage.title" />
              </H1>
            </Stack>
            <Lead>
              <Trans id="privacyConsentPage.intro" />
            </Lead>
            <PrivacyConsentInfoForm
              onSubmit={data => {
                dispatch({
                  type: 'saveFormData',
                  data: { consent: data },
                })
                history.push('/howdiditstart')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
