import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3 } from '@govuk-react/header'

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

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <H3 className={labelFormat}>
            <label>
              <Trans>Choose all that apply</Trans>
            </label>
          </H3>
          <div>
            <label>
              <Field
                name="involved"
                component="input"
                type="checkbox"
                value="website"
              />{' '}
              <Trans>Website</Trans>
            </label>

            <label>
              <Field
                name="involved"
                component="input"
                type="checkbox"
                value="email"
              />{' '}
              <Trans>Email</Trans>
            </label>

            <label>
              <Field
                name="involved"
                component="input"
                type="checkbox"
                value="phone"
              />{' '}
              <Trans>Phone call</Trans>
            </label>

            <label>
              <Field
                name="involved"
                component="input"
                type="checkbox"
                value="text message"
              />{' '}
              <Trans>Text message</Trans>
            </label>

            <label>
              <Field
                name="involved"
                component="input"
                type="checkbox"
                value="social media"
              />{' '}
              <Trans>Social media</Trans>
            </label>

            <label>
              <Field
                name="involved"
                component="input"
                type="checkbox"
                value="Bank account"
              />{' '}
              <Trans>Bank account</Trans>
            </label>

            <label>
              <Field
                name="involved"
                component="input"
                type="checkbox"
                value="I’m not sure"
              />{' '}
              <Trans>I’m not sure</Trans>
            </label>
          </div>
        </div>

        <Button className={submitButton} type="submit" disabled={invalid}>
          <Trans>Next</Trans>
        </Button>
      </form>
    )}
  />
)

export class Screen2 extends Component {
  render() {
    return (
      <div>
        <H1 level={1}>
          <Trans>What was involved?</Trans>
        </H1>
        {MyForm()}
      </div>
    )
  }
}
