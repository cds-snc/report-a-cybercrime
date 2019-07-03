/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../components/checkbox'
import { Container } from '../components/container'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { Text } from '../components/text'
import { DateSelector } from '../components/date-picker'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)
const DateSelectorAdapter = finalFormAdapter(DateSelector)

const howContacted = [
  i18nMark('Telephone'),
  i18nMark('Email'),
  i18nMark('Website'),
  i18nMark('Other'),
]

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const validate = () => {
  return {}
}
export class ScamInfoForm extends Component {
  state = {
    startDate: new Date(),
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    })
  }

  localOnSubmit = (client, data) => {
    const { onSubmit } = this.props
    // data.whenWereYouContacted = `${this.state.startDate}`.substr(0, 15)

    data.whenWereYouContacted = this.state.startDate.toISOString().slice(0, 10)

    onSubmit(client, data)
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Form
            onSubmit={data => this.localOnSubmit(client, data)}
            validate={validate}
            render={({
              handleSubmit,
              // reset,
              // submitting,
              // pristine,
              values,
              // invalid,
            }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="scamDetails">
                  <Text marginTop={[5, null, 6]}>
                    <Trans>What happened?</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="scamDetails"
                    id="scamDetails"
                    component={TextAreaAdapter}
                    height="200px"
                    width="300px"
                  />
                </div>

                <label htmlFor="whenWereYouContacted">
                  <Text marginTop={[5, null, 6]}>
                    <Trans>When did it happen?</Trans>
                  </Text>
                </label>
                <div>
                  <I18n>
                    {({ i18n }) => (
                      <Field
                        name="whenWereYouContacted"
                        id="whenWereYouContacted"
                        component={DateSelectorAdapter}
                        locale={i18n._('en')}
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        height="25px"
                        width="300px"
                      />
                    )}
                  </I18n>
                </div>

                <label htmlFor="howWereYouContacted">
                  <Text marginTop={[5, null, 6]}>
                    <Trans>How did it start?</Trans>
                  </Text>
                </label>
                <div>
                  <I18n>
                    {({ i18n }) =>
                      howContacted.map(key => {
                        return (
                          <CheckboxStyle key={key}>
                            <Field
                              name="howWereYouContacted"
                              id="howWereYouContacted"
                              component={CheckboxAdapter}
                              type="checkbox"
                              value={key}
                              label={i18n._(key)}
                            />
                          </CheckboxStyle>
                        )
                      })
                    }
                  </I18n>
                </div>

                {values.howWereYouContacted &&
                values.howWereYouContacted.indexOf('Other') > -1 ? (
                  <React.Fragment>
                    <label htmlFor="otherMethodOfContact">
                      <Text>
                        <Trans>Other</Trans>
                      </Text>
                    </label>
                    <div>
                      <Field
                        name="otherMethodOfContact"
                        id="otherMethodOfContact"
                        component={TextAreaAdapter}
                        height="50px"
                        width="300px"
                      />
                    </div>
                  </React.Fragment>
                ) : (
                  ''
                )}

                <Text>
                  {JSON.stringify(validate(values)) === JSON.stringify({}) ? (
                    ''
                  ) : (
                    <Text>
                      <Trans>Please fill out all fields</Trans>
                    </Text>
                  )}
                </Text>
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
                  <Link type="button" color="black" to="/" textAlign="center">
                    <Trans>Cancel report</Trans>
                  </Link>
                </Container>
              </form>
            )}
          />
        )}
      </ApolloConsumer>
    )
  }
}

ScamInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
