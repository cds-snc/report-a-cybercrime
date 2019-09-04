/** @jsx jsx */
import React from 'react'

import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { I18n, i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { RadioButton } from '../../components/radio-button'
import { TextArea } from '../../components/text-area'
import { TextInput } from '../../components/TextInput'
import { Text } from '../../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getLostMoney } from '../../utils/queriesAndMutations'
import { ButtonsContainer } from '../../components/buttons-container'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const RadioButtonAdapter = finalFormAdapter(RadioButton)
const TextAreaAdapter = finalFormAdapter(TextArea)
const TextInputAdapter = finalFormAdapter(TextInput)

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
        initialValues={getLostMoney(client)}
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="lostAmount">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Amount</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="lostAmount"
                id="lostAmount"
                component={TextInputAdapter}
                height="25px"
                width="200px"
              />
            </div>

            <Fieldset>
              <legend>
                <Text marginTop={[4, null, 5]}>
                  <Trans>
                    <strong>Currency</strong>
                  </Trans>
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
                    component={TextInputAdapter}
                    height="25px"
                    width="200px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <Fieldset>
              <legend>
                <Text marginTop={[4, null, 5]}>
                  <Trans>
                    <strong>How did you pay the scammer?</strong>
                  </Trans>
                </Text>
              </legend>
              <div>
                <I18n>
                  {({ i18n }) =>
                    methodsOfPayment.map(key => {
                      return (
                        <CheckboxStyle key={key}>
                          <Field
                            name="lostMethodsOfPayment"
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
            </Fieldset>

            {values.lostMethodsOfPayment &&
            values.lostMethodsOfPayment.indexOf('Other method') > -1 ? (
              <React.Fragment>
                <label htmlFor="lostOtherMethodOfPayment">
                  <Text>
                    <Trans>Other method of payment</Trans>
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

            <ButtonsContainer
              buttonLink={false}
              cancel={true}
              cancelRoute="/p1/"
              nextPage="Scammer details"
            />
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

MoneyLostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
