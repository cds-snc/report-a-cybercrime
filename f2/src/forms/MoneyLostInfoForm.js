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
import { TextArea } from '../components/text-area'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { CheckboxAdapter } from '../components/checkbox'
import { Field } from '../components/Field'
import { FormArrayControl } from '../components/FormArrayControl'
import { Well } from '../components/Messages'
import { ErrorSummary } from '../components/ErrorSummary'
//change to validate funtion for test requirment
export const validate = (values) => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  // if it has a value AND this value is a number over 31, or value is 0
  if (
    values.transactionDay &&
    (isNaN(values.transactionDay) ||
      values.transactionDay > 31 ||
      values.transactionDay === '0' ||
      values.transactionDay === '00')
  ) {
    errors.transactionDate = 'transactionDate.startDate.warning'
    errors.transactionDay = true
  }
  // if it has a value AND this value is a number over 12
  if (
    values.transactionMonth &&
    (isNaN(values.transactionMonth) ||
      values.transactionMonth > 12 ||
      values.transactionMonth === '0' ||
      values.transactionMonth === '00')
  ) {
    errors.transactionDate = 'transactionDate.startMonth.warning'
    errors.transactionMonth = true
  }
  // if it has a value AND year is a number containing 4 digits
  if (
    values.transactionYear &&
    (isNaN(values.transactionYear) ||
      values.transactionYear.length !== 4 ||
      values.transactionYear === '0000')
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
  // validate if the date in different month  match the calendar
  var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (values.transactionMonth === 1 || values.transactionMonth > 2) {
    if (values.transactionDay > ListofDays[values.transactionMonth - 1]) {
      errors.transactionDate = 'transactionDate.startDate.warning'
      errors.transactionDay = true
    }
  }
  //validate if the dayin Feb can't be >29 in leap year, the day in Feb can't be >28 in non-leap year
  if (values.transactionMonth === '2' || values.transactionMonth === '02') {
    var lyear = false
    if (
      (!(values.transactionYear % 4) && values.transactionYear % 100) ||
      !(values.transactionYear % 400)
    ) {
      lyear = true
    }
    if (lyear === false && values.transactionDay >= 29) {
      errors.transactionDate = 'transactionDate.startDate.warning'
      errors.transactionDay = true
    }
    if (lyear === true && values.transactionDay > 29) {
      errors.transactionDate = 'transactionDate.startDate.warning'
      errors.transactionDay = true
    }
  }
  return errors
}

export const MoneyLostInfoForm = (props) => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const moneyLost = {
    methodPayment: [],
    demandedMoney: '',
    moneyTaken: '',
    transactionDay: '',
    transactionMonth: '',
    transactionYear: '',
    tellUsMore: '',
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
        onSubmit={props.onSubmit}
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

            <Field
              name="tellUsMore"
              label={<Trans id="moneyLostPage.tellUsMore" />}
              FormHelperText={<Trans id="moneyLostPage.tellUsMoreExample" />}
              component={TextArea}
            />

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
