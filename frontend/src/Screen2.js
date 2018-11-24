import React from 'react'
import { navigate, Link } from '@reach/router'

import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3 } from '@govuk-react/header'
import Breadcrumb from '@govuk-react/breadcrumb'

const labelFormat = css`
  margin-top: 20pt;
`

const submitButton = css`
  margin-top: 20pt;
`

const onSubmit = () => {
  navigate('form3')
}

const validate = () => {}

const MyForm = options => (
  <Form
    onSubmit={onSubmit}
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
                <label key={key}>
                  <Field
                    name="involved"
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

        <Button className={submitButton} type="submit" disabled={invalid}>
          <Trans>Next</Trans>
        </Button>
      </form>
    )}
  />
)

const options = {
  website: <Trans>website</Trans>,
  email: <Trans>email</Trans>,
  phone: <Trans>phone</Trans>,
  'text message': <Trans>text message</Trans>,
  'social media': <Trans>social media</Trans>,
  'bank account': <Trans>bank account</Trans>,
  "I'm not sure": <Trans>I’m not sure</Trans>,
}

export const Screen2 = () => (
  <div>
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
