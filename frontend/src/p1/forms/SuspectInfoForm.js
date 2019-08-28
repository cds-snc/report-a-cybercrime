/** @jsx jsx */
import React from 'react'

import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { I18n, i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { TextArea } from '../../components/text-area'
import { ButtonsContainer } from '../../components/buttons-container'
import { Text } from '../../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getSuspectInfo } from '../../utils/queriesAndMutations'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const languages = [
  i18nMark('English'),
  i18nMark('French'),
  i18nMark('Other language'),
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

export const SuspectInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getSuspectInfo(client)}
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="suspectName">
              <Text>
                <Trans>
                  <strong>Name</strong>
                </Trans>
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

            <label htmlFor="suspectEmail">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Email address</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="suspectEmail"
                id="suspectEmail"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="suspectPhone">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Phone number</strong>
                </Trans>
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
                <Trans>
                  <strong>Website link</strong>
                </Trans>
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

            <label htmlFor="suspectAddress">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Mailing address</strong>
                </Trans>
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

            <label htmlFor="suspectIP">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>IP address</strong>
                </Trans>
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

            <Fieldset>
              <legend>
                <Text marginTop={[4, null, 5]}>
                  <Trans>
                    <strong>Language of communications</strong>
                  </Trans>
                </Text>
              </legend>
              <div>
                <I18n>
                  {({ i18n }) =>
                    languages.map(key => {
                      return (
                        <CheckboxStyle key={key}>
                          <Field
                            name="suspectLanguage"
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

            {values.suspectLanguage &&
            values.suspectLanguage.indexOf('Other language') > -1 ? (
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

            <ButtonsContainer
              buttonLink={false}
              cancel={true}
              cancelRoute="/p1/"
            />
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

SuspectInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
