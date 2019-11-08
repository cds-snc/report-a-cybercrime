/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { ButtonsContainer } from '../components/buttons-container'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getTimeFrame } from '../utils/queriesAndMutations'
import { Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/core'

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
                <FormControl>
                  <FormLabel htmlFor="startDate">
                    <Trans>Approximate start</Trans>
                  </FormLabel>
                  <FormHelperText id="startDateExample" mb={2} mt={0}>
                    <Trans>For example: 2019-04-28</Trans>
                  </FormHelperText>
                  <Input
                    name="startDate"
                    id="startDate"
                    aria-describedby="startDateExample"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="startDate">
                    <Trans>Approximate start</Trans>
                  </FormLabel>
                  <FormHelperText id="endDateExample">
                    <Trans>For example: 2019-04-28</Trans>
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
