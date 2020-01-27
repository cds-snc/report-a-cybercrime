/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const ContactInfoSummary = ({ onSubmit }) => {
  const [data] = useStateValue()
  const contactInfo = {
    ...testdata.formData.contactInfo, //Remove after done testing
    ...data.formData.contactInfo,
  }

  const hasInfoToDisplay =
    contactInfo.email.length > 0 || contactInfo.phone.length > 0

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.contactInfo.email" />
          <Trans id="confirmationPage.contactInfo.phone" />
          <Trans id="confirmationPage.contactTitle.edit" />
        </div>
      ) : null}

      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
            <Trans id="confirmationPage.contactTitle" />
          </H2>
          <EditButton
            path="/contactinfo"
            label="confirmationPage.contactTitle.edit"
          />
        </Flex>
        {hasInfoToDisplay ? (
          <Stack as="dl" spacing={4}>
            <DescriptionListItem
              descriptionTitle="confirmationPage.contactInfo.email"
              description={contactInfo.email}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.contactInfo.phone"
              description={contactInfo.phone}
            />
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.contactIntro" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
