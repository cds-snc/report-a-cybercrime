/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { H1, H2 } from './components/header'
import { Container } from './components/container'
import { Text } from './components/text'
import { Button } from './components/button'
import { Link } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'
import {
  SUBMIT_REPORT_MUTATION,
  getScamInfo,
  getLostMoney,
  getSuspectInfo,
  getFiles,
  getContactInfo,
} from './utils/queriesAndMutations'

const scamEventSummary = client => {
  let {
    howWereYouContacted,
    otherMethodOfContact,
    whenWereYouContacted,
    scamDetails,
  } = getScamInfo(client)

  if (
    (howWereYouContacted && howWereYouContacted.length) ||
    whenWereYouContacted ||
    scamDetails
  ) {
    if (otherMethodOfContact) {
      howWereYouContacted = howWereYouContacted.concat(otherMethodOfContact)
    }
    howWereYouContacted = howWereYouContacted
      ? howWereYouContacted.filter(s => s !== 'other').join(', ')
      : ''
    return (
      <React.Fragment>
        <H2 fontSize={[3, null, 4]} marginBottom={[1, null, 1]}>
          <Trans>Scam event</Trans>
        </H2>
        {scamDetails ? (
          <Text>
            <strong>
              <Trans>Description</Trans>:
            </strong>
            {scamDetails}
          </Text>
        ) : null}

        <Text>
          <strong>
            <Trans>Date </Trans>:
          </strong>
          {whenWereYouContacted}
        </Text>
        {howWereYouContacted ? (
          <Text>
            <strong>
              <Trans>Contacted by</Trans>:
            </strong>{' '}
            {howWereYouContacted}
          </Text>
        ) : null}
      </React.Fragment>
    )
  } else {
    return null
  }
}

const lostMoneySummary = client => {
  let {
    lostAmount,
    lostCurrency,
    lostOtherCurrency,
    lostMethodsOfPayment,
    lostOtherMethodOfPayment,
  } = getLostMoney(client)
  if (lostAmount || lostCurrency || lostMethodsOfPayment.length) {
    if (lostOtherMethodOfPayment) {
      lostMethodsOfPayment = lostMethodsOfPayment.concat(
        lostOtherMethodOfPayment,
      )
    }
    lostMethodsOfPayment = lostMethodsOfPayment
      .filter(s => s !== 'other')
      .join(', ')
    return (
      <React.Fragment>
        <H2
          fontSize={[3, null, 4]}
          marginTop={[3, null, 4]}
          marginBottom={[1, null, 1]}
        >
          <Trans>Money lost</Trans>
        </H2>
        {lostAmount ? (
          <Text>
            <strong>
              <Trans>Amount</Trans>:
            </strong>
            {lostAmount}
          </Text>
        ) : null}
        {lostCurrency || lostOtherCurrency ? (
          <Text>
            <strong>
              <Trans>Currency</Trans> :
            </strong>
            {lostOtherCurrency ? lostOtherCurrency : lostCurrency}
          </Text>
        ) : null}
        {lostMethodsOfPayment ? (
          <Text>
            <strong>
              <Trans>Payment method</Trans>:
            </strong>
            {lostMethodsOfPayment}
          </Text>
        ) : null}
      </React.Fragment>
    )
  } else {
    return null
  }
}

const suspectInfoSummary = client => {
  let {
    suspectName,
    suspectAddress,
    suspectLanguage,
    otherSuspectLanguage,
    suspectPhone,
    suspectEmail,
    suspectWebsite,
    suspectIP,
  } = getSuspectInfo(client)
  if (
    suspectName ||
    suspectAddress ||
    suspectLanguage.length ||
    suspectPhone ||
    suspectEmail ||
    suspectWebsite ||
    suspectIP
  ) {
    if (otherSuspectLanguage) {
      suspectLanguage = suspectLanguage.concat(otherSuspectLanguage)
    }
    suspectLanguage = suspectLanguage
      .filter(s => s !== 'Other language')
      .join(', ')

    return (
      <React.Fragment>
        <H2
          fontSize={[3, null, 4]}
          marginTop={[3, null, 4]}
          marginBottom={[1, null, 1]}
        >
          <Trans>Scammer details</Trans>
        </H2>

        {suspectName ? (
          <Text>
            <strong>
              <Trans>Name</Trans>:
            </strong>{' '}
            {suspectName}
          </Text>
        ) : null}

        {suspectEmail ? (
          <Text>
            <strong>
              <Trans>Email address</Trans>:{' '}
            </strong>
            {suspectEmail}
          </Text>
        ) : null}

        {suspectWebsite ? (
          <Text>
            <strong>
              <Trans>Website</Trans>:{' '}
            </strong>
            {suspectWebsite}
          </Text>
        ) : null}

        {suspectAddress ? (
          <Text>
            <strong>
              {' '}
              <Trans>Mailing address</Trans>:{' '}
            </strong>
            {suspectAddress}
          </Text>
        ) : null}
        {suspectIP ? (
          <Text>
            <strong>
              <Trans>IP address</Trans>:{' '}
            </strong>
            {suspectIP}
          </Text>
        ) : null}
        {suspectLanguage ? (
          <Text>
            <strong>
              <Trans>Language of correspondence</Trans>:{' '}
            </strong>
            {suspectLanguage}
          </Text>
        ) : null}
      </React.Fragment>
    )
  } else {
    return null
  }
}

const fileUploadSummary = client => {
  const files = getFiles(client)
  if (files.length) {
    const fileList = files.join(', ')
    return (
      <React.Fragment>
        <H2
          fontSize={[3, null, 4]}
          marginTop={[3, null, 4]}
          marginBottom={[1, null, 1]}
        >
          <Trans>Files attached</Trans>
        </H2>
        <Text>
          <strong>
            <Trans>File name</Trans>:{' '}
          </strong>
          {fileList}
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}
const contactInfoSummary = client => {
  let {
    userIsTheVictim,
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = getContactInfo(client)
  if (
    userIsTheVictim ||
    contactInfoName ||
    contactInfoEmail ||
    contactInfoPhone
  ) {
    return (
      <React.Fragment>
        <H2
          fontSize={[3, null, 4]}
          marginTop={[3, null, 4]}
          marginBottom={[1, null, 1]}
        >
          <Trans>Contact information</Trans>
        </H2>

        {contactInfoName ? (
          <Text>
            <strong>
              <Trans>Name</Trans>:{' '}
            </strong>
            {contactInfoName}
          </Text>
        ) : null}

        {contactInfoEmail ? (
          <Text>
            <strong>
              <Trans>Email</Trans>:{' '}
            </strong>
            {contactInfoEmail}
          </Text>
        ) : null}
        {contactInfoPhone ? (
          <Text>
            <strong>
              <Trans>Phone number</Trans>:
            </strong>{' '}
            {contactInfoPhone}
          </Text>
        ) : null}
        {userIsTheVictim ? (
          <Text>
            <strong>
              <Trans>Victim</Trans>:
            </strong>{' '}
            {userIsTheVictim}
          </Text>
        ) : null}
      </React.Fragment>
    )
  } else {
    return null
  }
}

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

const submit = (client, submitReport) => {
  let scamInfo = getScamInfo(client)
  let lostMoney = getLostMoney(client)
  let suspectInfo = getSuspectInfo(client)
  let files = getFiles(client)
  let contactInfo = getContactInfo(client)

  let {
    suspectName,
    suspectAddress,
    suspectLanguage,
    otherSuspectLanguage,
    suspectPhone,
    suspectEmail,
    suspectWebsite,
    suspectIP,
  } = suspectInfo
  suspectName = randomizeString(suspectName)
  suspectAddress = randomizeString(suspectAddress)
  suspectPhone = randomizeString(suspectPhone)
  suspectEmail = randomizeString(suspectEmail)
  suspectWebsite = randomizeString(suspectWebsite)
  suspectIP = randomizeString(suspectIP)

  let {
    userIsTheVictim,
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = contactInfo
  contactInfoName = randomizeString(contactInfoName)
  contactInfoEmail = randomizeString(contactInfoEmail)
  contactInfoPhone = randomizeString(contactInfoPhone)

  const data = {
    scamInfo,
    lostMoney,
    suspectInfo: {
      suspectName,
      suspectAddress,
      suspectLanguage,
      otherSuspectLanguage,
      suspectPhone,
      suspectEmail,
      suspectWebsite,
      suspectIP,
    },
    files,
    contactInfo: {
      userIsTheVictim,
      contactInfoName,
      contactInfoEmail,
      contactInfoPhone,
    },
  }
  submitReport({ variables: data })
  navigate('/thankyou')
}

export const ConfirmationPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps
        activeStep={4}
        steps={[
          { href: '/scaminfo' },
          { href: '/moneylost' },
          { href: '/suspectinfo' },
          { href: 'uploadfiles' },
          { href: 'contactinfo' },
        ]}
      />
    </Container>
    <H1>
      <Trans>Confirm report information</Trans>
    </H1>
    <TrackPageViews />
    <ApolloConsumer>
      {client => (
        <React.Fragment>
          {scamEventSummary(client)}
          {lostMoneySummary(client)}
          {suspectInfoSummary(client)}
          {fileUploadSummary(client)}
          {contactInfoSummary(client)}
        </React.Fragment>
      )}
    </ApolloConsumer>

    <Container
      maxWidth="305px"
      marginTop={[3, null, 4]}
      display="flex"
      flex-direction="column"
      justify-content="space-between"
    >
      <ApolloConsumer>
        {client => (
          <Mutation mutation={SUBMIT_REPORT_MUTATION}>
            {submitReport => (
              <Button
                type="submit"
                onClick={() => submit(client, submitReport)}
              >
                <Trans>Submit report</Trans>
              </Button>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    </Container>

    <Container
      maxWidth="300px"
      marginTop={[2, null, 3]}
      display="flex"
      flex-direction="column"
      justify-content="space-between"
    >
      <Link type="button" color="black" to="/" textAlign="center">
        <Trans>Cancel report</Trans>
      </Link>
    </Container>
  </Layout>
)
