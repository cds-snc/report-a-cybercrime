/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { ButtonsContainer } from '../components/buttons-container'
import { TextInput } from '../components/TextInput'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getP2ContactInfo } from '../utils/queriesAndMutations'

const TextInputAdapter = finalFormAdapter(TextInput)

export const ContactInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getP2ContactInfo(client)}
        onSubmit={data => onSubmit(client, data)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">
              <Text marginTop={[4, null, 5]}>
                <strong>
                  <Trans id="contactinfoPage.fullName" />
                </strong>
              </Text>
            </label>
            <div>
              <Field
                name="fullName"
                id="fullName"
                component={TextInputAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="email">
              <Text marginTop={[4, null, 5]}>
                <strong>
                  <Trans id="contactinfoPage.emailAddress" />
                </strong>
              </Text>
            </label>
            <div>
              <Field
                name="email"
                id="email"
                component={TextInputAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="postalCode">
              <Text marginTop={[4, null, 5]}>
                <strong>
                  <Trans id="contactinfoPage.postCode" />
                </strong>
              </Text>
            </label>
            <div>
              <Field
                name="postalCode"
                id="postalCode"
                component={TextInputAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <ButtonsContainer
              buttonLink={false}
              cancel={true}
              nextPage="Confirm information"
            />
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
