/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import {
  getTimeFrame,
  getWhatHappened,
  getScammerDetails,
  getImpact,
  getP2ContactInfo,
  getSurveyInfo,
} from '../utils/queriesAndMutations'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { BackButton } from '../components/backbutton'

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

const prepFormData = (client, submitReportP2) => {
  let timeFrame = getTimeFrame(client)
  let whatHappened = getWhatHappened(client)
  let scammerDetails = getScammerDetails(client)
  let impact = getImpact(client)
  let p2ContactInfo = getP2ContactInfo(client)
  const surveyInfo = getSurveyInfo(client)

  let { fullName, email, phone, postalCode } = p2ContactInfo
  fullName = randomizeString(fullName)
  email = randomizeString(email)
  phone = randomizeString(phone)
  postalCode = randomizeString(postalCode)

  return {
    source: 'p2',
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

export const ConfirmationPage = () => (
  <Route
    render={({ history }) => (
      <Layout>
        <TrackPageViews />
        <BackButton route="/contactinfo">
          <Trans>your contact information</Trans>
        </BackButton>
        <Steps activeStep={6} totalSteps={6} />
        <H1>
          <Trans>Review your report</Trans>
        </H1>
        <ConfirmationSummary />
        <ConfirmationForm
          onSubmit={(client, submitReportP2) => {
            let data = prepFormData(client)
            submitReportP2({ variables: data })
            history.push('/nextsteps')
          }}
        />
      </Layout>
    )}
  />
)
