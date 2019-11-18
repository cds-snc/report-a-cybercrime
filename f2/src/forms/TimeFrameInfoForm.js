/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { ButtonsContainer } from '../components/buttons-container'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getTimeFrame } from '../utils/queriesAndMutations'
import { Input, FormControl, FormLabel, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'

const TextInputAdapter = finalFormAdapter(Input)

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
                <Stack spacing={8}>
                  <FormControl>
                    <FormLabel htmlFor="startDate">
                      <Trans id="timeFramePage.startDate" />
                    </FormLabel>
                    <FormHelperText id="startDateExample" variant="above">
                      <Trans id="timeFramePage.startDateExample" />
                    </FormHelperText>
                    <Input
                      variant="outline"
                      name="startDate"
                      id="startDate"
                      aria-describedby="startDateExample"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="startDate">
                      <Trans id="timeFramePage.endDate" />
                    </FormLabel>
                    <FormHelperText id="endDateExample" variant="above">
                      <Trans id="timeFramePage.endDateExample" />
                    </FormHelperText>
                    <Input
                      name="endDate"
                      id="endDate"
                      aria-describedby="endDateExample"
                    />
                  </FormControl>

                  <ButtonsContainer
                    cancel={true}
                    buttonLink={false}
                    nextPage="What happened"
                  />
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
