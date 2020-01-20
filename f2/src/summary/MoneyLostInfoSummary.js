/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'

export const MoneyLostInfoSummary = props => {
  const [data] = useStateValue()

  const moneyLost = {
    ...testdata.formData.moneyLost, //Remove after done testing
    ...data.formData.moneyLost,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.moneyLost.demandedMoney" />
          <Trans id="confirmationPage.moneyLost.moneyTaken" />
          <Trans id="confirmationPage.moneyLost.methodPayment" />
          <Trans id="confirmationPage.moneyLost.transactionDate" />
          <Trans id="confirmationPage.moneyLost.tellUsMore" />
        </div>
      ) : null}
      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
            <Trans id="confirmationPage.moneyLostTitle" />
          </H2>
          <EditButton
            path="/moneylost"
            label="Edit affected money or finances"
          />
        </Flex>

        <Stack as="dl" spacing={4}>
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
      </Stack>
    </React.Fragment>
  )
}
