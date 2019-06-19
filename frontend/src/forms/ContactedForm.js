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

const LabelFormat = styled('label')`
  margin-top: 20pt;
`
const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
  font-size: 1.25rem;
  display: block;
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
        initialValues={{
          howWereYouContacted: [],
        }}
        render={({
          handleSubmit,
          // reset,
          // submitting,
          // pristine,
          values,
          // invalid,
        }) => (
          <form onSubmit={handleSubmit}>
            <LabelFormat>
              <Text>
                <Trans>How were you contacted?</Trans>
              </Text>
            </LabelFormat>
            <div>
              {howContacted.map(key => {
                return (
                  <CheckboxStyle key={key}>
                    <Field
                      name="howWereYouContacted"
                      component={CheckboxAdapter}
                      type="checkbox"
                      value={key}
                      label={key}
                    />
                  </CheckboxStyle>
                )
              })}
            </div>

            {values.howWereYouContacted.indexOf('other') > -1 ? (
              <React.Fragment>
                <LabelFormat>
                  <Text>
                    <Trans>Other method of contact</Trans>
                  </Text>
                </LabelFormat>
                <div>
                  <Field
                    name="otherMethodOfContact"
                    component={TextAreaAdapter}
                    height="25px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <LabelFormat htmlFor="whenWereYouContacted">
              <Text>
                <Trans>When were you contacted?</Trans>
              </Text>
            </LabelFormat>
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
