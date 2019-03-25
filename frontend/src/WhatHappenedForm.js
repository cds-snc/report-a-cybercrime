/** @jsx jsx */
import { Trans } from '@lingui/macro'
import { i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Button } from './components/button'
import PropTypes from 'prop-types'
import { Text } from './components/text'
import { TextArea } from './components/text-area'
import { Container } from './components/container'
import { Label } from './components/label'
import { jsx } from '@emotion/core'

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
        <Container>
          <Label htmlFor="whatHappened">
            <Text pb={1}>
              <Trans>What Happened</Trans>
            </Text>
          </Label>
          <Field name="whatHappened">
            {({ input, meta }) => (
              <Container>
                <TextArea {...input} id="whatHappened" placeholder="" />
                <Container
                  mt={3}
                  display="inline-block"
                  fontSize={4}
                  color="red"
                >
                  {meta.error && meta.touched && <Trans id={meta.error} />}
                </Container>
              </Container>
            )}
          </Field>
        </Container>

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
