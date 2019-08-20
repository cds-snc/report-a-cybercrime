/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { I18n } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H4 } from '../../components/header'
import { Container } from '../../components/container'

import { Button } from '../../components/button'
import { Link } from '../../components/link'

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
    data.startDate = this.startDate.toISOString()
    data.endDate = this.endDate.toISOString()
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
              <H4 marginTop={[5, null, 6]}>
                <Trans>When did it start?</Trans>
              </H4>
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
              <H4 marginTop={[5, null, 6]}>
                <Trans>When was your last interaction with the scammer?</Trans>
              </H4>
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
            <Container
              width="305px"
              marginTop={[1, null, 1]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Button type="submit">
                <Trans>Continue</Trans>
              </Button>
            </Container>

            <Container
              width="300px"
              marginTop={[1, null, 1]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Link type="button" color="black" to="/p2/" textAlign="center">
                <Trans>Cancel report</Trans>
              </Link>
            </Container>
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
