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
import { areFieldsValid } from '../utils/areFieldsValid'
import { formDefaults } from './defaultValues'

const validate = (values) => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  // if it has a value AND this value is a number below 31
  if (
    values.transactionDay &&
    (isNaN(values.transactionDay) || values.transactionDay > 31)
  ) {
    errors.transactionDate = 'transactionDate.startDate.warning'
    errors.transactionDay = true
  }
  // if it has a value AND this value is a number below 12
  if (
    values.transactionMonth &&
    (isNaN(values.transactionMonth) || values.transactionMonth > 12)
  ) {
    errors.transactionDate = 'transactionDate.startMonth.warning'
    errors.transactionMonth = true
  }
  // if it has a value AND year is a number containing 4 digits
  if (
    values.transactionYear &&
    (isNaN(values.transactionYear) || values.transactionYear.length !== 4)
  ) {
    errors.transactionDate = 'transactionDate.startYear.warning'
    errors.transactionYear = true
  }

  // if date is in the future and date is valid
  // values.transactionMonth - 1 : UTC Date Months are values from 0 to 11
  if (
    Date.UTC(
      values.transactionYear,
      values.transactionMonth - 1,
      values.transactionDay,
    ) > Date.now()
  ) {
    errors.transactionDate = 'transactionDate.errorMessage'
    errors.transactionDay = true
    errors.transactionMonth = true
    errors.transactionYear = true
  }

  return errors
}

export const MoneyLostInfoForm = (props) => {
  const localOnSubmit = (data) => {
    if (areFieldsValid(data, formDefaults.moneyLost)) props.onSubmit(data)
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
    'methodPayment.cash',
    'methodPayment.other',
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="methodPayment.eTransfer" />
          <Trans id="methodPayment.creditCard" />
          <Trans id="methodPayment.giftCard" />
          <Trans id="methodPayment.cash" />
          <Trans id="methodPayment.other" />
          <Trans id="transactionDate.errorMessage" />
          <Trans id="transactionDate.startDate.warning" />
          <Trans id="transactionDate.startMonth.warning" />
          <Trans id="transactionDate.startYear.warning" />
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
            {submitFailed ? <ErrorSummary /> : null}
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
