/** @jsx jsx */
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
    ...data.formData.evidence,
    ...testdata.formData.evidence, //Remove after done testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.evidenceTitle" />
        </H2>
        <EditButton path="/evidence" label="Edit Evidence" />
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
          <Trans id="confirmationPage.suspectIntro" />
        </Text>
      )}
    </Stack>
  )
}
