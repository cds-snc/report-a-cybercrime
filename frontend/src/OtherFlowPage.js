/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { Checkbox } from './components/checkbox'
import { RadioButton } from './components/radio-button'
import { TextArea } from './components/text-area'
import { Input } from './components/input'

import { Button } from './components/button'
import { Text } from './components/text'
import { ApolloConsumer } from 'react-apollo'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'
import { finalFormAdapter } from './utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const RadioButtonAdapter = finalFormAdapter(RadioButton)

const methodsOfPayment = ['Credit card', 'Cash', 'Gift Card', 'Other']

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
  client.writeData({ data })
  navigate('/form3')
}

const validate = values => {
  let errors = {}
  if (
    (!values.whatWasInvolved || !values.whatWasInvolved.length) &&
    !values.whatWasInvolvedOther
  ) {
    errors.whatWasInvolvedOther = i18nMark(
      'Please complete the form to tell us what was affected.',
    )
  }
  return errors
}
const MyForm = () => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        initialValues={{ wasMoneyTaken: undefined, methodsOfPayment: [] }}
        render={({
          handleSubmit,
          reset,
          submitting,
          pristine,
          values,
          invalid,
        }) => (
          <form onSubmit={handleSubmit}>
            <LabelFormat>
              <Text>
                <Trans>How were you contacted?</Trans>
              </Text>
            </LabelFormat>
            <div>
              <Field
                name="howWereYouContacted"
                component={TextArea}
                height="50px"
                placeholder=""
              />
            </div>

            <LabelFormat>
              <Text>
                <Trans>When were you contacted?</Trans>
              </Text>
            </LabelFormat>
            <div>
              <Field
                name="whenWereYouContacted"
                component={TextArea}
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
                  <Field name="currency" component={TextArea} height="25px" />
                </div>

                <LabelFormat>
                  <Text>
                    <Trans>Amount</Trans>
                  </Text>
                </LabelFormat>
                <div>
                  <Field name="amount" component={TextArea} height="25px" />
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

                {values.methodsOfPayment.indexOf('Other') > -1 ? (
                  <React.Fragment>
                    <LabelFormat>
                      <Text>
                        <Trans>Other method of payment</Trans>
                      </Text>
                    </LabelFormat>
                    <div>
                      <Field
                        name="otherMethodOfPayment"
                        component={TextArea}
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

            <Button type="submit">
              <Trans>Next</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

const options = {
  website: <Trans>Website</Trans>,
  "I'm not sure": <Trans>I’m not sure</Trans>,
}

export const OtherFlowPage = () => (
  <CenterContent>
    <H1>
      <Trans>Other flow</Trans>
    </H1>
    <TrackPageViews />
    {MyForm(options)}
  </CenterContent>
)
