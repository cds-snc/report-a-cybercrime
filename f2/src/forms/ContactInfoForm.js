/** @jsx jsx */
import React from 'react'
import addrs from 'email-addresses'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { ErrorSummary } from '../components/ErrorSummary'
import { Input } from '../components/input'
import { Field } from '../components/Field'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'
import { formDefaults } from './defaultValues'
import { containsData } from '../utils/containsData'
import { Flex, Icon } from '@chakra-ui/core'
import { P } from '../components/paragraph'
import { Button } from '../components/button'
import { Link as ReactRouterLink } from 'react-router-dom'

export const validate = (values) => {
  const errors = {}

  // from https://www.w3resource.com/javascript/form/phone-no-validation.php
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

  // build up a bool that returns false if key does not exist in values or if containsData(key) returns false, or if data is not valid
  const phone =
    'phone' in values &&
    containsData(values.phone) &&
    new RegExp(phoneRegex).test(values.phone)
  const email =
    'email' in values &&
    containsData(values.email) &&
    addrs(values.email) !== null

  //condition for an error to occur: append a lingui id to the list of error

  if (!values.fullName || values.fullName === '')
    errors.fullName = 'contactinfoForm.fullName.warning'

  //!(email || phone) If either phone or email is not false
  if (!(email || phone)) {
    errors.email = 'contactinfoForm.email.warning'
  }

  if (!(email || phone)) {
    errors.phone = 'contactinfoForm.phone.warning'
  }

  return errors
}

export const ContactInfoForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.contactInfo))
      props.onSubmit({ ...data, phone: formatPhoneNumber(data.phone) })
  }

  const [data] = useStateValue()
  const contactInfo = {
    ...formDefaults.contactInfo,
    ...data.formData.contactInfo,
  }

  const { fyiForm } = data.formData

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="contactInfoPage.victimDetail" />
        </div>
      ) : null}
      <Form
        initialValues={contactInfo}
        onSubmit={localOnSubmit}
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
              <ErrorSummary>
                <Trans id="contactinfoPage.hasValidationErrors" />
              </ErrorSummary>
            ) : null}
            {fyiForm ? (
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
                  <Trans id="locationinfoPage.skipButton" />
                  <Icon
                    focusable="false"
                    ml={2}
                    mr={-2}
                    name="chevron-right"
                    size="28px"
                  />
                </Button>
              </Flex>
            ) : null}
            <Field
              name="fullName"
              label={<Trans id="contactinfoPage.fullName" />}
              errorMessage={<Trans id="contactinfoForm.fullName.warning" />}
              component={Input}
              required={!fyiForm}
            />

            <Field
              name="email"
              label={<Trans id="contactinfoPage.emailAddress" />}
              errorMessage={<Trans id="contactinfoForm.email.warning" />}
              component={Input}
              required={!fyiForm}
            />
            <Field
              name="phone"
              label={<Trans id="contactinfoPage.phoneNumber" />}
              helperText={<Trans id="contactinfoForm.phone.warning" />}
              errorMessage={<Trans id="contactinfoForm.phone.warning" />}
              component={Input}
              required={!fyiForm}
            />
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
