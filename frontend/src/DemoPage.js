import React from 'react'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { Checkbox } from './components/checkbox'
import { RadioButton } from './components/radio-button'
import { Link } from './components/link'
import { Button } from './components/button'
import { Text } from './components/text'
import { Breadcrumb } from './components/breadcrumb'
import { ApolloConsumer } from 'react-apollo'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'
import { finalFormAdapter } from './utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const RadioButtonAdapter = finalFormAdapter(RadioButton)

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
const MyForm = options => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <LabelFormat>
                <label>
                  <Text>
                    <Trans>What was affected? Choose all that apply.</Trans>
                  </Text>
                </label>
              </LabelFormat>
              <div>
                {Object.keys(options).map(key => {
                  return (
                    <CheckboxStyle key={key}>
                      <Field
                        name="whatWasInvolved"
                        component={CheckboxAdapter}
                        type="checkbox"
                        value={key}
                        label={options[key]}
                      />
                    </CheckboxStyle>
                  )
                })}
              </div>
            </div>

            <Button type="submit">
              <Trans>Next</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

const MyForm2 = options => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <LabelFormat>
                <label>
                  <Text>
                    <Trans>What was affected? Choose all that apply.</Trans>
                  </Text>
                </label>
              </LabelFormat>
              <div>
                {Object.keys(options).map(key => {
                  return (
                    <CheckboxStyle key={key}>
                      <Field
                        name="whatWasInvolved"
                        component={RadioButtonAdapter}
                        type="radio"
                        value={key}
                        label={options[key]}
                      />
                    </CheckboxStyle>
                  )
                })}
              </div>
            </div>

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

export const DemoPage = () => (
  <CenterContent>
    <Breadcrumb>
      <Link to={'/'}>
        <Trans>Landing Page</Trans>
      </Link>
      <Link to={'/form1'}>
        <Trans>What Happened</Trans>
      </Link>
      <Text display="inline-block">
        <Trans>How did that happen?</Trans>
      </Text>
    </Breadcrumb>
    <H1>
      <Trans>How did that happen?</Trans>
    </H1>
    <TrackPageViews />
    {MyForm(options)}
    {MyForm2(options)}
  </CenterContent>
)
