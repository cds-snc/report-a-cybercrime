/** @jsx jsx */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { P } from '../../components/paragraph'
import { Container } from '../../components/container'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { DateSelector } from '../../components/date-picker'
import { finalFormAdapter } from '../../utils/finalFormAdapter'

const DateSelectorAdapter = finalFormAdapter(DateSelector)

const validate = () => {
  return {}
}
class TimeFrameInfoFormWrapped extends Component {
  constructor(props) {
    super(props)
    this.startDate = new Date()
    this.endDate = new Date()
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
      <ApolloConsumer>
        <Form
          onSubmit={data => this.localOnSubmit(this.props.client, data)}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="whenDidItStart">
                <P marginTop={[5, null, 6]}>
                  <Trans>
                    <strong>Approximate start</strong>
                  </Trans>
                </P>
              </label>
              <div>
                <Field
                  name="whenDidItStart"
                  id="whenDidItStart"
                  component={DateSelectorAdapter}
                  height="25px"
                  width="300px"
                />
              </div>

              <label htmlFor="whenWasLastInteraction">
                <P marginTop={[5, null, 6]}>
                  <Trans>
                    <strong>Approximate end</strong>
                  </Trans>
                </P>
              </label>
              <div>
                <Field
                  name="whenWasLastInteraction"
                  id="whenWasLastInteraction"
                  component={DateSelectorAdapter}
                  height="25px"
                  width="300px"
                />
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
