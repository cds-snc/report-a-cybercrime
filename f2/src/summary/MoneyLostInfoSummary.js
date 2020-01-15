/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex, Code, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { Text } from '../components/text'
import { DescriptionListItem } from '../components/DescriptionListItem'

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

      {moneyLost.demandedMoney + moneyLost.moneyTaken + moneyLost.methodPayment + moneyLost.transactionDate + moneyLost.tellUsMore ? (
        <Stack as="dl" spacing={4} shouldWrapChildren>
          <DescriptionListItem
            descriptionTitle="confirmationPage.moneyLost.demandedMoney"
            description={moneyLost.demandedMoney}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.moneyLost.moneyTaken"
            description={moneyLost.moneyTaken}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.moneyLost.methodPayment"
            description={moneyLost.methodPayment}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.moneyLost.transactionDate"
            description={moneyLost.transactionDate}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.moneyLost.tellUsMore"
            description={moneyLost.tellUsMore}
          />
        </Stack>
      ) : (
          <Text>
            <Trans id="confirmationPage.moneyLostIntro" />
          </Text>
        )}
    </Stack>
  )
}
