/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Button } from '../components/button'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Icon } from '@chakra-ui/core'
import { P } from '../components/paragraph'
import { ErrorSummary } from '../components/ErrorSummary'
import { Input } from '../components/input'
import { Field } from '../components/Field'

const validate = values => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  if (
    values.email !== '' &&
    !new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(values.email)
  ) {
    errors.email = 'contactinfoForm.email.warning'
  }
  if (values.phone !== '' && !new RegExp(/^\d{10}$/).test(values.phone)) {
    errors.phone = 'contactinfoForm.phone.warning'
  }

  return errors
}

export const ContactInfoForm = ({ onSubmit }) => {
  const [data, dispatch] = useStateValue()
  let contactInfo
  if (typeof data.formData.contactInfo === 'undefined') {
    contactInfo = { fullName: '', email: '', phone: '' }
    dispatch({
      type: 'saveFormData',
      data: { contactInfo },
    })
  } else contactInfo = data.formData.contactInfo

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="contactinfoForm.email.warning" />
          <Trans id="contactinfoForm.phone.warning" />
        </div>
      ) : null}
      <Form
        initialValues={contactInfo}
        onSubmit={onSubmit}
        validate={validate}
        render={({
          handleSubmit,
          values,
          errors,
          submitFailed,
          hasValidationErrors,
        }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            {submitFailed && hasValidationErrors ? (
              <ErrorSummary onSubmit={handleSubmit} errors={errors} />
            ) : null}
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
            <Field
              name="fullName"
              label={<Trans id="contactinfoPage.fullName" />}
              component={Input}
            />
            {props => (
              <TextInput
                id="fullName"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            )}

            <Field
              name="email"
              label={<Trans id="contactinfoPage.emailAddress" />}
              component={Input}
            />
            {props => (
              <TextInput
                id="email"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            )}

            <Field
              name="phone"
              label={<Trans id="contactinfoPage.phoneNumber" />}
              component={Input}
            />
            {props => (
              <TextInput
                id="phone"
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
              />
            )}

            <NextAndCancelButtons
              next={<Trans id="contactinfoPage.nextInfo" />}
              button={<Trans id="contactinfoPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
