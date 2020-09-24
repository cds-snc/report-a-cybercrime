/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import addrs from 'email-addresses'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { P } from '../components/paragraph'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { TextArea } from '../components/formik/textArea'
import { NextCancelButtons } from '../components/formik/button'
import { Error, Info, ErrorSummary } from '../components/formik/alert'
import { useLingui } from '@lingui/react'
import { ContactInfoFormSchema } from './ContactInfoFormSchema'

const fyiValidate = (values) => {
  const errors = {}

  if (values.email && !addrs(values.email)) {
    errors.email = 'contactinfoForm.email.warning'
  }

  return errors
}

export const ContactInfoForm = (props) => {
  const [data] = useStateValue()
  const contactInfo = {
    ...data.formData.contactInfo,
  }

  const fullName = ContactInfoFormSchema.CONTACT_INFO.fullName

  const onSubmitValidation = ContactInfoFormSchema.ON_SUBMIT_VALIDATION
  const createErrorSummary = ContactInfoFormSchema.CREATE_ERROR_SUMMARY

  const { fyiForm } = data.formData

  return (
    <React.Fragment>
      <Formik
        initialValues={contactInfo}
        onSubmit={async (values, { setErrors }) => {
          const errors = onSubmitValidation(values)
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
                    {'fullName.errorMessage'}
                  </P>
                )}
                <FieldArray
                  name="contactInfo"
                  className="form-section"
                  render={() => {
                    return (
                      <React.Fragment>
                        <Field
                          name={'fullName'} //question.name
                          label={<Trans id="contactinfoPage.fullName" />} // question.questionLabel
                          helpText={
                            <Trans id="contactinfoForm.fullName.warning" />
                          }
                          component={TextArea}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <ErrorMessage name={'fullName'} component={Error} />
                        <Field
                          name={'email'} //question.name
                          label={<Trans id="contactinfoPage.emailAddress" />} // question.questionLabel
                          helpText={
                            <Trans id="contactinfoForm.email.warning" />
                          }
                          component={TextArea}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <ErrorMessage name={'email'} component={Error} />
                        <Field
                          name={'phone'} //question.name
                          label={<Trans id="contactinfoPage.phoneNumber" />} // question.questionLabel
                          helpText={
                            <Trans id="contactinfoForm.phone.warning" />
                          }
                          component={TextArea}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <ErrorMessage name={'phone'} component={Error} />
                      </React.Fragment>
                    )
                  }}
                />
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="contactinfoPage.nextButton" />} //howDidItStartPage.nextButton
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
