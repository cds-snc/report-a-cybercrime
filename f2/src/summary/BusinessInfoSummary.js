/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Code, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'

export const BusinessInfoSummary = props => {
  const [data] = useStateValue()

  const businessInfo = {
    ...data.formData.businessInfo,
    ...testdata.formData.businessInfo, //Remove after done testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.businessInfoTitle" />
        </H2>
        <EditButton path="/business" label="Edit affected business assets" />
      </Flex>

      {businessInfo.business.length > 0 ? (
        <Code>{JSON.stringify(businessInfo)}</Code>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Empty
        </Alert>
      )}
    </Stack>
  )
}
