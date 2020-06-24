/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Input } from '../components/input'
import { Stack, Box } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { CheckboxAdapter } from '../components/checkbox'
import { Field } from '../components/Field'
import { FormArrayControl } from '../components/FormArrayControl'
import { Well } from '../components/Messages'
import { ErrorSummary } from '../components/ErrorSummary'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'
import { validateDate } from '../utils/validateDate'

const validate = (values) => {
  const errors = {}
  const startDate = validateDate(
    values.transactionYear,
    values.transactionMonth,
    values.transactionDay,
  )
  errors.transactionDate = []
  startDate.map((key) => {
    return errors.transactionDate.push(`transactionDate.error.${key}`)
  })

  return errors
}

export const MoneyLostInfoForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.moneyLost)) props.onSubmit(data)
  }

  const { i18n } = useLingui()
  const [data] = useStateValue()

  const moneyLost = {
    ...formDefaults.moneyLost,
    ...data.formData.moneyLost,
  }

  const methodsOfPayment = [
    'methodPayment.eTransfer',
    'methodPayment.creditCard',
    'methodPayment.giftCard',
    'methodPayment.cryptocurrency',
    'methodPayment.other',
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="methodPayment.eTransfer" />
          <Trans id="methodPayment.creditCard" />
          <Trans id="methodPayment.giftCard" />
          <Trans id="methodPayment.cryptocurrency" />
          <Trans id="methodPayment.other" />

          <Trans id="transactionDate.error.notDay" />
          <Trans id="transactionDate.error.notMonth" />
          <Trans id="transactionDate.error.isFuture" />
          <Trans id="transactionDate.error.notYear" />
          <Trans id="transactionDate.error.yearLength" />
          <Trans id="transactionDate.error.hasNoYear" />
          <Trans id="transactionDate.error.hasNoMonth" />
          <Trans id="transactionDate.error.hasNoDay" />

          <Trans id="moneyLostPage.financialTransactions" />
        </div>
      ) : null}
      <Form
        initialValues={moneyLost}
        onSubmit={localOnSubmit}
        validate={validate}
        render={({ handleSubmit, values, errors, submitFailed }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            spacing={6}
            shouldWrapChildren
          >
            {submitFailed ? (
              <ErrorSummary>
                <Trans id="moneyLostPage.hasValidationErrors" />
              </ErrorSummary>
            ) : null}
            <Field
              name="demandedMoney"
              label={<Trans id="moneyLostPage.demandedMoney" />}
              helperText={<Trans id="moneyLostPage.demandedMoneyExample" />}
              component={Input}
            />

            <Field
              name="moneyTaken"
              label={<Trans id="moneyLostPage.moneyTaken" />}
              helperText={<Trans id="moneyLostPage.moneyTakenExample" />}
              component={Input}
            />

            <FormArrayControl
              name="methodsOfPayment"
              label={<Trans id="moneyLostPage.methodPayment" />}
              helperText={<Trans id="moneyLostPage.selectMethod" />}
            >
              {methodsOfPayment.map((key) => {
                return (
                  <Box key={key}>
                    <CheckboxAdapter name="methodPayment" value={key}>
                      {i18n._(key)}
                    </CheckboxAdapter>
                    {key === 'methodPayment.other' &&
                      values.methodPayment.includes('methodPayment.other') && (
                        <ConditionalForm>
                          <Field name="methodOther" component={Input} />
                        </ConditionalForm>
                      )}
                  </Box>
                )
              })}
            </FormArrayControl>

            <FormArrayControl
              name="transactionDate"
              label={<Trans id="moneyLostPage.transactionDate" />}
              helperText={<Trans id="moneyLostPage.transactionDateExample" />}
              errors={errors}
            >
              <Stack direction="row" spacing="2">
                <Field
                  name="transactionDay"
                  label={<Trans id="moneyLostPage.transactionDay" />}
                  component={Input}
                  group="transactionDate"
                  w={70}
                  maxLength="2"
                />
                <Field
                  name="transactionMonth"
                  label={<Trans id="moneyLostPage.transactionMonth" />}
                  component={Input}
                  group="transactionDate"
                  w={70}
                  maxLength="2"
                />
                <Field
                  name="transactionYear"
                  label={<Trans id="moneyLostPage.transactionYear" />}
                  component={Input}
                  group="transactionDate"
                  w={110}
                  maxLength="4"
                />
              </Stack>
            </FormArrayControl>

            <Well variantColor="blue">
              <Trans id="moneyLostPage.tip" />
            </Well>
            <NextAndCancelButtons
              next={<Trans id="moneyLostPage.nextStepDetail" />}
              button={<Trans id="moneyLostPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

MoneyLostInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
