import React from 'react'
import { Trans } from '@lingui/macro'
import { i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled'
import { Button } from './components/button'
import PropTypes from 'prop-types'
import { Text } from './components/text'
import { TextArea } from './components/text-area'

const ErrorMessage = styled('div')`
  margin-top: 10pt;
  display: inline-block;
  font-size: 19pt;
  color: red;
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
            <Text pb={1}>
              <Trans>What Happened</Trans>
            </Text>
          </label>
          <Field name="whatHappened">
            {({ input, meta }) => (
              <div>
                <TextArea {...input} id="whatHappened" placeholder="" />
                <ErrorMessage>
                  {meta.error && meta.touched && <Trans id={meta.error} />}
                </ErrorMessage>
              </div>
            )}
          </Field>
        </div>

        <Button type="submit">
          <Trans>Next</Trans>
        </Button>
      </form>
    )}
  />
)

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
