/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { TextArea } from '../components/text-area'
import { Text } from '../components/text'
import { FormHelperText } from '../components/FormHelperText'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { getWhatHappened } from '../utils/queriesAndMutations'
import { FormControl, FormLabel, Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'

export const WhatHappenedForm = props => {
  const [data] = useStateValue()

  const whatHappened = {
    whatHappened: '',
    ...data.formData.whatHappened,
  }

  return (
    <Form
      initialValues={whatHappened}
      onSubmit={data => props.onSubmit(data)}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
          <Field name="whatHappened">
            {props => (
              <FormControl>
                <FormLabel htmlFor="whatHappened">
                  <Text fontWeight="bold">
                    <Trans id="whatHappendPage.summary" />
                  </Text>
                </FormLabel>
                <FormHelperText variant="above">
                  <Text as="span" color="blackAlpha.600">
                    <Trans id="whatHappendPage.hint" />
                  </Text>
                </FormHelperText>
                <TextArea
                  id="whatHappened"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <NextAndCancelButtons>
            <Trans id="whatHappenedPage.nextButton" />
          </NextAndCancelButtons>
        </Stack>
      )}
    />
  )
}

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
