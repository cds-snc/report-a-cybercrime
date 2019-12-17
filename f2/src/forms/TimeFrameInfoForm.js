/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Text } from '../components/text'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'

import { FormControl, FormLabel, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { useStateValue } from '../utils/state'

export const TimeFrameInfoForm = props => {
  const localOnSubmit = data => {
    props.onSubmit(data)
  }

  const [data] = useStateValue()
  let { timeFrame } = data.formData
  timeFrame = {
    startDate: '',
    endDate: '',
    ...timeFrame,
  }

  return (
    <Form
      initialValues={timeFrame}
      onSubmit={data => localOnSubmit(data)}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
          <Field name="startDate">
            {props => (
              <FormControl>
                <FormLabel htmlFor="startDate">
                  <Text fontWeight="bold">
                    <Trans id="timeFramePage.startDate" />
                  </Text>
                </FormLabel>
                <FormHelperText>
                  <Text color="blackAlpha.600">
                    <Trans id="timeFramePage.startDateExample" />
                  </Text>
                </FormHelperText>
                <TextInput
                  id="startDate"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>

          <Field name="endDate">
            {props => (
              <FormControl>
                <FormLabel htmlFor="endDate">
                  <Text fontWeight="bold">
                    <Trans id="timeFramePage.endDate" />
                  </Text>
                </FormLabel>
                <FormHelperText>
                  <Text color="blackAlpha.600">
                    <Trans id="timeFramePage.endDateExample" />
                  </Text>
                </FormHelperText>
                <TextInput
                  id="endDate"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>

          <NextAndCancelButtons>
            <Trans id="timeframePage.nextButton" />
          </NextAndCancelButtons>
        </Stack>
      )}
    />
  )
}

TimeFrameInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
