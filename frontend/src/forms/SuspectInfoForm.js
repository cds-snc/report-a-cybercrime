/** @jsx jsx */
import React from 'react'

import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { I18n, i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../components/checkbox'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { Container } from '../components/container'

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

const validate = () => {
  return {}
}

export const SuspectInfoForm = ({ onSubmit }) => (
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

            <label htmlFor="suspectEmail">
              <Text marginTop={[4, null, 5]}>
                <Trans>Email address</Trans>
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
                <Trans>Phone number</Trans>
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
                <Trans>Website link</Trans>
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
                <Trans>Mailing address</Trans>
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

            <label htmlFor="suspectLanguage">
              <Text marginTop={[4, null, 5]}>
                <Trans>Language of communications</Trans>
              </Text>
            </label>
            <div>
              <I18n>
                {({ i18n }) =>
                  languages.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="suspectLanguage"
                          id="suspectLanguage"
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

            <Container
              width="305px"
              marginTop={[3, null, 4]}
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
              marginTop={[2, null, 3]}
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

SuspectInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
