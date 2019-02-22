import React from 'react'
// import { navigate, Link } from '@reach/router'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { CheckboxAdapter } from './components/checkbox'
import { Link } from './components/link'
import { Text } from './components/text'
import { Breadcrumb } from './components/breadcrumb'
import { ApolloConsumer } from 'react-apollo'
// import Breadcrumb from '@govuk-react/breadcrumb'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
const LabelFormat = styled('h4')`
  margin-top: 20pt;
`
const SubmitButton = styled('button')`
  margin-top: 20pt;
`
const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
  font-size: 1.25rem;
  display: block;
`
const TextArea = styled('textarea')`
  width: 500pt;
  height: 200pt;
  font-size: 19pt;
`
const ErrorMessage = styled('div')`
  margin-top: 10pt;
  display: inline-block;
  font-size: 19pt;
  color: red;
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
                  <Trans>What was affected? Choose all that apply.</Trans>
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
            <LabelFormat>
              <label>
                <Trans>Other</Trans>
              </label>
            </LabelFormat>
            <div>
              <Field name="whatWasInvolvedOther">
                {({ input, meta }) => (
                  <div>
                    <TextArea {...input} placeholder="" />
                    <ErrorMessage>
                      {meta.error && meta.touched && <Trans id={meta.error} />}
                    </ErrorMessage>
                  </div>
                )}
              </Field>
            </div>

            <SubmitButton type="submit">
              <Trans>Next</Trans>
            </SubmitButton>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

const options = {
  website: <Trans>Website</Trans>,
  email: <Trans>Email address</Trans>,
  phone: <Trans>Phone</Trans>,
  'text message': <Trans>Text messages</Trans>,
  'social media': <Trans>Social media accounts</Trans>,
  'bank account': <Trans>Bank accounts</Trans>,
  "I'm not sure": <Trans>I’m not sure</Trans>,
}

export const Screen2 = () => (
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
  </CenterContent>
)
