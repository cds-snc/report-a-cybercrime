/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { ApolloConsumer } from 'react-apollo'
import { getP2ContactInfo } from '../utils/queriesAndMutations'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'

export const LocationInfoForm = ({ onSubmit }) => (
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

                        <Field name="postalCode">
                            {props => (
                                <FormControl>
                                    <FormLabel htmlFor="postalCode">
                                        <Trans id="locationinfoPage.postalCode" />
                                    </FormLabel>
                                    <FormHelperText>
                                        <Trans id="locationinfoPage.postalCodeExample">
                                            <VisuallyHidden as="span" />
                                        </Trans>
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
                                        <Trans id="contactinfoPage.postCode" />
                                    </FormLabel>
                                    <FormHelperText>
                                        <Trans id="contactinfoPage.postCodeExample" />
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

LocationInfoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
