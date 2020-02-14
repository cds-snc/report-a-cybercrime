/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Stack, FormControl } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { P } from '../components/paragraph'
import { Button } from '../components/button'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Icon } from '@chakra-ui/core'

export const ContactInfoForm = ({ onSubmit }) => {
  const [data] = useStateValue()
  const contactInfo = {
    email: '',
    name: '',
    phone: '',
    ...data.formData.contactInfo,
  }

  return (
    <Form
      initialValues={contactInfo}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
          <Flex direction="row" align="center" wrap="wrap" mb={10}>
            <P w="100%">
              <b>
                <Trans id="contactinfoPage.skipInfo" />
              </b>
            </P>
            <Button
              as={ReactRouterLink}
              fontSize={{ base: 'lg', md: 'xl' }}
              color="black"
              variant="solid"
              variantColor="gray"
              bg="gray.400"
              borderColor="gray.500"
              to="/confirmation"
              textAlign="center"
            >
              <Trans id="contactinfoPage.skipButton" />
              <Icon
                focusable="false"
                ml={2}
                mr={-2}
                name="chevron-right"
                size="28px"
              />
            </Button>
          </Flex>
          <Field name="name">
            {props => (
              <FormControl>
                <FormLabel htmlFor="name">
                  <Trans id="contactinfoPage.name" />{' '}
                </FormLabel>
                <TextInput
                  id="name"
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
                  <Trans id="contactinfoPage.emailAddress" />{' '}
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

          <Field name="phone">
            {props => (
              <FormControl>
                <FormLabel htmlFor="phone">
                  <Trans id="contactinfoPage.phoneNumber" />{' '}
                </FormLabel>
                <TextInput
                  id="phone"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          <NextAndCancelButtons
            next={<Trans id="contactinfoPage.nextInfo" />}
            button={<Trans id="contactinfoPage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
