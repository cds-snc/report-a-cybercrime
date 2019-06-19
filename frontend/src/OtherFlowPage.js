/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
// import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { Checkbox } from './components/checkbox'
import { RadioButton } from './components/radio-button'
import { TextArea } from './components/text-area'
import { Button } from './components/button'
import { Text } from './components/text'
import { ApolloConsumer } from 'react-apollo'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'
import { finalFormAdapter } from './utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const RadioButtonAdapter = finalFormAdapter(RadioButton)
const TextAreaAdapter = finalFormAdapter(TextArea)

const methodsOfPayment = ['credit card', 'cash', 'gift card', 'other']
const howContacted = ['phone', 'email', 'website link', 'other']

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
const LabelFormat = styled('h4')`
  margin-top: 20pt;
`
const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
  font-size: 1.25rem;
  display: block;
`

const submitAndNavigate = (client, data) => {
  window.alert(JSON.stringify(data))
  // client.writeData({ data })
  // navigate('/form3')
}

const validate = values => {
  let errors = {}
  if (!values.howWereYouContacted) {
    errors.howWereYouContacted = i18nMark('Required')
  }
  if (!values.whenWereYouContacted) {
    errors.whenWereYouContacted = i18nMark('Required')
  }
  // return {errors}
  return {}
}

const MyForm = () => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        initialValues={{
          wasMoneyTaken: undefined,
          howWereYouContacted: [],
          methodsOfPayment: [],
        }}
        render={({
          handleSubmit,
          // reset,
          // submitting,
          // pristine,
          values,
          // invalid,
        }) => (
          <form onSubmit={handleSubmit}>
            <LabelFormat>
              <Text>
                <Trans>How were you contacted?</Trans>
              </Text>
            </LabelFormat>
            <div>
              {howContacted.map(key => {
                return (
                  <CheckboxStyle key={key}>
                    <Field
                      name="howWereYouContacted"
                      component={CheckboxAdapter}
                      type="checkbox"
                      value={key}
                      label={key}
                    />
                  </CheckboxStyle>
                )
              })}
            </div>

            {values.howWereYouContacted.indexOf('other') > -1 ? (
              <React.Fragment>
                <LabelFormat>
                  <Text>
                    <Trans>Other method of contact</Trans>
                  </Text>
                </LabelFormat>
                <div>
                  <Field
                    name="otherMethodOfContact"
                    component={TextAreaAdapter}
                    height="25px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <LabelFormat>
              <Text>
                <Trans>When were you contacted?</Trans>
              </Text>
            </LabelFormat>
            <div>
              <Field
                name="whenWereYouContacted"
                component={TextAreaAdapter}
                height="25px"
              />
            </div>

            <LabelFormat>
              <Text>
                <Trans>Was money taken?</Trans>
              </Text>
            </LabelFormat>
            <div>
              {['yes', 'no'].map(key => {
                return (
                  <CheckboxStyle key={key}>
                    <Field
                      name="wasMoneyTaken"
                      component={RadioButtonAdapter}
                      type="radio"
                      value={key}
                      label={key}
                    />
                  </CheckboxStyle>
                )
              })}
            </div>

            {values.wasMoneyTaken === 'yes' ? (
              <React.Fragment>
                <LabelFormat>
                  <Text>
                    <Trans>Currency</Trans>
                  </Text>
                </LabelFormat>
                <div>
                  <Field
                    name="currency"
                    component={TextAreaAdapter}
                    height="25px"
                  />
                </div>

                <LabelFormat>
                  <Text>
                    <Trans>Amount</Trans>
                  </Text>
                </LabelFormat>
                <div>
                  <Field
                    name="amount"
                    component={TextAreaAdapter}
                    height="25px"
                  />
                </div>

                <LabelFormat>
                  <Text>
                    <Trans>Method of payment</Trans>
                  </Text>
                </LabelFormat>
                <div>
                  {methodsOfPayment.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="methodsOfPayment"
                          component={CheckboxAdapter}
                          type="checkbox"
                          value={key}
                          label={key}
                        />
                      </CheckboxStyle>
                    )
                  })}
                </div>

                {values.methodsOfPayment.indexOf('other') > -1 ? (
                  <React.Fragment>
                    <LabelFormat>
                      <Text>
                        <Trans>Other method of payment</Trans>
                      </Text>
                    </LabelFormat>
                    <div>
                      <Field
                        name="otherMethodOfPayment"
                        component={TextAreaAdapter}
                        height="25px"
                      />
                    </div>
                  </React.Fragment>
                ) : (
                  ''
                )}
              </React.Fragment>
            ) : (
              ''
            )}

            <Text>
              {JSON.stringify(validate(values)) === JSON.stringify({}) ? (
                ''
              ) : (
                <Text>
                  <Trans>Please fill out all fields</Trans>
                </Text>
              )}
            </Text>
            <Button type="submit">
              <Trans>Next</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

export const OtherFlowPage = () => (
  <CenterContent>
    <H1>
      <Trans>Other flow</Trans>
    </H1>
    <TrackPageViews />
    {MyForm()}
  </CenterContent>
)
