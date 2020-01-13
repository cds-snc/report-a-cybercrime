/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Code } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { Text } from '../components/text'

export const SuspectCluesSummary = props => {
  const [data] = useStateValue()

  const suspectClues = {
    suspectClues: '',
    ...data.formData.suspectClues,
    ...testdata.formData.suspectClues, //remove after testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.suspectCluesTitle" />
        </H2>
        <EditButton label={'Edit who could be involved'} path="/suspectclues" />
      </Flex>

      {suspectClues.length > 0 ? (
        <Code>{JSON.stringify(suspectClues)}</Code>
      ) : (
        <Text>
          <Trans id="confirmationPage.suspectCluesIntro" />
        </Text>
      )}
    </Stack>
  )
}
