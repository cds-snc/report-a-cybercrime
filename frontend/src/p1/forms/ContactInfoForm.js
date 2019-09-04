/** @jsx jsx */
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { I18n, i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Container } from '../../components/container'
import { TextArea } from '../../components/text-area'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { RadioButton } from '../../components/radio-button'
import { Text } from '../../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getContactInfo } from '../../utils/queriesAndMutations'

const TextAreaAdapter = finalFormAdapter(TextArea)
const RadioButtonAdapter = finalFormAdapter(RadioButton)

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
  font-size: 1.25rem;
  display: block;
`

const Fieldset = styled('fieldset')`
  margin: 0;
  padding: 0;
  border: none;
`

const victimOptions = [i18nMark('Yes'), i18nMark('No')]

const validate = () => {
  return {}
}

export const ContactInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getContactInfo(client)}
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="contactInfoName">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Full name</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="contactInfoName"
                id="contactInfoName"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="contactInfoEmail">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Email address</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="contactInfoEmail"
                id="contactInfoEmail"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="contactInfoPhone">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Phone number</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="contactInfoPhone"
                id="contactInfoPhone"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <Fieldset>
              <legend>
                <Text marginTop={[4, null, 5]}>
                  <Trans>Are you reporting a scam that happened to you?</Trans>
                </Text>
              </legend>
              <I18n>
                {({ i18n }) =>
                  victimOptions.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="userIsTheVictim"
                          component={RadioButtonAdapter}
                          type="radio"
                          value={key}
                          label={i18n._(key)}
                        />
                      </CheckboxStyle>
                    )
                  })
                }
              </I18n>
            </Fieldset>

            <Container
              mt="1rem"
              mb="4rem"
              display={['flex', 'block', 'flex']}
              alignItems="center"
              css={css`
                button,
                div[name='buttonlink-container'] a {
                  padding: 0.7rem 1.5rem;
                  width: 100%;
                  text-align: center;
                }

                @media (max-width: 640px) {
                  div[name='buttonlink-container'] a {
                    padding: 0.7rem 0;
                  }
                }
              `}
            >
              <Container name="buttonlink-container" mt="1rem">
                <Button
                  onClick={() => navigate('/p1/confirmation')}
                  type="submit"
                >
                  <Trans>Next: Review report</Trans>
                </Button>
              </Container>

              <Container
                name="buttonlink-container"
                mt="1.9rem"
                ml={['3rem', '0', '3rem']}
              >
                <Link type="button" color="black" to="/p1/" textAlign="center">
                  <Trans>Cancel report</Trans>
                </Link>
              </Container>
            </Container>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
