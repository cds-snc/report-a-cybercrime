/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { FormControl, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { TextArea } from '../components/text-area'

export const MoneyLostInfoForm = props => {
  return (
    <Form
      initialValues={{}}
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
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

          <Field name="methodPayment">
            {props => (
              <FormControl>
                <FormLabel htmlFor="methodPayment">
                  <Trans id="moneyLostPage.methodPayment" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="moneyLostPage.methodPaymentExample" />
                </FormHelperText>
                <TextInput
                  id="methodPayment"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>

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

                <TextArea
                  id="tellUsMore"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>

          <NextAndCancelButtons
            next={<Trans id="moneyLostPage.nextStepDetail" />}
            button={<Trans id="moneyLostPage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

MoneyLostInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
