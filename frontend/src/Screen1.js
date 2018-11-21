import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3 } from '@govuk-react/header'
import ListItem from '@govuk-react/list-item'

const labelFormat = css`
  margin-top: 20pt;
`
const submitButton = css`
  margin-top: 20pt;
`
const listitem = css`
  margin: 5pt;
  margin-left: 20pt;
`
const textArea = css`
  width: 500pt;
  height: 200pt;
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
            <Trans>What happened?</Trans>
          </label>
        </H3>
        <div>
          <Field
            name="what happened"
            component="textarea"
            className={textArea}
            placeholder=""
          />
        </div>

        <Button
          className={submitButton}
          type="submit"
          disabled={pristine || invalid}
        >
          <Trans>Submit</Trans>
        </Button>
      </form>
    )}
  />
)

export class Screen1 extends Component {
  render() {
    return (
      <div>
        <H1>
          <Trans>Describe what happened.</Trans>
        </H1>

        <ListItem className={listitem}>
          <Trans>When did it take place?</Trans>
        </ListItem>
        <ListItem className={listitem}>
          <Trans>Who was involved?</Trans>
        </ListItem>
        <ListItem className={listitem}>
          <Trans>How were you affected?</Trans>
        </ListItem>

        {MyForm()}
      </div>
    )
  }
}
