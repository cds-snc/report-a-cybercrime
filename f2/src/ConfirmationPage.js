/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

const randLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return letters[Math.floor(Math.random() * letters.length)]
}
const randDigit = () => Math.floor(Math.random() * 10)

const randomizeString = s =>
  s
    ? s
        .replace(/[a-z]/g, () => randLetter())
        .replace(/[A-Z]/g, () => randLetter().toUpperCase())
        .replace(/[0-9]/g, () => randDigit())
    : s

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  })
  return await response
}

const prepFormData = formData => {
  let contactInfo = formData.contactInfo ? formData.contactInfo : {}
  let { fullName, email, postalCode } = contactInfo
  fullName = randomizeString(fullName)
  email = randomizeString(email)
  postalCode = randomizeString(postalCode)

  return {
    ...formData,
    contactInfo: {
      fullName,
      email,
      postalCode,
    },
  }
}

const submitToServer = async data => {
  console.log({ data })
  await postData('/submit', data)
}

export const ConfirmationPage = () => {
  const [{ formData }, dispatch] = useStateValue() // eslint-disable-line no-unused-vars

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/contactinfo">
              <Trans id="confirmationPage.backButton" />
            </BackButton>
            <Steps activeStep={8} totalSteps={8} />
            <Stack spacing={4} role="heading" aria-level="1" shouldWrapChildren>
              <H1 as="span">
                <Trans id="confirmationPage.title" />
              </H1>
            </Stack>
            <ConfirmationSummary />
            <ConfirmationForm
              onSubmit={() => {
                let data = prepFormData(formData)
                submitToServer(data)
                // dispatch({ type: 'deleteFormData', data: {} })  restore after testing
                history.push('/thankYouPage')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
