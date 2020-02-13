/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { FinalFeedbackForm } from './forms/FinalFeedbackForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'

async function postData(url = '', data = {}) {
  var form_data = new FormData()
  form_data.append('json', JSON.stringify(data))

  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrer: 'no-referrer',
    body: form_data,
  })
  return await response
}

const submitToServer = async data => {
  console.log('Submitting finalFeedback:', data)
  await postData('/submitFinalFeedback', data)
}

export const FinalFeedbackPage = () => {
  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/thankyoupage">
              <Trans id="finalFeedback.backButton" />
            </BackButton>
            <H1>
              <Trans id="finalFeedback.title" />
            </H1>
            <FinalFeedbackForm
              onSubmit={data => {
                submitToServer(data)
                history.push('/finalFeedbackThanks')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
