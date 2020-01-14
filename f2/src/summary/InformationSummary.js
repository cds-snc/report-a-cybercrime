/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Code, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'

export const InformationSummary = props => {
  const [data] = useStateValue()

  const personalInformation = {
    ...data.formData.personalInformation,
    ...testdata.formData.personalInformation, //Remove after done testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.personalInformationTitle" />
        </H2>
        <EditButton
          path="/information"
          label="Edit affected data or personal information"
        />
      </Flex>

      {personalInformation.length > 0 ? (
        <Code>{JSON.stringify(personalInformation)}</Code>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Empty or logic does not work
        </Alert>
      )}
    </Stack>
  )
}
