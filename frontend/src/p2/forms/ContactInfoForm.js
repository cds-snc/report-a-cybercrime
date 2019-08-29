/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { ButtonsContainer } from '../../components/buttons-container'
import { TextArea } from '../../components/text-area'
import { Text } from '../../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getP2ContactInfo } from '../../utils/queriesAndMutations'

const TextAreaAdapter = finalFormAdapter(TextArea)

const validate = () => {
  return {}
}

export const ContactInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getP2ContactInfo(client)}
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Full name</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="fullName"
                id="fullName"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="email">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Email address</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="email"
                id="email"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="postalCode">
              <Text marginTop={[4, null, 5]}>
                <Trans>
                  <strong>Postal code</strong>
                </Trans>
              </Text>
            </label>
            <div>
              <Field
                name="postalCode"
                id="postalCode"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <ButtonsContainer buttonLink={false} cancel={true} />
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
