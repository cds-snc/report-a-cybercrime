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
import { getP2ContactInfo } from './utils/queriesAndMutations'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

const EditButton = ({ path, label }) => {
  const { i18n } = useLingui()
  return (
    <Link type="button" textAlign="center" to={path} aria-label={i18n._(label)}>
      <Trans id="button.edit" />
    </Link>
  )
}

const TimeFrameSummary = () => {
  const [data] = useStateValue()
  const { timeFrame } = data.formData
  const startDate = timeFrame ? timeFrame.startDate.slice(0, 10) : ''
  const endDate = timeFrame ? timeFrame.endDate.slice(0, 10) : ''
  return (
    <React.Fragment>
      data: {JSON.stringify(data)}
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

const WhatHappenedSummary = () => {
  const [data] = useStateValue()
  const { whatHappened } = data.formData

  return (
    <React.Fragment>
      <H2>
        <Trans id="confirmationPage.scamTitle" />{' '}
        <EditButton label={'Edit what happened'} path="/whathappened" />
      </H2>
      {whatHappened ? (
        <Text>{whatHappened.whatHappened}</Text>
      ) : (
        <Text>
          <Trans id="confirmationPage.scamIntro" />
        </Text>
      )}
    </React.Fragment>
  )
}

const ScammerSummary = ({ client }) => {
  const [data] = useStateValue()
  const scammerDetailsForm = data.formData.scammerDetails
  const scammerDetails = scammerDetailsForm
    ? scammerDetailsForm.scammerDetails
    : ''
  const files = scammerDetailsForm ? scammerDetailsForm.files : []
  const fileDescriptions = scammerDetailsForm
    ? scammerDetailsForm.fileDescriptions
    : []

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

const ImpactSummary = () => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const { impact } = data.formData
  const howWereYouAffected = impact ? impact.howWereYouAffected : []
  const damage = impact ? impact.damage : ''

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
    </React.Fragment>
  )
}

export const ConfirmationSummary = () => {
  const [data, dispatch] = useStateValue()

  if (!data.doneForms) {
    dispatch({ type: 'saveDoneForms', data: true })
  }

  return (
    <ApolloConsumer>
      {client => {
        client.writeData({
          data: { doneForms: true },
        })
        return (
          <React.Fragment>
            <Stack spacing={4} shouldWrapChildren>
              <TimeFrameSummary />
              <WhatHappenedSummary />
              <ScammerSummary client={client} />
              <ImpactSummary />
              <ContactSummary client={client} />
            </Stack>
          </React.Fragment>
        )
      }}
    </ApolloConsumer>
  )
}
