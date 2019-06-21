/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
// import { navigate } from '@reach/router'
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
  const {
    howWereYouContacted,
    otherMethodOfContact,
    whenWereYouContacted,
  } = client.readQuery({
    query: gql`
      query readCache {
        howWereYouContacted
        otherMethodOfContact
        whenWereYouContacted
      }
    `,
  })
  if (
    JSON.stringify(howWereYouContacted) !== JSON.stringify([]) ||
    whenWereYouContacted != ''
  ) {
    const howContacted =
      howWereYouContacted.filter(s => s !== 'other').join() +
      (otherMethodOfContact ? ', ' + otherMethodOfContact : '')
    return (
      <React.Fragment>
        <H2 fontSize={[3, null, 4]} marginBottom={[1, null, 1]}>
          <Trans>Scam event</Trans>
        </H2>
        <Text>
          <Trans>Contacted by: {howContacted}</Trans>
        </Text>
        <Text>
          <Trans>Event Occured on: {whenWereYouContacted}</Trans>
        </Text>
      </React.Fragment>
    )
  } else {
    return null
  }
}

const lostMoneySummary = client => {
  const {
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
  if (lostAmount !== '') {
    const methodsOfPayment =
      lostMethodsOfPayment.filter(s => s !== 'other').join() +
      (lostOtherMethodOfPayment ? ', ' + lostOtherMethodOfPayment : '')
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
          <Trans>Method: {methodsOfPayment}</Trans>
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
        </React.Fragment>
      )}
    </ApolloConsumer>

    <Container
      maxWidth="305px"
      marginTop={[3, null, 4]}
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      <Button type="button">
        <Trans>Back</Trans>
      </Button>

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

      <ButtonLink type="button" color="black" marginTop={[1, null, 1]}>
        <Trans>Save Report</Trans>
      </ButtonLink>
    </Container>
  </CenterContent>
)
