/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { ApolloConsumer } from 'react-apollo'
import { H2 } from '../components/header'
import { Text, StyledSpan } from '../components/text'
import { Container } from '../components/container'
import { Link } from '../components/link'
import {
  getTimeFrame,
  getWhatHappened,
  getScammerDetails,
  getImpact,
  getP2ContactInfo,
} from '../utils/queriesAndMutations'

const SectionHeader = props => (
  <H2
    fontSize={[3, null, 4]}
    marginTop={[2, null, 3]}
    marginBottom={[1, null, 1]}
    {...props}
  />
)

const EditButton = props => (
  <Link type="button" color="black" textAlign="center" {...props}>
    <Trans>Edit</Trans>
  </Link>
)

const timeFrameSummary = client => {
  let { startDate, endDate } = getTimeFrame(client)
  startDate = startDate.slice(0, 10)
  endDate = endDate.slice(0, 10)
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Timeframe</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit timeframe')}
              to="/p2/timeframe"
            />
          )}
        </I18n>
      </SectionHeader>
      {startDate ? (
        <Text>
          <Trans>
            {startDate} to {endDate}
          </Trans>
        </Text>
      ) : (
        <Text>
          <Trans>
            If you can, give us an idea of when the scam took place so that
            police are able to investigate.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const whatHappenedSummary = client => {
  let { whatHappened } = getWhatHappened(client)

  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Scam</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit what happened')}
              to="/p2/whathappened"
            />
          )}
        </I18n>
      </SectionHeader>
      {whatHappened ? (
        <Text>{whatHappened}</Text>
      ) : (
        <Text>
          <Trans>
            Tell us about your experience so we can stop it from happening
            again.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const scammerSummary = client => {
  const { scammerDetails, files, fileDescriptions } = getScammerDetails(client)
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Scammer</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit scammer information')}
              to="/p2/scammerdetails"
            />
          )}
        </I18n>
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
          <Trans>
            Share any details you may know so that police can try to identify
            suspects.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const impactSummary = client => {
  let { howWereYouAffected, otherImpact, damage } = getImpact(client)
  if (howWereYouAffected.indexOf('Other impact') > -1) {
    howWereYouAffected = howWereYouAffected.filter(
      impact => impact != 'Other impact',
    )
    howWereYouAffected.push(otherImpact)
  }
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Impact</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton aria-label={i18n._('Edit impact')} to="/p2/impact" />
          )}
        </I18n>
      </SectionHeader>
      {howWereYouAffected.length > 0 || damage != '' ? (
        <React.Fragment>
          <Text>{howWereYouAffected.join(', ')}</Text>
          <Text>{damage}</Text>
        </React.Fragment>
      ) : (
        <Text>
          <Trans>
            Tell us how the scam impacted you so that we can better support
            other people who are affected.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const contactSummary = client => {
  const { fullName, email, phone, postalCode } = getP2ContactInfo(client)
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Contact</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit contact information')}
              to="/p2/contactinfo"
            />
          )}
        </I18n>
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
          <Trans>
            Provide your contact details so that we can send you a confirmation
            of report.
          </Trans>
        </Text>
      )}
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
          {timeFrameSummary(client)}
          {whatHappenedSummary(client)}
          {scammerSummary(client)}
          {impactSummary(client)}
          {contactSummary(client)}
        </React.Fragment>
      )
    }}
  </ApolloConsumer>
)
