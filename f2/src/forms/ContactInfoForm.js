/** @jsx jsx */
import React from 'react'
import addrs from 'email-addresses'
//import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
//import { Form } from 'react-final-form'
//import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
//import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
//import { ErrorSummary } from '../components/ErrorSummary'
import { Input } from '../components/input'
//import { Field } from '../components/Field'
//import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
//import { formatPhoneNumber } from '../utils/formatPhoneNumber'
//import { formDefaults } from './defaultValues'
import { containsData } from '../utils/containsData'
import { Flex, Icon } from '@chakra-ui/core'
import { P } from '../components/paragraph'
import { Button } from '../components/button'
import { Link as ReactRouterLink } from 'react-router-dom'

import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { TextArea } from '../components/formik/textArea'
import { NextCancelButtons } from '../components/formik/button'
import { Error, Info } from '../components/formik/alert'
import { ContactInfoFormSchema } from './ContactInfoFormSchema'

export const validate = (values) => {
  const errors = {}

  // from https://www.w3resource.com/javascript/form/phone-no-validation.php
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

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

  if (!(email && addrs(values.email)) && !phone) {
    errors.email = 'contactinfoForm.email.warning'
    errors.phone = 'contactinfoForm.phone.warning'
  }

  return errors
}

const fyiValidate = (values) => {
  const errors = {}

  if (values.email && !addrs(values.email)) {
    errors.email = 'contactinfoForm.email.warning'
  }

  return errors
}

export const ContactInfoForm = (props) => {
  // const localOnSubmit = (data) => {
  //   if (clientFieldsAreValid(data, formDefaults.contactInfo))
  //     props.onSubmit({ ...data, phone: formatPhoneNumber(data.phone) })
  // }

  const [data] = useStateValue()
  const contactInfo = {
    //...formDefaults.contactInfo,
    ...data.formData.contactInfo,
  }

  const contactFormOptions = [
    {
      name: 'fullName',
      label: <Trans id="contactinfoPage.fullName" />,
      helpText: <Trans id="contactinfoForm.fullName.warning" />,
    },
    {
      name: 'email',
      label: <Trans id="contactinfoPage.emailAddress" />,
      helpText: <Trans id="contactinfoForm.email.warning" />,
    },
    {
      name: 'phone',
      label: <Trans id="contactinfoPage.phoneNumber" />,
      helpText: <Trans id="contactinfoForm.phone.warning" />,
    },
  ]

  //onst formOptions = [

  const { fyiForm } = data.formData

  return (
    <React.Fragment>
      <Formik
        initialValues={contactInfo}
        validationSchema={ContactInfoFormSchema()}
        onSubmit={(values) => {
          // contactFormOptions.forEach((question) => {
          //   if (!values.ContactInfoForm.includes(question.name)) {
          //     values[question.name] = ''
          //   }
          // })
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-section">
                name="suspectClues" className="form-section" render=
                {() => {
                  //formOptions.map((question) => {
                  return (
                    <React.Fragment>
                      <Field
                        name={'fullName'} //question.name
                        label={<Trans id="contactinfoPage.fullName" />} // question.questionLabel
                        helpText={
                          <Trans id="contactinfoForm.fullName.warning" />
                        } // question.helpText
                        component={CheckBox}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </React.Fragment>
                  )
                  //})
                }}
              </Row>
              <Info>
                <Trans id="howDidItStartPage.tip" />
              </Info>

              {/* <Field
                  name="fullName"
                  label={<Trans id="contactinfoPage.fullName" />}
                  errorMessage={<Trans id="contactinfoForm.fullName.warning" />}
                  component={Input}
                  required={!fyiForm}
                />
                </Field> */}

              <Row>
                <NextCancelButtons
                  submit={<Trans id="contactinfoPage.nextButton" />} //howDidItStartPage.nextButton
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="contactinfoPage.nextInfo" />}
                />
              </Row>

              {/* //</Form>/next={<Trans id="contactinfoPage.nextInfo" />}
              //</Formik>button={<Trans id="contactinfoPage.nextButton" />} */}
            </Container>
          </Form>
        )}
      </Formik>
      {/* {false ? ( // mark ids for lingui
        <div>
          <Trans id="contactInfoPage.victimDetail" />
        </div>
      ) : null}
      <Form
        initialValues={contactInfo}
        onSubmit={localOnSubmit}
        validate={(values) => {
          if (fyiForm) {
            return fyiValidate(values)
          } else {
            return validate(values)
          }
        }}
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
        )*/}
    </React.Fragment>
  )
}

// ContactInfoForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }
