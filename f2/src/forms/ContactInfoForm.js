/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getP2ContactInfo } from '../utils/queriesAndMutations'
import { Stack, FormControl, FormLabel } from '@chakra-ui/core'

const TextInputAdapter = finalFormAdapter(TextInput)

export const ContactInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getP2ContactInfo(client)}
        onSubmit={data => onSubmit(client, data)}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={4}
          >
            <Field name="fullName">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="fullName">
                    <Trans id="contactinfoPage.fullName" />
                  </FormLabel>
                  <TextInput
                    id="fullName"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="email">
                    <Trans id="contactinfoPage.emailAddress" />
                  </FormLabel>
                  <TextInput
                    id="email"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>

            <Field name="postalCode">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="postalCode">
                    <Trans id="contactinfoPage.postCode" />
                  </FormLabel>
                  <TextInput
                    id="postalCode"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>

            <NextAndCancelButtons>
              <Trans id="contactinfoPage.nextButton" />
            </NextAndCancelButtons>
          </Stack>
        )}
      />
    )}
  </ApolloConsumer>
)

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
