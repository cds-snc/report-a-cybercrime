import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { PrivacyConsentInfoForm } from './forms/PrivacyConsentInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const PrivacyConsentPage = () => {
  const [dispatch] = useStateValue()

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
            <P>
              <Trans id="privacyConsentPage.intro" />
            </P>
            <PrivacyConsentInfoForm
              onSubmit={data => {
                dispatch({
                  type: 'saveFormData',
                  data: { consent: data },
                })
                history.push('/whatwasaffected') // TODO: change this to /howdiditstart when that page is done
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
