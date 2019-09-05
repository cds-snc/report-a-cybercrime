/** @jsx jsx */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { ButtonsContainer } from '../../components/buttons-container'
import { TextArea } from '../../components/text-area'
import { Text } from '../../components/text'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getScamInfo } from '../../utils/queriesAndMutations'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const howContacted = [
  i18nMark('Telephone'),
  i18nMark('Email'),
  i18nMark('Website'),
  i18nMark('Other'),
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
export class ScamInfoForm extends Component {
  localOnSubmit = (client, data) => {
    const { onSubmit } = this.props
    onSubmit(client, data)
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Form
            initialValues={getScamInfo(client)}
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
                    <Trans>
                      <strong>What happened?</strong>
                    </Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="scamDetails"
                    id="scamDetails"
                    component={TextAreaAdapter}
                    height="200px"
                    width="100%"
                  />
                </div>

                <label htmlFor="whenWereYouContacted">
                  <Text marginTop={[5, null, 6]}>
                    <Trans>
                      <strong>When did it start?</strong>
                    </Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="whenWereYouContacted"
                    id="whenWereYouContacted"
                    component={TextAreaAdapter}
                    height="25px"
                    width="300px"
                  />
                </div>

                <Fieldset>
                  <legend>
                    <Text marginTop={[5, null, 6]}>
                      <Trans>
                        <strong>How did it start?</strong>
                      </Trans>
                    </Text>
                  </legend>
                  <div>
                    <I18n>
                      {({ i18n }) =>
                        howContacted.map(key => {
                          return (
                            <CheckboxStyle key={key}>
                              <Field
                                name="howWereYouContacted"
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
                <ButtonsContainer
                  buttonLink={false}
                  cancel={true}
                  cancelRoute="/p1/"
                  nextPage="Money lost"
                />
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
