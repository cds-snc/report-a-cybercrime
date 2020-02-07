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

class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    console.log('mount!')
  }

  render() {
    return <div />
  }
}

export const PrivacyConsentPage = () => {
  const [state, dispatch] = useStateValue() // eslint-disable-line no-unused-vars

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <ScrollToTop />
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/">
              <Trans id="privacyConsentPage.backButton" />
            </BackButton>

            <H1>
              <Trans id="privacyConsentPage.title" />
            </H1>

            <Stack spacing={8}>
              <P>
                <Trans id="privacyConsentPage.intro" />
              </P>
              <P>
                <Trans id="privacyConsentInfoForm.optionsHelpText" />
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
          </Stack>
        </Layout>
      )}
    />
  )
}
