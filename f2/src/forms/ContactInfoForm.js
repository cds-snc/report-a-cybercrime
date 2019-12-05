/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { TextArea } from '../components/text-area'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { getP2ContactInfo } from '../utils/queriesAndMutations'
import { Stack, FormControl, FormLabel } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'

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
            spacing={6}
          >
            <Field name="fullName">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="fullName">
                    <Text fontWeight="bold">
                      <Trans id="contactinfoPage.fullName" />
                    </Text>
                  </FormLabel>
                  <FormHelperText>
                        <Text color="blackAlpha.600">
                          <Trans id="contactinfoPage.fullNameExample" />
                        </Text>
                      </FormHelperText>
                  <TextArea
                    id="fullName.textarea"
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
                    <Text fontWeight="bold">
                      <Trans id="contactinfoPage.emailAddress" />
                    </Text>
                  </FormLabel>
                  <FormHelperText>
                        <Text color="blackAlpha.600">
                          <Trans id="contactinfoPage.emailAddressExample" />
                        </Text>
                      </FormHelperText>
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
                    <Text fontWeight="bold">
                      <Trans id="contactinfoPage.postCode" />
                    </Text>
                  </FormLabel>
                  <FormHelperText>
                        <Text color="blackAlpha.600">
                          <Trans id="contactinfoPage.postCodeExample" />
                        </Text>
                      </FormHelperText>
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
