import React from 'react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { css } from 'react-emotion'
import Button from '@govuk-react/button'
import PropTypes from 'prop-types'

const textArea = css`
  width: 500pt;
  height: 200pt;
  font-size: 19pt;
`

const submitButton = css`
  margin-top: 20pt;
`

const validate = () => {}

export const WhatHappenedForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="whatHappened">What Happened</label>
          <Field
            id="whatHappened"
            name="whatHappened"
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
          <Trans>Next</Trans>
        </Button>
      </form>
    )}
  />
)

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
