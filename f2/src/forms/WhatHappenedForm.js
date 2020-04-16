/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { TextArea } from '../components/text-area'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FormControl, Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'

export const WhatHappenedForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whatHappened))
      props.onSubmit(data)
  }

  const [data] = useStateValue()
  const whatHappened = {
    ...formDefaults.whatHappened,
    ...data.formData.whatHappened,
  }

  return (
    <Form
      initialValues={whatHappened}
      onSubmit={localOnSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
          <Field name="whatHappened">
            {(props) => (
              <FormControl>
                <FormLabel htmlFor="whatHappened">
                  <Trans id="whatHappenedPage.summary" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="whatHappenedPage.hint" />
                </FormHelperText>

                <TextArea
                  h="300px"
                  id="whatHappened"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <NextAndCancelButtons
            next={<Trans id="whatHappenedPage.nextPage" />}
            button={<Trans id="whatHappenedPage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
