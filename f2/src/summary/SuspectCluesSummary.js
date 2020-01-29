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

export const SuspectCluesSummary = () => {
  const [data] = useStateValue()
  const suspectClues = {
    ...testdata.formData.suspectClues,
    ...data.formData.suspectClues,
  }

  const hasInfoToDisplay =
    suspectClues.suspectClues1.length > 0 ||
    suspectClues.suspectClues2.length > 0 ||
    suspectClues.suspectClues3.length > 0

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.suspectClues.suspectClues1" />
          <Trans id="confirmationPage.suspectClues.suspectClues2" />
          <Trans id="confirmationPage.suspectClues.suspectClues3" />
          <Trans id="confirmationPage.suspectClues.title.edit" />
        </div>
      ) : null}

      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
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
              descriptionTitle="confirmationPage.suspectClues.suspectClues1"
              description={suspectClues.suspectClues1}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.suspectClues.suspectClues2"
              description={suspectClues.suspectClues2}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.suspectClues.suspectClues3"
              description={suspectClues.suspectClues3}
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
