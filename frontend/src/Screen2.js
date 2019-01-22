import React from 'react'
import { navigate, Link } from '@reach/router'

import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3, H4 } from './utils/headers'
import { ApolloConsumer } from 'react-apollo'
import Breadcrumb from '@govuk-react/breadcrumb'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'

const centercontent = css`
  max-width: 750px;
  margin: auto;
`
const labelFormat = css`
  margin-top: 20pt;
`
const submitButton = css`
  margin-top: 20pt;
`
const checkboxStyle = css`
  margin-bottom: 8pt;
  font-size: 1.25rem;
  display: block;
`
const textArea = css`
  width: 500pt;
  height: 200pt;
  font-size: 19pt;
`
const errorMessage = css`
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
      'Please tell us what things were affected.',
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
              <H3 className={labelFormat}>
                <label>
                  <Trans>What was affected? Choose all that apply.</Trans>
                </label>
              </H3>
              <div>
                {Object.keys(options).map(key => {
                  return (
                    <label key={key} className={checkboxStyle}>
                      <Field
                        name="whatWasInvolved"
                        component="input"
                        type="checkbox"
                        value={key}
                      />{' '}
                      {options[key]}
                    </label>
                  )
                })}
              </div>
            </div>
            <H4 className={labelFormat}>
              <label>
                <Trans>Other</Trans>
              </label>
            </H4>
            <div>
              <Field name="whatWasInvolvedOther">
                {({ input, meta }) => (
                  <div>
                    <textarea {...input} placeholder="" className={textArea} />
                    <div className={errorMessage}>
                      {meta.error && meta.touched && <Trans id={meta.error} />}
                    </div>
                  </div>
                )}
              </Field>
            </div>

            <Button className={submitButton} type="submit">
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
  email: <Trans>Email address</Trans>,
  phone: <Trans>Phone</Trans>,
  'text message': <Trans>Text messages</Trans>,
  'social media': <Trans>Social media accounts</Trans>,
  'bank account': <Trans>Bank accounts</Trans>,
  "I'm not sure": <Trans>I’m not sure</Trans>,
}

export const Screen2 = () => (
  <div className={centercontent}>
    <Breadcrumb>
      <Link to={'/'}>
        <Trans>Landing Page</Trans>
      </Link>
      <TrackPageViews />
      <Link to={'/form1'}>
        <Trans>What happened?</Trans>
      </Link>
    </Breadcrumb>
    <H1>
      <Trans>How did that happen?</Trans>
    </H1>
    {MyForm(options)}
  </div>
)
