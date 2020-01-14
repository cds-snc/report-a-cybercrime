/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Code, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'

export const MoneyLostInfoSummary = props => {
  const [data] = useStateValue()

  const moneyLost = {
    ...data.formData.moneyLost,
    ...testdata.formData.moneyLost, //Remove after done testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.moneyLostTitle" />
        </H2>
        <EditButton path="/moneylost" label="Edit affected money or finances" />
      </Flex>

      {moneyLost.length > 0 ? (
        <Code>{JSON.stringify(moneyLost)}</Code>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Empty
        </Alert>
      )}
    </Stack>
  )
}
