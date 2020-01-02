/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { getMoneyLost } from '../utils/queriesAndMutations'
import { FormControl, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { TextArea } from '../components/text-area'
import { P } from '../components/paragraph'

class MoneyLostInfoFormWrapped extends Component {
  localOnSubmit = (client, data) => {
    const { onSubmit } = this.props
    onSubmit(client, data)
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Form
            initialValues={getMoneyLost(client)}
            onSubmit={data => this.localOnSubmit(this.props.client, data)}
            render={({ handleSubmit }) => (
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

            <P>
              <Trans id="moneyLostPage.nextStepDetail" />
            </P>

                <NextAndCancelButtons>
                  <Trans id="moneyLostPage.nextButton" />
                </NextAndCancelButtons>
              </Stack>
            )}
          />
        )}
      </ApolloConsumer>
    )
  }
}

MoneyLostInfoFormWrapped.propTypes = {
  client: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export const MoneyLostInfoForm = props => (
  <ApolloConsumer>
    {client => <MoneyLostInfoFormWrapped client={client} {...props} />}
  </ApolloConsumer>
)
