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

import { getTimeFrame } from '../utils/queriesAndMutations'
import { FormControl, FormLabel, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'

class KevinInfoFormWrapped extends Component {
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
              <Stack
                as="form"
                onSubmit={handleSubmit}
                spacing={6}
                shouldWrapChildren
              >
                <Field name="input">
                  {props => (
                    <FormControl>
                      <FormLabel htmlFor="input">
                        <Text fontWeight="bold">
                          <Trans id="kevinPage.input" />
                        </Text>
                      </FormLabel>
                      <FormHelperText>
                        <Text color="blackAlpha.600">
                          <Trans id="kevinPage.input" />
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

                

                <NextAndCancelButtons>
                  <Trans id="timeframePage.nextButton" />
                </NextAndCancelButtons>
              </Stack>
            )}
          />
        )}
      </ApolloConsumer>
    )
  }
}

KevinInfoFormWrapped.propTypes = {
  client: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export const KevinInfoForm = props => (
  <ApolloConsumer>
    {client => <KevinInfoFormWrapped client={client} {...props} />}
  </ApolloConsumer>
)
