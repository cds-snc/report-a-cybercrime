import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { PrivacyConsentInfoForm } from './forms/PrivacyConsentInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const PrivacyStatementPage = () => {
  const [state, dispatch] = useStateValue() // eslint-disable-line no-unused-vars

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/">
              <Trans id="privacyStatementPage.backButton" />
            </BackButton>
            <H1 as="span">
              <Trans id="privacyStatementPage.title" />
            </H1>
              <H2 as="span">
                <Trans id="privacyStatementPage.aboutHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.aboutText" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.whoHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.whoText" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.whathappensHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.whathappensText" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.whereHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.whereText" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.howpiiHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.howpiiText" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.toinquireHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.toinquireText" />
              </P>
            </Stack>
              <PrivacyConsentInfoForm
                onSubmit={data => {
                  dispatch({
                    type: 'saveFormData',
                    data: { consent: data },
                  })
                  history.push('/howdiditstart')
                }}
              />         
        </Layout>
      )}
    />
  )
}
