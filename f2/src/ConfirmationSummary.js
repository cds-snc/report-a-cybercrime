/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { H2, H1 } from './components/header'
import { Text, StyledSpan } from './components/text'
import { Container } from './components/container'
import { Link } from './components/link'
import { Stack, Grid, Flex } from '@chakra-ui/core'
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

const ScammerSummary = () => {
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

const ContactSummary = () => {
  const [data] = useStateValue()
  const { contactInfo } = data.formData
  const fullName = contactInfo ? contactInfo.fullName : ''
  const email = contactInfo ? contactInfo.email : ''
  const postalCode = contactInfo ? contactInfo.postalCode : ''

  return (
    <React.Fragment>
      <H2>
        <Trans id="confirmationPage.contactTitle" />{' '}
        <EditButton label={'Edit contact information'} path="/contactinfo" />
      </H2>
      {(fullName + email + postalCode).length > 0 ? (
        <React.Fragment>
          <Text>{fullName}</Text>
          <Text>{email}</Text>
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
    <React.Fragment>
      <Stack spacing={12} shouldWrapChildren>
        <Stack spacing={4} borderBottom="2px" pb={4}>
          <Flex align="baseline">
            <H2 fontWeight="600" fontSize="2xl">
              Section title
            </H2>
            <Link to="#" fontSize="lg" ml={4}>
              Edit
            </Link>
          </Flex>

          <Text>Sentence composed with checkbox or radio answers</Text>
          <Stack as="dl">
            <Flex>
              <Text as="dt" fontWeight="bold" w="40%">
                Question
              </Text>
              <Text as="dd" w="60%">
                Answer
              </Text>
            </Flex>
          </Stack>
        </Stack>
        <TimeFrameSummary />
        <WhatHappenedSummary />
        <ScammerSummary />
        <ImpactSummary />
        <ContactSummary />
      </Stack>
    </React.Fragment>
  )
}
