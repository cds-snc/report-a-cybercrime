/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { ButtonsContainer } from '../components/buttons-container'
import { getTimeFrame } from '../utils/queriesAndMutations'
import { Text, FormField } from 'grommet'
import { TextInput } from '../components/TextInput'

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
                <FormField
                  label={
                    <Text weight="bold">
                      <Trans>Approximate start</Trans>
                    </Text>
                  }
                  htmlFor="startDate"
                  help={
                    <Text>
                      <Trans>For example: 2019-04-28</Trans>
                    </Text>
                  }
                >
                  <TextInput id="startDate" name="startDate" />
                </FormField>

                <FormField
                  label={
                    <Text weight="bold">
                      <Trans>Approximate end</Trans>
                    </Text>
                  }
                  htmlFor="endDate"
                  help={
                    <Text>
                      <Trans>For example: 2019-04-28</Trans>
                    </Text>
                  }
                >
                  <TextInput id="endDate" name="endDate" />
                </FormField>

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
