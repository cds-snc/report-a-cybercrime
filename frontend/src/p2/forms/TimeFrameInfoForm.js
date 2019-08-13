/** @jsx jsx */
import  { Component } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'

import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { Container } from '../../components/container'

import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { Text } from '../../components/text'
import { DateSelector } from '../../components/date-picker'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getScamInfo } from '../../utils/queriesAndMutations'

const CheckboxAdapter = finalFormAdapter(Checkbox)

const DateSelectorAdapter = finalFormAdapter(DateSelector)

const ifYouKnow = [
  i18nMark('I do not know')
]

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const Fieldset = styled('fieldset')`
  margin: 0;
  padding: 0;
  border: none;
`

const validate = () => {
  return {}
}
export class TimeFrameInfoForm extends Component {
  constructor(props) {
    super(props)
    this.startDate = new Date()
  }

  handleChange = date => {
    this.startDate = date
  }

  localOnSubmit = (client, data) => {
    const { onSubmit } = this.props
    data.whenDidItStarted = this.startDate.toISOString().slice(0, 10)
    data.whenLastInteraction = this.startDate.toISOString().slice(0,10)
    onSubmit(client, data)
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Form
            // initialValues={getScamInfo(client)}
            onSubmit={data => this.localOnSubmit(client, data)}
            validate={validate}
            render={({
              handleSubmit,
              // values,
            
            }) => (
              <form onSubmit={handleSubmit}>
               

                <label htmlFor="whenDidItStarted">
                  <Text marginTop={[5, null, 6]}>
                    <Trans>When did it start?</Trans>
                  </Text>
                </label>
                <div>
                  <I18n>
                    {({ i18n }) => (
                      <Field
                        name="whenDidItStarted"
                        id="whenDidItStarted"
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

                <Fieldset>
                  
                  <div>
                    <I18n>
                      {({ i18n }) =>
                        ifYouKnow.map(key => {
                          return (
                            <CheckboxStyle key={key}>
                              <Field
                                name="IfYouKnow"
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
                </Fieldset>

                <label htmlFor="whenLastInteraction">
                  <Text marginTop={[5, null, 6]}>
                    <Trans>When was your last interaction?</Trans>
                  </Text>
                </label>
                <div>
                  <I18n>
                    {({ i18n }) => (
                      <Field
                        name="whenLastInteraction"
                        id="whenLastInteraction"
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


                <Fieldset>
                  
                  <div>
                    <I18n>
                      {({ i18n }) =>
                        ifYouKnow.map(key => {
                          return (
                            <CheckboxStyle key={key}>
                              <Field
                                name="ifYouKnow"
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
                </Fieldset>

               
                
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
                  <Link
                    type="button"
                    color="black"
                    to="/p2/"
                    textAlign="center"
                  >
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

TimeFrameInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
