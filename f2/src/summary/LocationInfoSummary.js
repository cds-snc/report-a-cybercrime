/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Code, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'

export const LocationInfoSummary = props => {
  const [data] = useStateValue()

  const locationInfo = {
    ...data.formData.locationInfo,
    ...testdata.formData.locationInfo, //Remove after done testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.LocationInfoTitle" />
        </H2>
        <EditButton path="/location" label="Edit affected business assets" />
      </Flex>

      {locationInfo.length > 0 ? (
        <Code>{JSON.stringify(locationInfo)}</Code>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Empty
        </Alert>
      )}
    </Stack>
  )
}
