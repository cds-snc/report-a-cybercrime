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
  navigate('/form2')
}

const validate = () => {}

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <H3 className={labelFormat}>
          <label>
            <Trans>When did it take place?</Trans>
          </label>
        </H3>
        <div>
          <Field name="when" component="input" placeholder="mm/dd/yyyy" />
        </div>

        <H3 className={labelFormat}>
          <label>
            <Trans>Who was involved?</Trans>
          </label>
        </H3>
        <div>
          <Field name="who" component="textarea" placeholder="" />
        </div>

        <H3 className={labelFormat}>
          <label>
            <Trans>How were you affected?</Trans>
          </label>
        </H3>
        <div>
          <Field name="how" component="textarea" placeholder="" />
        </div>

        <Button
          className={submitButton}
          type="submit"
          disabled={pristine || invalid}
        >
          <Trans>Next</Trans>
        </Button>
      </form>
    )}
  />
)

export class Screen1 extends Component {
  render() {
    return (
      <div>
        <H1 level={1}>
          <Trans>Describe what happened.</Trans>
        </H1>

        {MyForm()}
      </div>
    )
  }
}
