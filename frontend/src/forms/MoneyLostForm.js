/** @jsx jsx */
import React from 'react'

import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { I18n, i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Container } from '../components/container'
import { Checkbox } from '../components/checkbox'
import { RadioButton } from '../components/radio-button'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const RadioButtonAdapter = finalFormAdapter(RadioButton)
const TextAreaAdapter = finalFormAdapter(TextArea)

const methodsOfPayment = [
  i18nMark('Cash'),
  i18nMark('Credit card'),
  i18nMark('E-transfer'),
  i18nMark('Gift card'),
  i18nMark('Other method'),
]

const currencies = [
  i18nMark('Canadian dollar'),
  i18nMark('U.S. dollar'),
  i18nMark('Euro'),
  i18nMark('Other currency'),
]

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const Fieldset = styled('fieldset')`
  margin: 0;
  padding: 0;
  border: none;
`

const validate = () => {
  return {}
}

export const MoneyLostForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="lostAmount">
              <Text marginTop={[4, null, 5]}>
                <Trans>Amount</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="lostAmount"
                id="lostAmount"
                component={TextAreaAdapter}
                height="25px"
                width="200px"
              />
            </div>

            <Fieldset>
              <legend>
                <Text marginTop={[4, null, 5]}>
                  <Trans>Currency</Trans>
                </Text>
              </legend>
              <I18n>
                {({ i18n }) =>
                  currencies.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="lostCurrency"
                          component={RadioButtonAdapter}
                          type="radio"
                          value={key}
                          label={i18n._(key)}
                        />
                      </CheckboxStyle>
                    )
                  })
                }
              </I18n>
            </Fieldset>

            {values.lostCurrency &&
            values.lostCurrency.indexOf('Other currency') > -1 ? (
              <React.Fragment>
                <label htmlFor="lostOtherCurrency">
                  <Text>
                    <Trans>Other currency</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="lostOtherCurrency"
                    id="lostOtherCurrency"
                    component={TextAreaAdapter}
                    height="25px"
                    width="200px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <label htmlFor="lostMethodsOfPayment">
              <Text marginTop={[4, null, 5]}>
                <Trans>What method of payment was used?</Trans>
              </Text>
              <br></br>
            </label>
            <div>
              <I18n>
                {({ i18n }) =>
                  methodsOfPayment.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="lostMethodsOfPayment"
                          id="lostMethodsOfPayment"
                          component={CheckboxAdapter}
                          type="checkbox"
                          value={key}
                          label={i18n._(key)}
                        />
                      </CheckboxStyle>
                    )
                  })
                }
              </I18n>
            </div>

            {values.lostMethodsOfPayment &&
            values.lostMethodsOfPayment.indexOf('Other method') > -1 ? (
              <React.Fragment>
                <label htmlFor="lostOtherMethodOfPayment">
                  <Text>
                    <Trans>Other method</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="lostOtherMethodOfPayment"
                    id="lostOtherMethodOfPayment"
                    component={TextAreaAdapter}
                    height="25px"
                    width="200px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <Container
              width="305px"
              marginTop={[3, null, 4]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Button type="submit">
                <Trans>Continue</Trans>
              </Button>
            </Container>

            <Container
              width="300px"
              marginTop={[2, null, 3]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Link type="button" color="black" to="/" textAlign="center">
                <Trans>Cancel report</Trans>
              </Link>
            </Container>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

MoneyLostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
