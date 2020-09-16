import React from 'react'
import { evalDate } from '../utils/validateDate'
import { Trans } from '@lingui/macro'

export const realTimeValidation = (values) => {
  let errors = {}

  let transactionError = {}

  transactionError = evalDate(
    values.transactionDay,
    values.transactionMonth,
    values.transactionYear,
  )

  if (Object.keys(transactionError).length > 0) {
    errors['transactionDay'] = transactionError.day
      ? transactionError.day
      : null
    errors['transactionMonth'] = transactionError.month
      ? transactionError.month
      : null
    errors['transactionYear'] = transactionError.year
      ? transactionError.year
      : null
    errors['transaction'] = true
  }

  return errors
}

export const createErrorSummary = (errors) => {
  const errorSummary = {}

  const transaction =
    errors.transaction ||
    errors.transactionDay ||
    errors.transactionMonth ||
    errors.transactionYear

  if (transaction) {
    errorSummary['transaction'] = {
      label: <Trans id="moneyLostPage.transactionDateErrorSummaryLabel" />,
      message: <Trans id="moneyLostPage.transactionDateErrorSummaryMessage" />,
    }
  }

  return errorSummary
}

export const onSubmitValidation = (values) => {
  const errors = {}
  const fields = {}

  if (!values.transactionDay) {
    fields['transactionDay'] = true
  }

  if (!values.ransactionMonth) {
    fields['transactionMonth'] = true
  }

  if (!values.ransactionYear) {
    fields['transactionYear'] = true
  }

  if (Object.keys(fields).length > 0) {
    fields['transaction'] = true
    errors['fields'] = fields
  }

  return errors
}

export const MoneyLostInfoFormSchema = () => {}
