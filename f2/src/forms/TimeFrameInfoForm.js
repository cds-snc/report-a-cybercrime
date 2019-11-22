/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Text } from '../components/text'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getTimeFrame } from '../utils/queriesAndMutations'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Box,
} from '@chakra-ui/core'

const TextInputAdapter = finalFormAdapter(TextInput)

class TimeFrameInfoFormWrapped extends Component {
  localOnSubmit = (client, data) => {
    const { onSubmit } = this.props
    onSubmit(client, data)
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Form
            initialValues={getTimeFrame(client)}
            onSubmit={data => this.localOnSubmit(this.props.client, data)}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={6} shouldWrapChildren>
                  <Field name="startDate">
                    {props => (
                      <FormControl>
                        <FormLabel htmlFor="startDate">
                          <Trans id="timeFramePage.startDate" />
                        </FormLabel>
                        <TextInput
                          id="startDate"
                          name={props.input.name}
                          value={props.input.value}
                          onChange={props.input.onChange}
                        />
                        <FormHelperText>
                          <Trans id="timeFramePage.startDateExample" />
                        </FormHelperText>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="endDate">
                    {props => (
                      <FormControl>
                        <FormLabel htmlFor="endDate">
                          <Trans id="timeFramePage.endDate" />
                        </FormLabel>
                        <TextInput
                          id="endDate"
                          name={props.input.name}
                          value={props.input.value}
                          onChange={props.input.onChange}
                        />
                        <FormHelperText>
                          <Trans id="timeFramePage.endDateExample" />
                        </FormHelperText>
                      </FormControl>
                    )}
                  </Field>

                  <NextAndCancelButtons>
                    <Trans id="timeframePage.nextButton" />
                  </NextAndCancelButtons>
                </Stack>
              </form>
            )}
          />
        )}
      </ApolloConsumer>
    )
  }
}

TimeFrameInfoFormWrapped.propTypes = {
  client: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export const TimeFrameInfoForm = props => (
  <ApolloConsumer>
    {client => <TimeFrameInfoFormWrapped client={client} {...props} />}
  </ApolloConsumer>
)
