/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { P } from '../components/paragraph'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field } from 'formik'
import { TextArea } from '../components/formik/textArea'
import { SkipButton, NextCancelButtons } from '../components/formik/button'
import { Flex, Icon } from '@chakra-ui/core'
import { ErrorSummary } from '../components/formik/alert'
import { ContactInfoFormSchema } from './ContactInfoFormSchema'
import { Link as ReactRouterLink } from 'react-router-dom'

export const ContactInfoForm = (props) => {
  const [data] = useStateValue()
  const contactInfo = {
    ...data.formData.contactInfo,
  }
  const enterContactDetails =
    ContactInfoFormSchema.CONTACT_INFO.enterContactDetails // .QUESTIONS.incidentFrequency

  const fullName = ContactInfoFormSchema.CONTACT_INFO.fullName
  const email = ContactInfoFormSchema.CONTACT_INFO.email
  const phone = ContactInfoFormSchema.CONTACT_INFO.phone

  const onSubmitValidation = ContactInfoFormSchema.ON_SUBMIT_VALIDATION
  const onSubmitFYIValidation = ContactInfoFormSchema.ON_SUBMIT_FYI_VALIDATION
  const createErrorSummary = ContactInfoFormSchema.CREATE_ERROR_SUMMARY

  const { fyiForm } = data.formData

  return (
    <React.Fragment>
      <Formik
        initialValues={contactInfo}
        onSubmit={async (values, { setErrors }) => {
          const errors = !fyiForm
            ? onSubmitValidation(values)
            : onSubmitFYIValidation(values)
          if (errors.fields) {
            setErrors(errors.fields)
          } else {
            props.onSubmit(values)
          }
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, errors, submitCount }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-section">
                {Object.keys(errors).length > 0 && (
                  <ErrorSummary
                    errors={createErrorSummary(errors)}
                    submissions={submitCount}
                    title={<Trans id="contactinfoPage.hasValidationErrors" />}
                  />
                )}

                {errors && errors.fullName && (
                  <P color="#dc3545" fontSize="1.25rem" marginBottom="0.5rem">
                    {fullName.errorMessage}
                  </P>
                )}
                {errors && errors.email && (
                  <P color="#dc3545" fontSize="1.25rem" marginBottom="0.5rem">
                    {email.errorMessage}
                  </P>
                )}
                {errors && errors.phone && (
                  <P color="#dc3545" fontSize="1.25rem" marginBottom="0.5rem">
                    {phone.errorMessage}
                  </P>
                )}

                <br />
                <br />

                {fyiForm ? (
                  <Flex direction="row" align="center" wrap="wrap" mb={10}>
                    <P w="100%">
                      <Trans id="contactinfoPage.skipInfo" />
                    </P>
                    <SkipButton
                      label={<Trans id="locationinfoPage.skipButton" />}
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
                    </SkipButton>
                  </Flex>
                ) : null}

                <FieldArray
                  name="contactInfo"
                  className="form-section"
                  render={() => {
                    return (
                      <React.Fragment>
                        <Field
                          name={'fullName'}
                          label={<Trans id="contactinfoPage.fullName" />}
                          component={TextArea}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <Field
                          name={'email'}
                          label={<Trans id="contactinfoPage.emailAddress" />}
                          component={TextArea}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <Field
                          name={'phone'}
                          label={<Trans id="contactinfoPage.phoneNumber" />}
                          component={TextArea}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </React.Fragment>
                    )
                  }}
                />
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="contactinfoPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="contactinfoPage.nextInfo" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
