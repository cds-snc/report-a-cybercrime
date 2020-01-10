/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { H2 } from './components/header'
import { Text } from './components/text'
import { Link } from './components/link'
import { Stack, Flex, Code, Box } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { DescriptionListItem } from './components/DescriptionListItem'
import { useIntl } from 'react-intl'

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

  //FIXME: Something is wrong with the scammer details text area. Check again with new form
  const scammer = {
    scammerDetails: '',
    files: ['test', 'testagain'],
    fileDescriptions: ['testDesc', 'test-a-g-ain'],
    ...data.formData.scammerDetails,
  }

  console.log()

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.suspectTitle" />
        </H2>
        <Link to="/scammerdetails" ml={4}>
          <Trans id="button.edit" />
        </Link>
      </Flex>
      {scammer.scammerDetails !== '' ||
      scammer.files.length > 0 ||
      scammer.fileDescriptions.length > 0 ? (
        <Stack as="dl" spacing={4} shouldWrapChildren>
          <DescriptionListItem
            descriptionTitle="scammerDetail.summary"
            description={scammer.scammerDetails}
          />
          {scammer.files ? (
            <Stack as="dl" spacing={4} shouldWrapChildren>
              {scammer.files.map((file, index) => (
                <Flex key={index} pb={4}>
                  <Text pr={4}>{index + 1}.</Text>
                  <Box>
                    <Text as="dt" fontWeight="bold">
                      {file}
                    </Text>
                    <Text as="dd">{scammer.fileDescriptions[index]}</Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          ) : null}
        </Stack>
      ) : (
        <Text>
          <Trans id="confirmationPage.suspectIntro" />
        </Text>
      )}
    </Stack>
  )
}

const ImpactSummary = () => {
  const { i18n } = useLingui()
  const intl = useIntl()

  const [data] = useStateValue()
  const impact = {
    howWereYouAffected: [],
    damage: '',
    ...data.formData.impact,
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.ImpactTitle" />
        </H2>
        <Link to="/impact" ml={4}>
          <Trans id="button.edit" />
        </Link>
      </Flex>
      {impact.howWereYouAffected.length > 0 || impact.damage !== '' ? (
        <Stack as="dl" spacing={4} shouldWrapChildren>
          <DescriptionListItem
            descriptionTitle="impactPage.summary"
            description={impact.damage}
          />
          <DescriptionListItem
            descriptionTitle="impactPage.detail"
            description={intl.formatList(
              impact.howWereYouAffected.map(i => i18n._(i)),
              { type: 'conjunction' },
            )}
          />
        </Stack>
      ) : (
        <Text>
          <Trans id="confirmationPage.impactIntro" />
        </Text>
      )}
    </Stack>
  )
}

const ContactSummary = () => {
  const [data] = useStateValue()
  const contactInfo = {
    fullName: '',
    email: '',
    postalCode: '',
    ...data.formData.contactInfo,
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.contactTitle" />
        </H2>
        <Link to="/contactinfo" ml={4}>
          <Trans id="button.edit" />
        </Link>
      </Flex>
      {contactInfo.fullName + contactInfo.email + contactInfo.postalCode ? (
        <Stack as="dl" spacing={4} shouldWrapChildren>
          <DescriptionListItem
            descriptionTitle="contactinfoPage.fullName"
            description={contactInfo.fullName}
          />
          <DescriptionListItem
            descriptionTitle="contactinfoPage.emailAddress"
            description={contactInfo.email}
          />
          <DescriptionListItem
            descriptionTitle="contactinfoPage.postCode"
            description={contactInfo.postalCode}
          />
        </Stack>
      ) : (
        <Text>
          <Trans id="confirmationPage.contactIntro" />
        </Text>
      )}
    </Stack>
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
        <Code>{JSON.stringify(data)}</Code>
        <TimeFrameSummary />
        <WhatHappenedSummary />
        <ScammerSummary />
        <ImpactSummary />
        <ContactSummary />
      </Stack>
    </React.Fragment>
  )
}
