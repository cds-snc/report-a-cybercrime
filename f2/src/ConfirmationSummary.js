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

const SectionHeader = props => (
  <H2
    fontSize={[3, null, 4]}
    marginTop={[2, null, 3]}
    marginBottom={[1, null, 1]}
    {...props}
  />
)

const EditButton = ({ path, label }) => {
  const { i18n } = useLingui()
  return (
    <Link
      type="button"
      color="black"
      textAlign="center"
      to={path}
      aria-label={i18n._(label)}
    >
      <Trans id="button.edit">Edit</Trans>
    </Link>
  )
}

const TimeFrameSummary = ({ client }) => {
  let { startDate, endDate } = getTimeFrame(client)
  startDate = startDate.slice(0, 10)
  endDate = endDate.slice(0, 10)
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans id="confirmationPage.timeFrameTitle">Timeframe</Trans>{' '}
        <EditButton label={'Edit timeframe'} path="/timeframe" />
      </SectionHeader>
      {startDate ? (
        <Text>
          <Trans id="confirmationPage.timeFrameDateRange">
            {startDate} to {endDate}
          </Trans>
        </Text>
      ) : (
        <Text>
          <Trans id="confirmationPage.timeFrameIntro">
            If you can, give us an idea of when the scam took place so that
            police are able to look into it.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const WhatHappenedSummary = ({ client }) => {
  let { whatHappened } = getWhatHappened(client)

  return (
    <React.Fragment>
      <SectionHeader>
        <Trans id="confirmationPage.scamTitle">Scam</Trans>{' '}
        <EditButton label={'Edit what happened'} path="/whathappened" />
      </SectionHeader>
      {whatHappened ? (
        <Text>{whatHappened}</Text>
      ) : (
        <Text>
          <Trans id="confirmationPage.scamIntro">
            Tell us about your experience so we can stop it from happening
            again.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const ScammerSummary = ({ client }) => {
  const { scammerDetails, files, fileDescriptions } = getScammerDetails(client)
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans id="confirmationPage.suspectTitle">Suspect</Trans>{' '}
        <EditButton label={'Edit scammer information'} path="/scammerdetails" />
      </SectionHeader>
      {scammerDetails !== '' ||
      files.length > 0 ||
      fileDescriptions.length > 0 ? (
        <React.Fragment>
          <Text>{scammerDetails}</Text>
          {files
            ? files.map((file, index) => (
                <Container key={index}>
                  <StyledSpan fontSize={[2, null, 3]} fontWeight="bold">
                    {file}:
                  </StyledSpan>{' '}
                  <StyledSpan fontSize={[2, null, 3]}>
                    {fileDescriptions[index]}
                  </StyledSpan>
                </Container>
              ))
            : null}
        </React.Fragment>
      ) : (
        <Text>
          <Trans id="confirmationPage.suspectIntro">
            Share any details you may know so that police can try to identify
            suspects.
          </Trans>
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
      <SectionHeader>
        <Trans id="confirmationPage.ImpactTitle">Impact</Trans>{' '}
        <EditButton label={'Edit impact'} path="/impact" />
      </SectionHeader>
      {howWereYouAffected.length > 0 || damage !== '' ? (
        <>
          <Text>{howWereYouAffected.map(i => i18n._(i)).join(', ')}</Text>
          <Text>{damage}</Text>
        </>
      ) : (
        <Text>
          <Trans id="confirmationPage.impactIntro">
            Tell us how the scam impacted you so that we can better support
            other people who are affected.
          </Trans>
        </Text>
      )}
    </>
  )
}

const ContactSummary = ({ client }) => {
  const { fullName, email, phone, postalCode } = getP2ContactInfo(client)
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans id="confirmationPage.contactTitle">Contact</Trans>{' '}
        <EditButton label={'Edit contact information'} path="/contactinfo" />
      </SectionHeader>
      {(fullName + email + phone + postalCode).length > 0 ? (
        <React.Fragment>
          <Text>{fullName}</Text>
          <Text>{email}</Text>
          <Text>{phone}</Text>
          <Text>{postalCode}</Text>
        </React.Fragment>
      ) : (
        <Text>
          <Trans id="confirmationPage.contactIntro">
            Provide your contact details so that we can send you a confirmation
            of your report.
          </Trans>
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
