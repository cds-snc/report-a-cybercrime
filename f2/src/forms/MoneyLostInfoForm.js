/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { FormControl, Stack, Box, Alert, AlertIcon } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { TextArea } from '../components/text-area'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { P } from '../components/paragraph'
import { CheckboxAdapter } from '../components/checkbox'
import { Field } from '../components/Field'
import { FormArrayControl } from '../components/FormArrayControl'

export const MoneyLostInfoForm = props => {
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
        </div>
      ) : null}
      <Form
        initialValues={moneyLost}
        onSubmit={props.onSubmit}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            spacing={6}
            shouldWrapChildren
          >
            <Field
              name="demandedMoney"
              label={<Trans id="moneyLostPage.demandedMoney" />}
              helperText={<Trans id="moneyLostPage.demandedMoneyExample" />}
              component={TextInput}
            />

            <Field
              name="moneyTaken"
              label={<Trans id="moneyLostPage.moneyTaken" />}
              helperText={<Trans id="moneyLostPage.moneyTakenExample" />}
              component={TextInput}
            />

            <FormArrayControl
              name="methodsOfPayment"
              label={<Trans id="moneyLostPage.methodPayment" />}
              helperText={<Trans id="moneyLostPage.selectMethod" />}
            >
              {methodsOfPayment.map(key => {
                return (
                  <Box key={key}>
                    <CheckboxAdapter name="methodPayment" value={key}>
                      {i18n._(key)}
                    </CheckboxAdapter>
                    {key === 'methodPayment.other' &&
                      values.methodPayment.includes('methodPayment.other') && (
                        <ConditionalForm>
                          <Field name="methodOther" component={TextInput} />
                        </ConditionalForm>
                      )}
                  </Box>
                )
              })}
            </FormArrayControl>

            <Stack>
              <P fontWeight="bold">
                <Trans id="moneyLostPage.transactionDate" />
              </P>
              <P fontSize="md">
                <Trans id="moneyLostPage.transactionDateExample" />
              </P>
            </Stack>

            <Stack flexDirection="row">
              <Field name="transactionDay">
                {props => (
                  <FormControl>
                    <FormLabel htmlFor="transactionDay">
                      <Trans id="moneyLostPage.transactionDay" />
                      <TextInput
                        id="transactionDay"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        w={70}
                        h={36}
                        mt={2}
                        maxLength="2"
                      />
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
              <Field name="transactionMonth">
                {props => (
                  <FormControl>
                    <FormLabel htmlFor="transactionMonth">
                      <Trans id="moneyLostPage.transactionMonth" />
                      <TextInput
                        id="transactionMonth"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        w={70}
                        h={36}
                        mt={2}
                        maxLength="2"
                      />
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
              <Field name="transactionYear">
                {props => (
                  <FormControl>
                    <FormLabel htmlFor="transactionYear">
                      <Trans id="moneyLostPage.transactionYear" />
                      <TextInput
                        id="transactionYear"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        w={110}
                        h={36}
                        mt={2}
                        maxLength="4"
                      />
                    </FormLabel>
                  </FormControl>
                )}
              </Field>
            </Stack>
            <Field name="tellUsMore">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="tellUsMore">
                    <Trans id="moneyLostPage.tellUsMore" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="moneyLostPage.tellUsMoreExample" />
                  </FormHelperText>

                  <TextArea
                    id="tellUsMore"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>
            <Alert status="success" backgroundColor="blue.100">
              <AlertIcon name="info-outline" color="blue.800" />
              <Trans id="moneyLostPage.tip" />
            </Alert>
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
