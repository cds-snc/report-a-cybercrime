/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { I18n } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Text } from '../../components/text'
import { ButtonsContainer } from '../../components/buttons-container'
import { DateSelector } from '../../components/date-picker'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getTimeFrame } from '../../utils/queriesAndMutations'

const DateSelectorAdapter = finalFormAdapter(DateSelector)

const validate = () => {
  return {}
}
class TimeFrameInfoFormWrapped extends Component {
  constructor(props) {
    super(props)
    const { startDate, endDate } = getTimeFrame(props.client)
    this.startDate = new Date(startDate)
    this.endDate = new Date(endDate)
  }

  handleChange = date => {
    this.startDate = date
  }
  handleChangeDate = date => {
    this.endDate = date
  }

  localOnSubmit = (client, data) => {
    const { onSubmit } = this.props
    if (this.startDate != null) {
      data.startDate = this.startDate.toISOString()
    } else {
      data.startDate = ''
    }

    if (this.endDate != null) {
      data.endDate = this.endDate.toISOString()
    } else {
      data.endDate = ''
    }

    onSubmit(client, data)
  }

  render() {
    return (
      <Form
        onSubmit={data => this.localOnSubmit(this.props.client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="whenDidItStart">
              <Text marginTop={[5, null, 6]}>
                <Trans>
                  <strong>Approximate start</strong>
                </Trans>
              </Text>
              <Text fontSize={(1, null, 2)}>
                <Trans>MM/DD/YYYY</Trans>
              </Text>
            </label>
            <div>
              <I18n>
                {({ i18n }) => (
                  <Field
                    name="whenDidItStart"
                    id="whenDidItStart"
                    component={DateSelectorAdapter}
                    locale={i18n._('en')}
                    selected={this.startDate}
                    onChange={this.handleChange}
                    height="25px"
                    width="300px"
                  />
                )}
              </I18n>
            </div>

            <label htmlFor="whenWasLastInteraction">
              <Text marginTop={[5, null, 6]}>
                <Trans>
                  <strong>Approximate end</strong>
                </Trans>
              </Text>
              <Text fontSize={(1, null, 2)}>
                <Trans>MM/DD/YYYY</Trans>
              </Text>
            </label>
            <div>
              <I18n>
                {({ i18n }) => (
                  <Field
                    name="whenWasLastInteraction"
                    id="whenWasLastInteraction"
                    component={DateSelectorAdapter}
                    locale={i18n._('en')}
                    selected={this.endDate}
                    onChange={this.handleChangeDate}
                    height="25px"
                    width="300px"
                  />
                )}
              </I18n>
            </div>
            <ButtonsContainer
              cancel={true}
              buttonLink={false}
              nextPage="What happened"
            />
          </form>
        )}
      />
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
