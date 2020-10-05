/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { P } from '../components/formik/paragraph'
import { Form, Container, Row } from 'react-bootstrap'
import { formDefaults } from './defaultValues'
import { Formik, FieldArray, Field } from 'formik'
import { Input } from '../components/formik/input'
import { SkipButton, NextCancelButtons } from '../components/formik/button'
import { FormRow } from '../components/formik/row'
import { ErrorSummary } from '../components/formik/alert'
import { ContactInfoFormSchema } from './ContactInfoFormSchema'

export const ContactInfoForm = (props, values) => {
  const [data] = useStateValue()
  const contactInfo = {
    ...formDefaults.contactInfo,
    ...data.formData.contactInfo,
  }

  const fullName = ContactInfoFormSchema.CONTACT_INFO.fullName
  const email = ContactInfoFormSchema.CONTACT_INFO.email
  const phone = ContactInfoFormSchema.CONTACT_INFO.phone

  const onSubmitValidation = ContactInfoFormSchema.ON_SUBMIT_VALIDATION
  const createErrorSummary = ContactInfoFormSchema.CREATE_ERROR_SUMMARY

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="contactInfoPage.victimDetail" />
        </div>
      ) : null}
      <Formik
        initialValues={contactInfo}
        validate={onSubmitValidation}
        validateOnChange={false}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, errors, submitCount }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <FormRow marginBottom="2rem">
                {Object.keys(errors).length > 0 && (
                  <ErrorSummary
                    errors={createErrorSummary(errors)}
                    submissions={submitCount}
                    title={<Trans id="contactinfoPage.hasValidationErrors" />}
                  />
                )}
              </FormRow>

              <FormRow marginBottom="2rem">
                <P w="100%" marginBottom="1rem">
                  <Trans id="contactinfoPage.skipInfo" />
                </P>
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
                            {fullName.errorMessage}
                          </P>
                        )}
                        <Field
                          name={'fullName'}
                          label={<Trans id="contactinfoPage.fullName" />}
                          component={Input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="fullName"
                        />
                        {errors && errors.email && (
                          <P
                            color="#dc3545"
                            fontSize="1.25rem"
                            marginBottom="0.5rem"
                          >
                            {email.errorMessage}
                          </P>
                        )}
                        <Field
                          name={'email'}
                          label={<Trans id="contactinfoPage.emailAddress" />}
                          component={Input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="email"
                        />
                        {errors && errors.phone && (
                          <P
                            color="#dc3545"
                            fontSize="1.25rem"
                            marginBottom="0.5rem"
                          >
                            {phone.errorMessage}
                          </P>
                        )}
                        <Field
                          name={'phone'}
                          label={<Trans id="contactinfoPage.phoneNumber" />}
                          component={Input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="phone"
                        />
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
