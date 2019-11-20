/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { ApolloConsumer } from 'react-apollo'
import { H2 } from './components/header'
import { Text, StyledSpan } from './components/text'
import { Container } from './components/container'
import { Link } from './components/link'
import {
  getTimeFrame,
  getWhatHappened,
  getScammerDetails,
  getImpact,
  getP2ContactInfo,
} from './utils/queriesAndMutations'

const EditButton = ({ path, label }) => {
  const { i18n } = useLingui()
  return (
    <Link type="button" textAlign="center" to={path} aria-label={i18n._(label)}>
      <Trans id="button.edit" />
    </Link>
  )
}

const TimeFrameSummary = ({ client }) => {
  let { startDate, endDate } = getTimeFrame(client)
  startDate = startDate.slice(0, 10)
  endDate = endDate.slice(0, 10)
  return (
    <React.Fragment>
      <H2>
        <Trans id="confirmationPage.timeFrameTitle" />{' '}
        <EditButton label={'Edit timeframe'} path="/timeframe" />
      </H2>
      {startDate ? (
        <Text>
          <Trans
            id="confirmationPage.timeFrameDateRange"
            values={{ startDate, endDate }}
          />
        </Text>
      ) : (
        <Text>
          <Trans id="confirmationPage.timeFrameIntro" />
        </Text>
      )}
    </React.Fragment>
  )
}

const WhatHappenedSummary = ({ client }) => {
  let { whatHappened } = getWhatHappened(client)

  return (
    <React.Fragment>
      <H2>
        <Trans id="confirmationPage.scamTitle" />{' '}
        <EditButton label={'Edit what happened'} path="/whathappened" />
      </H2>
      {whatHappened ? (
        <Text>{whatHappened}</Text>
      ) : (
        <Text>
          <Trans id="confirmationPage.scamIntro" />
        </Text>
      )}
    </React.Fragment>
  )
}

const ScammerSummary = ({ client }) => {
  const { scammerDetails, files, fileDescriptions } = getScammerDetails(client)
  return (
    <React.Fragment>
      <H2>
        <Trans id="confirmationPage.suspectTitle" />{' '}
        <EditButton label={'Edit scammer information'} path="/scammerdetails" />
      </H2>
      {scammerDetails !== '' ||
      files.length > 0 ||
      fileDescriptions.length > 0 ? (
        <React.Fragment>
          <Text>{scammerDetails}</Text>
          {files
            ? files.map((file, index) => (
                <Container key={index}>
                  <StyledSpan fontWeight="bold">{file}:</StyledSpan>{' '}
                  <StyledSpan>{fileDescriptions[index]}</StyledSpan>
                </Container>
              ))
            : null}
        </React.Fragment>
      ) : (
        <Text>
          <Trans id="confirmationPage.suspectIntro" />
        </Text>
      )}
    </React.Fragment>
  )
}

const ImpactSummary = ({ client }) => {
  const { i18n } = useLingui()
  let { howWereYouAffected, otherImpact, damage } = getImpact(client)
  if (howWereYouAffected.indexOf('Other impact') > -1) {
    howWereYouAffected = howWereYouAffected.filter(
      impact => impact !== 'Other impact',
    )
    howWereYouAffected.push(otherImpact)
  }
  return (
    <>
      <H2>
        <Trans id="confirmationPage.ImpactTitle" />{' '}
        <EditButton label={'Edit impact'} path="/impact" />
      </H2>
      {howWereYouAffected.length > 0 || damage !== '' ? (
        <>
          <Text>{howWereYouAffected.map(i => i18n._(i)).join(', ')}</Text>
          <Text>{damage}</Text>
        </>
      ) : (
        <Text>
          <Trans id="confirmationPage.impactIntro" />
        </Text>
      )}
    </>
  )
}

const ContactSummary = ({ client }) => {
  const { fullName, email, phone, postalCode } = getP2ContactInfo(client)
  return (
    <React.Fragment>
      <H2>
        <Trans id="confirmationPage.contactTitle" />{' '}
        <EditButton label={'Edit contact information'} path="/contactinfo" />
      </H2>
      {(fullName + email + phone + postalCode).length > 0 ? (
        <React.Fragment>
          <Text>{fullName}</Text>
          <Text>{email}</Text>
          <Text>{phone}</Text>
          <Text>{postalCode}</Text>
        </React.Fragment>
      ) : (
        <Text>
          <Trans id="confirmationPage.contactIntro" />
        </Text>
      )}
      <br></br>
    </React.Fragment>
  )
}

export const ConfirmationSummary = () => (
  <ApolloConsumer>
    {client => {
      client.writeData({
        data: { doneForms: true },
      })
      return (
        <React.Fragment>
          <TimeFrameSummary client={client} />
          <WhatHappenedSummary client={client} />
          <ScammerSummary client={client} />
          <ImpactSummary client={client} />
          <ContactSummary client={client} />
        </React.Fragment>
      )
    }}
  </ApolloConsumer>
)
