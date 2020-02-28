/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { FinalFeedbackForm } from './forms/FinalFeedbackForm'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

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
  await postData('/submitFeedback', data)
}

export const FinalFeedbackPage = () => {
  const [state, setState] = useStateValue()

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <H1>
              <Trans id="finalFeedback.title" />
            </H1>
            <FinalFeedbackForm
              onSubmit={data => {
                submitToServer(data)
                setState((state.doneFinalFeedback = true))
                history.push('/finalfeedbackthanks')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
