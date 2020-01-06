/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { FormControl, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'

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
                  <Trans id="timeFramePage.startDate" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="timeFramePage.startDateExample" />
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
                  <Trans id="timeFramePage.endDate" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="timeFramePage.endDateExample" />
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
