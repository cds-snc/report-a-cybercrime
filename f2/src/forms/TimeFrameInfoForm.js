/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Text } from '../components/text'
import { TextInput } from '../components/TextInput'
import { getTimeFrame } from '../utils/queriesAndMutations'
import { FormControl, FormLabel, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { Flex, Box } from '@chakra-ui/core'

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
              <Stack
                as="form"
                onSubmit={handleSubmit}
                spacing={6}
                shouldWrapChildren
              >
                <Field name="startDate">
                  {props => (
                    <FormControl>
                      <FormLabel htmlFor="startDate">
                        <Text fontWeight="bold">
                          <Trans id="timeFramePage.startDate" />
                        </Text>
                      </FormLabel>
                      <TextInput
                        id="startDate"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                      <FormHelperText>
                        <Text color="blackAlpha.600">
                          <Trans id="timeFramePage.startDateExample" />
                        </Text>
                      </FormHelperText>
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
                      <TextInput
                        id="endDate"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                      <FormHelperText>
                        <Text color="blackAlpha.600">
                          <Trans id="timeFramePage.endDateExample" />
                        </Text>
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>

                <Flex direction="row" align="center">
                  <Button type="submit" rightIcon="chevron-right">
                    <Trans id="timeframePage.nextButton" />
                  </Button>
                  <Box ml={4}>
                    <Link type="button" color="black" to="/" textAlign="center">
                      <Trans id="button.cancelReport" />
                    </Link>
                  </Box>
                </Flex>
              </Stack>
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
