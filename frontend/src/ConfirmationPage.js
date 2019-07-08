/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { ApolloConsumer, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { H1, H2 } from './components/header'
import { Container } from './components/container'
import { Text } from './components/text'
import { Button } from './components/button'
import { Link } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'
import { SUBMIT_REPORT_MUTATION } from './utils/queriesAndMutations'

const topBarContainer = css`
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-bottom: 20px;
`

const scamEventSummary = client => {
  let {
    howWereYouContacted,
    otherMethodOfContact,
    whenWereYouContacted,
    scamDetails,
  } = client.readQuery({
    query: gql`
      query readCache {
        howWereYouContacted
        otherMethodOfContact
        whenWereYouContacted
        scamDetails
      }
    `,
  })
  if (
    (howWereYouContacted && howWereYouContacted.length) ||
    whenWereYouContacted ||
    scamDetails
  ) {
    if (otherMethodOfContact) {
      howWereYouContacted = howWereYouContacted.concat(otherMethodOfContact)
    }
    howWereYouContacted = howWereYouContacted
      .filter(s => s !== 'other')
      .join(', ')
    return (
      <React.Fragment>
        <H2 fontSize={[3, null, 4]} marginBottom={[1, null, 1]}>
          <Trans>Scam event</Trans>
        </H2>
        <Text>
          <Trans>Description: {scamDetails}</Trans>
        </Text>
        <Text>
          <Trans>Date: {whenWereYouContacted}</Trans>
        </Text>
        <Text>
          <Trans>Contacted by: {howWereYouContacted}</Trans>
        </Text>
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
  } = client.readQuery({
    query: gql`
      query readCache {
        lostAmount
        lostCurrency
        lostOtherCurrency
        lostMethodsOfPayment
        lostOtherMethodOfPayment
      }
    `,
  })
  if (
    lostAmount ||
    lostCurrency ||
    (lostMethodsOfPayment && lostMethodsOfPayment.length)
  ) {
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
        <Text>
          <Trans>Amount: {lostAmount}</Trans>
        </Text>
        <Text>
          <Trans>
            Currency: {lostOtherCurrency ? lostOtherCurrency : lostCurrency}
          </Trans>
        </Text>
        <Text>
          <Trans>Payment method: {lostMethodsOfPayment}</Trans>
        </Text>
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
  } = client.readQuery({
    query: gql`
      query readCache {
        suspectName
        suspectAddress
        suspectLanguage
        otherSuspectLanguage
        suspectPhone
        suspectEmail
        suspectWebsite
        suspectIP
      }
    `,
  })
  if (
    suspectName ||
    suspectAddress ||
    (suspectLanguage && suspectLanguage.length) ||
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
        <Text>
          <Trans>Name: {suspectName}</Trans>
        </Text>
        <Text>
          <Trans>Phone number: {suspectPhone}</Trans>
        </Text>
        <Text>
          <Trans>Email address: {suspectEmail}</Trans>
        </Text>
        <Text>
          <Trans>Website: {suspectWebsite}</Trans>
        </Text>
        <Text>
          <Trans>Mailing address: {suspectAddress}</Trans>
        </Text>
        <Text>
          <Trans>IP address: {suspectIP}</Trans>
        </Text>
        <Text>
          <Trans>Language of correspondence: {suspectLanguage}</Trans>
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}

const fileUploadSummary = client => {
  const { files } = client.readQuery({
    query: gql`
      query readCache {
        files
      }
    `,
  })
  if (files && files.length) {
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
          <Trans>File name: {fileList}</Trans>
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}
const contactInfoSummary = client => {
  const {
    userIsTheVictim,
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = client.readQuery({
    query: gql`
      query readCache {
        userIsTheVictim
        contactInfoName
        contactInfoEmail
        contactInfoPhone
      }
    `,
  })
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
        <Text>
          <Trans>Name: {contactInfoName}</Trans>
        </Text>
        <Text>
          <Trans>Email: {contactInfoEmail}</Trans>
        </Text>
        <Text>
          <Trans>Phone number: {contactInfoPhone}</Trans>
        </Text>
        <Text>
          <Trans>Victim: {userIsTheVictim}</Trans>
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}

const randomizeString = s => {
  s.replace(/\S/g, c =>
    Math.random()
      .toString(36)
      .substring(1),
  )
  return s
}

const submit = (client, submitReport) => {
  let {
    howWereYouContacted,
    otherMethodOfContact,
    whenWereYouContacted,
    scamDetails,
    lostAmount,
    lostCurrency,
    lostOtherCurrency,
    lostMethodsOfPayment,
    lostOtherMethodOfPayment,
    suspectName,
    suspectAddress,
    suspectLanguage,
    otherSuspectLanguage,
    suspectPhone,
    suspectEmail,
    suspectWebsite,
    suspectIP,
    files,
    userIsTheVictim,
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = client.readQuery({
    query: gql`
      query readCache {
        howWereYouContacted
        otherMethodOfContact
        whenWereYouContacted
        scamDetails
        lostAmount
        lostCurrency
        lostOtherCurrency
        lostMethodsOfPayment
        lostOtherMethodOfPayment
        suspectName
        suspectAddress
        suspectLanguage
        otherSuspectLanguage
        suspectPhone
        suspectEmail
        suspectWebsite
        suspectIP
        files
        userIsTheVictim
        contactInfoName
        contactInfoEmail
        contactInfoPhone
      }
    `,
  })

  // contactInfoName = randomizeString(contactInfoName)

  const data = {
    steve: 'New Steve',
    contactInfo: {
      contactInfoName: 'Steve The Second',
      contactInfoEmail: 'steve@go.com',
      contactInfoPhone: '333-3333',
    },
  }
  console.log('submitting', data)

  submitReport({ variables: data })
  // navigate('/thankyou')
}

export const ConfirmationPage = () => (
  <Layout>
    <Container css={topBarContainer}>
      <Steps activeStep={4} />
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
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
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
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <Link type="button" color="black" to="/" textAlign="center">
        <Trans>Cancel report</Trans>
      </Link>
    </Container>
  </Layout>
)
