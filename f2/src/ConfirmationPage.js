/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'
import {
  getTimeFrame,
  getWhatHappened,
  getScammerDetails,
  getImpact,
  getP2ContactInfo,
  getSurveyInfo,
} from './utils/queriesAndMutations'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'

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

const prepFormData = client => {
  let timeFrame = getTimeFrame(client)
  let whatHappened = getWhatHappened(client)
  let scammerDetails = getScammerDetails(client)
  let impact = getImpact(client)
  let p2ContactInfo = getP2ContactInfo(client)
  const surveyInfo = getSurveyInfo(client)

  let { fullName, email, phone, postalCode } = p2ContactInfo
  fullName = randomizeString(fullName)
  phone = randomizeString(phone)
  postalCode = randomizeString(postalCode)

  return {
    timeFrame,
    whatHappened,
    impact,
    scammerDetails,
    contactInfo: {
      fullName,
      email,
      phone,
      postalCode,
    },
    surveyInfo,
  }
}

const submitToServer = async data => {
  await postData('/submit', data)
}

export const ConfirmationPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <Stack spacing={10} shouldWrapChildren>
          <BackButton route="/contactinfo">
            <Trans id="confirmationPage.backButton" />
          </BackButton>
          <Stack spacing={4} role="heading" aria-level="1" shouldWrapChildren>
            <Steps activeStep={6} totalSteps={6} />
            <H1 as="span">
              <Trans id="confirmationPage.title" />
            </H1>
          </Stack>
          <ConfirmationSummary />
          <ConfirmationForm
            onSubmit={(client, submitReportP2) => {
              let data = prepFormData(client)
              submitToServer(data)
              history.push('/thankYouPage')
            }}
          />
        </Stack>
      </Layout>
    )}
  />
)
