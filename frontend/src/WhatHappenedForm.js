import React from 'react'
import { Trans } from '@lingui/macro'
import { i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { css } from 'react-emotion'
import Button from '@govuk-react/button'
import PropTypes from 'prop-types'

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
const submitButton = css`
  margin-top: 20pt;
`

const validate = values => {
  let errors = {}
  if (!values.whatHappened) {
    errors.whatHappened = i18nMark(
      'Please complete the text box to tell us what happened.',
    )
  }
  return errors
}

export const WhatHappenedForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="whatHappened">
            <Trans>What Happened</Trans>
          </label>
          <Field name="whatHappened">
            {({ input, meta }) => (
              <div>
                <textarea
                  {...input}
                  id="whatHappened"
                  placeholder=""
                  className={textArea}
                />
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
)

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
