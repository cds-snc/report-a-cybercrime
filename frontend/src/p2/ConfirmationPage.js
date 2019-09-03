/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import {
  getTimeFrame,
  getWhatHappened,
  getScammerDetails,
  getTellUsMore,
  getImpact,
  getP2ContactInfo,
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

const submit = (client, submitReportP2) => {
  let timeFrame = getTimeFrame(client)
  let whatHappened = getWhatHappened(client)
  let scammerDetails = getScammerDetails(client)
  let impact = getImpact(client)
  let p2ContactInfo = getP2ContactInfo(client)
  let tellUsMore = getTellUsMore(client)

  let { fullName, email, phone, postalCode } = p2ContactInfo
  fullName = randomizeString(fullName)
  email = randomizeString(email)
  phone = randomizeString(phone)
  postalCode = randomizeString(postalCode)

  const data = {
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
    tellUsMore,
  }
  submitReportP2({ variables: data }) // currently fails, need new mutation
  navigate('nextsteps')
}

export const ConfirmationPage = () => {
  return (
    <Layout>
      <TrackPageViews />
      <BackButton route="/p2/contactinfo">
        <Trans>your contact information</Trans>
      </BackButton>
      <Steps activeStep={6} totalSteps={6} />
      <H1>
        <Trans>Review your report</Trans>
      </H1>
      <ConfirmationSummary />
      <ConfirmationForm onSubmit={submit} />
    </Layout>
  )
}
