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
                <Trans id="privacyStatementPage.whoHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.whoText1" />
              </P>
              <P>
                <Trans id="privacyStatementPage.whoText2" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.whathappensHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.whathappensText" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.informationHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.informationText1" />
              </P>
              <P>
                <Trans id="privacyStatementPage.informationText2" />
              </P>
              <H2 as="span">
                <Trans id="privacyStatementPage.toinquireHeading" />
              </H2>
              <P>
                <Trans id="privacyStatementPage.toinquireText1" />
              </P>
              <P>
                <Trans id="privacyStatementPage.toinquireText2" />
              </P>
              <P>
                <Trans id="privacyStatementPage.toinquireText3" />
              </P>
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
