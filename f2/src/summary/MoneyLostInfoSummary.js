/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { formatDate } from '../utils/formatDate'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'
import { formatList } from '../utils/formatList'
import { useLingui } from '@lingui/react'

export const MoneyLostInfoSummary = (props) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()
  const methodPaymentSummary = []
  let methodPaymentLine

  const moneyLost = {
    ...testdata.formData.moneyLost, //Remove after done testing
    ...data.formData.moneyLost,
  }

  moneyLost.methodPayment.map((key) =>
    methodPaymentSummary.push(
      key === 'methodPayment.other' ? moneyLost.methodOther : i18n._(key),
    ),
  )
  methodPaymentLine = formatList(methodPaymentSummary, {
    pair: <Trans id="default.pair" />,
    middle: <Trans id="default.middle" />,
    end: <Trans id="default.end" />,
  })

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.moneyLost.demandedMoney" />
          <Trans id="confirmationPage.moneyLost.moneyTaken" />
          <Trans id="confirmationPage.moneyLost.methodPayment" />
          <Trans id="confirmationPage.moneyLost.transactionDate" />
          <Trans id="confirmationPage.moneyLostTitle.edit" />
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
            <Trans id="confirmationPage.moneyLostTitle" />
          </H2>
          <EditButton
            path="/moneylost"
            label="confirmationPage.moneyLostTitle.edit"
          />
        </Flex>

        {containsData(moneyLost) ? (
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
              description={methodPaymentLine}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.moneyLost.transactionDate"
              description={formatDate(
                moneyLost.transactionDay,
                moneyLost.transactionMonth,
                moneyLost.transactionYear,
              )}
            />
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.moneyLost.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
