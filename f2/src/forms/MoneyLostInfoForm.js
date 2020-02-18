/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { FormControl, Stack, Box, Alert, AlertIcon } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { TextArea } from '../components/text-area'
import { useStateValue } from '../utils/state'
import { Checkbox } from '../components/checkbox'
import { ConditionalForm } from '../components/container'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const CheckboxArrayControl = ({ name, value, defaultIsChecked, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
    defaultIsChecked,
  })

  return (
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
}

export const MoneyLostInfoForm = props => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const moneyLost = {
    methodPayment: [],
    demandedMoney: '',
    moneyTaken: '',
    transactionDate: '',
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
            <Field name="demandedMoney">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="demandedMoney">
                    <Trans id="moneyLostPage.demandedMoney" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="moneyLostPage.demandedMoneyExample" />
                  </FormHelperText>
                  <TextInput
                    id="demandedMoney"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>
            <Field name="moneyTaken">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="moneyTaken">
                    <Trans id="moneyLostPage.moneyTaken" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="moneyLostPage.moneyTakenExample" />
                  </FormHelperText>
                  <TextInput
                    id="moneyTaken"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>

            <Control as="fieldset" name="methodsOfPayment">
              <FormLabel as="legend" htmlFor="methodsOfPayment" mb={2}>
                <Trans id="moneyLostPage.methodPayment" />
              </FormLabel>
              <FormHelperText>
                <Trans id="moneyLostPage.selectMethod" />
              </FormHelperText>
              <Stack spacing={4} shouldWrapChildren>
                {methodsOfPayment.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxArrayControl name="methodPayment" value={key}>
                        {i18n._(key)}
                      </CheckboxArrayControl>
                      {key === 'methodPayment.other' &&
                        values.methodPayment.includes(
                          'methodPayment.other',
                        ) && (
                          <ConditionalForm>
                            <Field name="methodOther">
                              {props => (
                                <FormControl>
                                  <FormLabel htmlFor={key}></FormLabel>
                                  <TextInput
                                    id="methodOther"
                                    name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}
                                  />
                                </FormControl>
                              )}
                            </Field>
                          </ConditionalForm>
                        )}
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <Field name="transactionDate">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="transactionDate">
                    <Trans id="moneyLostPage.transactionDate" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="moneyLostPage.transactionDateExample" />
                  </FormHelperText>
                  <TextInput
                    id="transactionDate"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>
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
