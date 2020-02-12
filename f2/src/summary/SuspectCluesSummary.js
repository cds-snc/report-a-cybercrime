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

export const SuspectCluesSummary = props => {
  const [data] = useStateValue()
  const suspectClues = {
    ...testdata.formData.suspectClues,
    ...data.formData.suspectClues,
  }

  const hasInfoToDisplay =
    suspectClues.suspectName.length > 0 ||
    suspectClues.suspectAddress.length > 0 ||
    suspectClues.otherDetails.length > 0

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.suspectClues.suspectName" />
          <Trans id="confirmationPage.suspectClues.suspectAddress" />
          <Trans id="confirmationPage.suspectClues.otherDetails" />
          <Trans id="confirmationPage.suspectClues.title.edit" />
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
            <Trans id="confirmationPage.suspectClues.title" />
          </H2>
          <EditButton
            path="/suspectclues"
            label="confirmationPage.suspectClues.title.edit"
          />
        </Flex>
        {hasInfoToDisplay ? (
          <Stack as="dl" spacing={4}>
            <DescriptionListItem
              descriptionTitle="confirmationPage.suspectClues.suspectName"
              description={suspectClues.suspectName}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.suspectClues.suspectAddress"
              description={suspectClues.suspectAddress}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.suspectClues.otherDetails"
              description={suspectClues.otherDetails}
            />
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.suspectClues.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
