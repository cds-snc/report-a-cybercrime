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
  navigate('thanks')
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
            <Trans>What was your reaction?</Trans>
          </label>
        </H3>
        <div>
          <Field name="reaction" component="textarea" placeholder="" />
        </div>

        <H3 className={labelFormat}>
          <label>
            <Trans>Did you lose money or personal information?</Trans>
          </label>
        </H3>
        <div>
          <Field
            name="lose_money_or_info"
            component="textarea"
            placeholder=""
          />
        </div>

        <H3 className={labelFormat}>
          <label>
            <Trans>Was your reputation or productivity affected?</Trans>
          </label>
        </H3>
        <div>
          <Field
            name="reputation_affected"
            component="textarea"
            placeholder=""
          />
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

export class Screen3 extends Component {
  render() {
    return (
      <div>
        <H1 level={1}>
          <Trans>How were you affected?</Trans>
        </H1>

        {MyForm()}
      </div>
    )
  }
}
