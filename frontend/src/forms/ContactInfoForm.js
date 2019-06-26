/** @jsx jsx */
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { I18n, i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Container } from '../components/container'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { ButtonLink } from '../components/button-link'
import { RadioButton } from '../components/radio-button'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const TextAreaAdapter = finalFormAdapter(TextArea)
const RadioButtonAdapter = finalFormAdapter(RadioButton)

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
  font-size: 1.25rem;
  display: block;
`

const victimOptions = [i18nMark('yes'), i18nMark('no')]

const validate = () => {
  return {}
}

export const ContactInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="userIsTheVictim">
              <Text>
                <Trans>Are you the victim?</Trans>
              </Text>
            </label>
            <I18n>
              {({ i18n }) =>
                victimOptions.map(key => {
                  return (
                    <CheckboxStyle key={key}>
                      <Field
                        name="userIsTheVictim"
                        id="userIsTheVictim"
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

            <label htmlFor="contactInfoName">
              <Text marginTop={[4, null, 5]}>
                <Trans>Name</Trans>
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
                <Trans>Email</Trans>
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
                <Trans>Phone number</Trans>
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

            <Container
              width="305px"
              marginTop={[3, null, 4]}
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <Button type="button" onClick={() => navigate('/uploadfiles')}>
                <Trans>Back</Trans>
              </Button>

              <Button type="submit">
                <Trans>Next</Trans>
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
              <ButtonLink type="button" color="black">
                <Trans>Cancel Report</Trans>
              </ButtonLink>

              <ButtonLink type="button" color="black" marginTop={[1, null, 1]}>
                <Trans>Save Report</Trans>
              </ButtonLink>
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
