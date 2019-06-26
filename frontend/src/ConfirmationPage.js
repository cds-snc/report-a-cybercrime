/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import { H1, H2 } from './components/header'
import { Container } from './components/container'
import { Text } from './components/text'
import { Button } from './components/button'
import { ButtonLink } from './components/button-link'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
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
          <Trans>Contacted by: {howWereYouContacted}</Trans>
        </Text>
        <Text>
          <Trans>Event Occured on: {whenWereYouContacted}</Trans>
        </Text>
        <Text>
          <Trans>Details: {scamDetails}</Trans>
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
    lostMethodsOfPayment,
    lostOtherMethodOfPayment,
  } = client.readQuery({
    query: gql`
      query readCache {
        lostAmount
        lostCurrency
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
          <Trans>Currency: {lostCurrency}</Trans>
        </Text>
        <Text>
          <Trans>Method: {lostMethodsOfPayment}</Trans>
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
    suspectLanguage = suspectLanguage.filter(s => s !== 'other').join(', ')
    return (
      <React.Fragment>
        <H2
          fontSize={[3, null, 4]}
          marginTop={[3, null, 4]}
          marginBottom={[1, null, 1]}
        >
          <Trans>Suspect Information</Trans>
        </H2>
        <Text>
          <Trans>Name: {suspectName}</Trans>
        </Text>
        <Text>
          <Trans>Address: {suspectAddress}</Trans>
        </Text>
        <Text>
          <Trans>Language: {suspectLanguage}</Trans>
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
          <Trans>IP address: {suspectIP}</Trans>
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
          <Trans>Evidence</Trans>
        </H2>
        <Text>
          <Trans>Files: {fileList}</Trans>
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}
const contactInfoSummary = client => {
  const {
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = client.readQuery({
    query: gql`
      query readCache {
        contactInfoName
        contactInfoEmail
        contactInfoPhone
      }
    `,
  })
  if (contactInfoName || contactInfoEmail || contactInfoPhone) {
    return (
      <React.Fragment>
        <H2
          fontSize={[3, null, 4]}
          marginTop={[3, null, 4]}
          marginBottom={[1, null, 1]}
        >
          <Trans>If the police have any questions</Trans>
        </H2>
        <Text>
          <Trans>Name: {contactInfoName}</Trans>
        </Text>
        <Text>
          <Trans>Email: {contactInfoEmail}</Trans>
        </Text>
        <Text>
          <Trans>Phone: {contactInfoPhone}</Trans>
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}

export const ConfirmationPage = () => (
  <CenterContent>
    <H1>
      <Trans>Would you like to submit this report?</Trans>
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
      <Button type="submit">
        <Trans>Submit</Trans>
      </Button>
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
      <ButtonLink type="button" color="black">
        <Trans>Cancel Report</Trans>
      </ButtonLink>
    </Container>
  </CenterContent>
)
