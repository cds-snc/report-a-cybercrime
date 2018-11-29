import React from 'react'
import { navigate, Link } from '@reach/router'

import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3, H4 } from './utils/headers'
import { ApolloConsumer } from 'react-apollo'
import Breadcrumb from '@govuk-react/breadcrumb'

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

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/form3')
}

const validate = () => {}

const MyForm = options => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        render={({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <H3 className={labelFormat}>
                <label>
                  <Trans>Choose all that apply</Trans>
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
              <Field
                name="whatWasInvolvedOther"
                component="textarea"
                className={textArea}
                placeholder=""
              />
            </div>

            <Button className={submitButton} type="submit" disabled={invalid}>
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
      <Link to={'/form1'}>
        <Trans>What happened?</Trans>
      </Link>
    </Breadcrumb>
    <H1>
      <Trans>What was involved?</Trans>
    </H1>
    {MyForm(options)}
  </div>
)
