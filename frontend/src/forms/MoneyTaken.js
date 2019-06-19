/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../components/checkbox'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const methodsOfPayment = ['credit card', 'cash', 'gift card', 'other']

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const validate = () => {
  return {}
}

export const MoneyTaken = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({
          handleSubmit,
          // reset,
          // submitting,
          // pristine,
          values,
          // invalid,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount">
              <Text>
                <Trans>Amount</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="amount"
                id="amount"
                component={TextAreaAdapter}
                height="25px"
              />
            </div>

            <label htmlFor="currency">
              <Text>
                <Trans>Currency</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="currency"
                id="currency"
                component={TextAreaAdapter}
                height="25px"
              />
            </div>

            <label htmlFor="methodsOfPayment">
              <Text>
                <Trans>Method of payment</Trans>
              </Text>
            </label>
            <div>
              {methodsOfPayment.map(key => {
                return (
                  <CheckboxStyle key={key}>
                    <Field
                      name="methodsOfPayment"
                      id="methodsOfPayment"
                      component={CheckboxAdapter}
                      type="checkbox"
                      value={key}
                      label={key}
                    />
                  </CheckboxStyle>
                )
              })}
            </div>

            {values.methodsOfPayment &&
            values.methodsOfPayment.indexOf('other') > -1 ? (
              <React.Fragment>
                <label htmlFor="otherMethodOfPayment">
                  <Text>
                    <Trans>Other method of payment</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="otherMethodOfPayment"
                    id="otherMethodOfPayment"
                    component={TextAreaAdapter}
                    height="25px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <Button type="submit">
              <Trans>Next</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

MoneyTaken.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
