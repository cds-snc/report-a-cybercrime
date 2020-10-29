/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Box } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2, H3 } from '../components/header'
import { Text } from '../components/text'

export const EvidenceInfoSummary = (props) => {
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

      <Stack
        spacing={4}
        borderBottom="2px"
        borderColor="gray.300"
        pb={4}
        {...props}
      >
        <Flex align="baseline">
          <H2 fontWeight="normal">
            <Trans id="confirmationPage.evidence.title" />
          </H2>
          {evidence.edited && (
            <H3 fontWeight="normal" paddingLeft="1rem">
              <Trans id="confirmationPage.editedTag" />
            </H3>
          )}
          <EditButton
            label="confirmationPage.evidence.title.edit"
            path={{ pathname: '/evidence', state: { edit: true } }}
            edited={evidence.edited}
          />
        </Flex>
        {evidence.files && evidence.files.length > 0 ? (
          <Stack as="dl" spacing={4} shouldWrapChildren>
            {evidence.files ? (
              <Stack as="dl" spacing={4} shouldWrapChildren>
                {evidence.files.map((file, index) => (
                  <Flex key={index} pb={4}>
                    <Text pr={4}>{index + 1}.</Text>
                    <Box>
                      <Text as="dt" fontWeight="bold">
                        {file.name}
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
