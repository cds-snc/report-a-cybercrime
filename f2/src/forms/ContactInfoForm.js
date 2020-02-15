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
  const [data, dispatch] = useStateValue()
  let contactInfo
  if (typeof data.formData.contactInfo === 'undefined') {
    contactInfo = { email: '', phone: '' }
    dispatch({
      type: 'saveFormData',
      data: { contactInfo },
    })
  } else contactInfo = data.formData.contactInfo

  return (
    <Form
      initialValues={contactInfo}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
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
          <P mb={0}>
            <Trans id="contactinfoPage.or" />{' '}
          </P>
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

          <Flex direction="row" align="center" wrap="wrap" mb={10}>
            <P w="100%">
              <Trans id="contactinfoPage.skipInfo" />
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
        </Stack>
      )}
    />
  )
}

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
