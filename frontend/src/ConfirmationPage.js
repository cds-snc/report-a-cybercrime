/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import { H1, H2 } from './components/header'
import { Container } from './components/container'
import { Text } from './components/text'
import { Button } from './components/button'
import { Link } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Steps } from './components/stepper'
import { Layout } from './components/layout'

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
          <strong>
            <Trans>Description</Trans>:
          </strong>
          {scamDetails}
        </Text>
        <Text>
          <strong>
            <Trans>Date </Trans>:
          </strong>
          {whenWereYouContacted}
        </Text>
        <Text>
          <strong>
            <Trans>Contacted by</Trans>:
          </strong>{' '}
          {howWereYouContacted}
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
          <strong>
            {' '}
            <Trans>Amount</Trans>:{' '}
          </strong>
          {lostAmount}
        </Text>
        <Text>
          <strong>
            <Trans>Currency</Trans> :
          </strong>
          {lostOtherCurrency ? lostOtherCurrency : lostCurrency}
        </Text>
        <Text>
          <strong>
            <Trans>Payment method</Trans>:{' '}
          </strong>
          {lostMethodsOfPayment}
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
          <strong>
            <Trans>Name</Trans>:
          </strong>{' '}
          {suspectName}
        </Text>
        <Text>
          <strong>
            <Trans>Phone number</Trans>:{' '}
          </strong>
          {suspectPhone}
        </Text>
        <Text>
          <strong>
            <Trans>Email address</Trans>:{' '}
          </strong>
          {suspectEmail}
        </Text>
        <Text>
          <strong>
            <Trans>Website</Trans>:{' '}
          </strong>
          {suspectWebsite}
        </Text>
        <Text>
          <strong>
            {' '}
            <Trans>Mailing address</Trans>:{' '}
          </strong>
          {suspectAddress}
        </Text>
        <Text>
          <strong>
            <Trans>IP address</Trans>:{' '}
          </strong>
          {suspectIP}
        </Text>
        <Text>
          <strong>
            <Trans>Language of correspondence</Trans>:{' '}
          </strong>
          {suspectLanguage}
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
          <strong>
            <Trans>Victim</Trans>:{' '}
          </strong>
          {userIsTheVictim}
        </Text>
        <Text>
          <strong>
            <Trans>Name</Trans>:{' '}
          </strong>
          {contactInfoName}
        </Text>
        <Text>
          <strong>
            <Trans>Email</Trans>:{' '}
          </strong>
          {contactInfoEmail}
        </Text>
        <Text>
          <strong>
            <Trans>Phone number</Trans>:
          </strong>{' '}
          {contactInfoPhone}
        </Text>
        <Text>
          <strong>
            <Trans>Victim</Trans>:
          </strong>{' '}
          {userIsTheVictim}
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}

export const ConfirmationPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
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
      display="flex"
      flex-direction="column"
      justify-content="space-between"
    >
      <Button type="submit" onClick={() => navigate('/thankyou')}>
        <Trans>Submit report</Trans>
      </Button>
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
