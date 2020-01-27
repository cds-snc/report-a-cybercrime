/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Box } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { Text } from '../components/text'

export const EvidenceInfoSummary = props => {
  const [data] = useStateValue()

  const evidence = {
    files: [],
    fileDescriptions: [],
    ...testdata.formData.evidence,
    ...data.formData.evidence,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.evidence.title.edit" />
        </div>
      ) : null}

      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
            <Trans id="confirmationPage.evidence.title" />
          </H2>
          <EditButton
            path="/evidence"
            label="confirmationPage.evidence.title.edit"
          />
        </Flex>
        {evidence.files.length > 0 || evidence.fileDescriptions.length > 0 ? (
          <Stack as="dl" spacing={4} shouldWrapChildren>
            {evidence.files ? (
              <Stack as="dl" spacing={4} shouldWrapChildren>
                {evidence.files.map((file, index) => (
                  <Flex key={index} pb={4}>
                    <Text pr={4}>{index + 1}.</Text>
                    <Box>
                      <Text as="dt" fontWeight="bold">
                        {file}
                      </Text>
                      <Text as="dd">{evidence.fileDescriptions[index]}</Text>
                    </Box>
                  </Flex>
                ))}
              </Stack>
            ) : null}
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.evidence.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
