/** @jsx jsx */
import { jsx } from '@emotion/core'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Stack, Alert, AlertIcon } from '@chakra-ui/core'

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

export const FinalFeedbackThanksPage = () => {
  return (
    <Layout>
      <TrackPageViews />
      <Stack spacing={10} shouldWrapChildren>
        <H1>
          <Trans id="finalFeedbackThanks.title" />
        </H1>
        <Alert status="success">
          <AlertIcon mt={0} />
          <Trans id="thankYouPage.safelyCloseWindow" />
        </Alert>
      </Stack>
    </Layout>
  )
}
