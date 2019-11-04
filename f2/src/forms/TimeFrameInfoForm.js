/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Text } from '../components/text'
import { ButtonsContainer } from '../components/buttons-container'
import { TextInput } from '../components/TextInput'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getTimeFrame } from '../utils/queriesAndMutations'

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
                <label htmlFor="startDate">
                  <Text marginTop={[5, null, 6]}>
                    <strong>
                      <Trans id="timeFramePage.startDate" />
                    </strong>
                  </Text>
                  <Text color="darkGray" mt="6px" mb="8px">
                    <Trans id="timeFramePage.startDateExample" />
                  </Text>
                </label>
                <div>
                  <Field
                    name="startDate"
                    id="startDate"
                    component={TextInputAdapter}
                    height="25px"
                    width="300px"
                  />
                </div>

                <label htmlFor="endDate">
                  <Text marginTop={[5, null, 6]}>
                    <strong>
                      <Trans id="timeFramePage.endDate" />
                    </strong>
                  </Text>
                  <Text color="darkGray" mt="6px" mb="8px">
                    <Trans id="timeFramePage.endDateExample" />
                  </Text>
                </label>
                <div>
                  <Field
                    name="endDate"
                    id="endDate"
                    component={TextInputAdapter}
                    height="25px"
                    width="300px"
                  />
                </div>
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
