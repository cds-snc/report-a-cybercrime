/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../components/checkbox'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const languages = ['English', 'French', 'other']

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const validate = () => {
  return {}
}

export const SuspectInfo = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="suspectName">
              <Text>
                <Trans>Name</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="suspectName"
                id="suspectName"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="suspectAddress">
              <Text marginTop={[4, null, 5]}>
                <Trans>Address</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="suspectAddress"
                id="suspectAddress"
                component={TextAreaAdapter}
                height="100px"
                width="300px"
              />
            </div>

            <label htmlFor="suspectLanguage">
              <Text marginTop={[4, null, 5]}>
                <Trans>Language</Trans>
              </Text>
            </label>
            <div>
              {languages.map(key => {
                return (
                  <CheckboxStyle key={key}>
                    <Field
                      name="suspectLanguage"
                      id="suspectLanguage"
                      component={CheckboxAdapter}
                      type="checkbox"
                      value={key}
                      label={key}
                    />
                  </CheckboxStyle>
                )
              })}
            </div>

            {values.suspectLanguage &&
            values.suspectLanguage.indexOf('other') > -1 ? (
              <React.Fragment>
                <label htmlFor="otherSuspectLanguage">
                  <Text>
                    <Trans>Other language</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="otherSuspectLanguage"
                    id="otherSuspectLanguage"
                    component={TextAreaAdapter}
                    height="25px"
                    width="300px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <label htmlFor="suspectPhone">
              <Text marginTop={[4, null, 5]}>
                <Trans>Phone Number</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="suspectPhone"
                id="suspectPhone"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="suspectWebsite">
              <Text marginTop={[4, null, 5]}>
                <Trans>Website</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="suspectWebsite"
                id="suspectWebsite"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="suspectIP">
              <Text marginTop={[4, null, 5]}>
                <Trans>IP address</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="suspectIP"
                id="suspectIP"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <Button type="submit">
              <Trans>Next</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

SuspectInfo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
