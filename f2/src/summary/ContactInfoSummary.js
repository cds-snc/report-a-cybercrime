/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2, H3 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const ContactInfoSummary = (props) => {
  const [data] = useStateValue()
  const contactInfo = {
    ...testdata.formData.contactInfo, //Remove after done testing
    ...data.formData.contactInfo,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.contactInfo.fullName" />
          <Trans id="confirmationPage.contactInfo.email" />
          <Trans id="confirmationPage.contactInfo.phone" />
          <Trans id="confirmationPage.contactInfo.extension" />
          <Trans id="confirmationPage.contactTitle.edit" />
        </div>
      ) : null}

      <Stack
        spacing={4}
        borderBottom="2px"
        borderColor="gray.300"
        pb={4}
        {...props}
      >
        <Flex align="baseline">
          <H2 fontWeight="normal">
            <Trans id="confirmationPage.contactTitle" />
          </H2>
          {contactInfo.edited && (
            <H3 fontWeight="normal" paddingLeft="1rem">
              <Trans id="confirmationPage.editedTag" />
            </H3>
          )}
          <EditButton
            label="confirmationPage.contactTitle.edit"
            path={{ pathname: '/contactinfo', state: { edit: true } }}
            edited={contactInfo.edited}
          />
        </Flex>
        {containsData(contactInfo) ? (
          <Stack as="dl" spacing={4}>
            <DescriptionListItem
              descriptionTitle="confirmationPage.contactInfo.fullName"
              description={contactInfo.fullName}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.contactInfo.email"
              description={contactInfo.email}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.contactInfo.phone"
              description={contactInfo.phone}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.contactInfo.extension"
              description={contactInfo.extension}
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
