/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Code, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'

export const DevicesSummary = props => {
  const [data] = useStateValue()

  const devices = {
    ...data.formData.devices,
    ...testdata.formData.devices, //Remove after done testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.devicesTitle" />
        </H2>
        <EditButton path="/devices" label="Edit affected devices or accounts" />
      </Flex>

      {devices.length > 0 ? (
        <Code>{JSON.stringify(devices)}</Code>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Empty or logic does not work
        </Alert>
      )}
    </Stack>
  )
}
