/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { P } from '../components/formik/paragraph'
import { Form, Container, Row, Col } from 'react-bootstrap'
import { formDefaults } from './defaultValues'
import { Formik, FieldArray, Field } from 'formik'
import { Input } from '../components/formik/input'
import { SkipButton, NextCancelButtons } from '../components/formik/button'
import { FormRow } from '../components/formik/row'
import { ErrorSummary } from '../components/formik/alert'
import { ContactInfoFormSchema } from './ContactInfoFormSchema'

export const ContactInfoForm = (props) => {
  const [data] = useStateValue()
  const contactInfo = {
    ...formDefaults.contactInfo,
    ...data.formData.contactInfo,
  }

  const FULL_NAME = ContactInfoFormSchema.CONTACT_INFO.fullName
  const EMAIL = ContactInfoFormSchema.CONTACT_INFO.email
  const PHONE = ContactInfoFormSchema.CONTACT_INFO.phone
  const EXTENSION = ContactInfoFormSchema.CONTACT_INFO.extension

  const createErrorSummary = ContactInfoFormSchema.CREATE_ERROR_SUMMARY

  const validationSchema = ContactInfoFormSchema.ON_SUBMIT_VALIDATION

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="contactInfoPage.victimDetail" />
        </div>
      ) : null}
      <Formik
        initialValues={contactInfo}
        validate={validationSchema}
        validateOnChange={false}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, errors, submitCount }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <FormRow>
                {Object.keys(errors).length > 0 && (
                  <ErrorSummary
                    errors={createErrorSummary(errors)}
                    submissions={submitCount}
                    title={<Trans id="contactinfoPage.hasValidationErrors" />}
                  />
                )}
              </FormRow>
              <FormRow>
                <P w="100%">
                  <Trans id="contactinfoPage.skipInfo" />
                </P>
              </FormRow>
              <FormRow marginBottom="2rem">
                <SkipButton
                  label={<Trans id="contactinfoPage.skipButton" />}
                  to="/confirmation"
                />
              </FormRow>
              <FormRow>
                <FieldArray
                  name="contactInfo"
                  className="form-section"
                  render={() => {
                    return (
                      <React.Fragment>
                        {errors && errors.fullName && (
                          <P
                            color="#dc3545"
                            fontSize="1.25rem"
                            marginBottom="0.5rem"
                          >
                            {FULL_NAME.errorMessage}
                          </P>
                        )}
                        <Field
                          name={FULL_NAME.name}
                          label={FULL_NAME.label}
                          component={Input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="fullName"
                        />
                        {errors.emailOrPhone && (
                          <P
                            color="#dc3545"
                            fontSize="1.25rem"
                            marginBottom="0.5rem"
                          >
                            <Trans id="contactinfoForm.emailORphone.warning" />
                          </P>
                        )}
                        {errors.email && (
                          <P
                            color="#dc3545"
                            fontSize="1.25rem"
                            marginBottom="0.5rem"
                          >
                            {EMAIL.errorMessage}
                          </P>
                        )}
                        <Field
                          name={EMAIL.name}
                          label={EMAIL.label}
                          component={Input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="email"
                        />
                        {errors.phone && (
                          <P
                            color="#dc3545"
                            fontSize="1.25rem"
                            marginBottom="0.5rem"
                          >
                            {PHONE.errorMessage}
                          </P>
                        )}
                        {errors.extension && (
                          <P
                            color="#dc3545"
                            fontSize="1.25rem"
                            marginBottom="0.5rem"
                          >
                            {EXTENSION.errorMessage}
                          </P>
                        )}
                        <FormRow>
                          <Col>
                            <Field
                              name={PHONE.name}
                              label={PHONE.label}
                              component={Input}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="phone"
                            />
                          </Col>
                          <Col lg="4">
                            <Field
                              name={EXTENSION.name}
                              label={EXTENSION.label}
                              component={Input}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              id="extension"
                            />
                          </Col>
                        </FormRow>
                      </React.Fragment>
                    )
                  }}
                />
              </FormRow>
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
