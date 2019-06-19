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
import { i18nMark } from '@lingui/react'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const howContacted = ['phone', 'email', 'website link', 'other']

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const validate = values => {
  let errors = {}
  if (!values.howWereYouContacted) {
    errors.howWereYouContacted = i18nMark('Required')
  }
  if (!values.whenWereYouContacted) {
    errors.whenWereYouContacted = i18nMark('Required')
  }
  // return {errors}
  return {}
}

export const ContactedForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => onSubmit(client, data)}
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
            <label htmlFor="howWereYouContacted">
              <Text>
                <Trans>How were you contacted?</Trans>
              </Text>
            </label>
            <div>
              {howContacted.map(key => {
                return (
                  <CheckboxStyle key={key}>
                    <Field
                      name="howWereYouContacted"
                      id="howWereYouContacted"
                      component={CheckboxAdapter}
                      type="checkbox"
                      value={key}
                      label={key}
                    />
                  </CheckboxStyle>
                )
              })}
            </div>

            {values.howWereYouContacted &&
            values.howWereYouContacted.indexOf('other') > -1 ? (
              <React.Fragment>
                <label htmlFor="otherMethodOfContact">
                  <Text>
                    <Trans>Other method of contact</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="otherMethodOfContact"
                    id="otherMethodOfContact"
                    component={TextAreaAdapter}
                    height="25px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <label htmlFor="whenWereYouContacted">
              <Text marginTop={[4, null, 5]}>
                <Trans>When were you contacted?</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="whenWereYouContacted"
                id="whenWereYouContacted"
                component={TextAreaAdapter}
                height="25px"
              />
            </div>

            <Text>
              {JSON.stringify(validate(values)) === JSON.stringify({}) ? (
                ''
              ) : (
                <Text>
                  <Trans>Please fill out all fields</Trans>
                </Text>
              )}
            </Text>
            <Button type="submit">
              <Trans>Next</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

ContactedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
