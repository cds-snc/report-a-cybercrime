/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { P, ErrorText } from '../components/formik/paragraph'
import { Form, Container, Row } from 'react-bootstrap'
import { formDefaults } from './defaultValues'
import { Formik, FieldArray, Field } from 'formik'
import { Input } from '../components/formik/input'
import { SkipButton, NextCancelButtons } from '../components/formik/button'
import { FormRow } from '../components/formik/row'
import { ErrorSummary } from '../components/formik/alert'
import { ContactInfoFormSchema } from './ContactInfoFormSchema'
import { WarningModal } from '../components/formik/warningModal'

export const ContactInfoForm = (props) => {
  const [, dispatch] = useStateValue()
  const [data] = useStateValue()
  const contactInfo = {
    ...formDefaults.contactInfo,
    ...data.formData.contactInfo,
  }

  const fullName = ContactInfoFormSchema.CONTACT_INFO.fullName
  const email = ContactInfoFormSchema.CONTACT_INFO.email
  const phone = ContactInfoFormSchema.CONTACT_INFO.phone

  const createErrorSummary = ContactInfoFormSchema.CREATE_ERROR_SUMMARY

  const validationSchema = ContactInfoFormSchema.ON_SUBMIT_VALIDATION

  function RemoveData() {
    return dispatch({
      type: 'saveFormData',
      data: {
        contactInfo: {
          fullName: '',
          email: '',
          phone: '',
        },
      },
    })
  }

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
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          submitCount,
          dirty,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <WarningModal dirty={dirty} isSubmitting={isSubmitting} />
            {Object.keys(errors).length > 0 && (
              <ErrorSummary
                errors={createErrorSummary(errors)}
                submissions={submitCount}
                title={<Trans id="contactinfoPage.hasValidationErrors" />}
              />
            )}
            <Container>
              <FormRow>
                <P w="100%">
                  <Trans id="contactinfoPage.skipInfo" />
                </P>
              </FormRow>
              <FormRow marginBottom="2rem">
                <SkipButton
                  label={<Trans id="contactinfoPage.skipButton" />}
                  onClick={() => {
                    RemoveData()
                  }}
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
                          <ErrorText>{fullName.errorMessage}</ErrorText>
                        )}
                        <Field
                          name="fullName"
                          label={<Trans id="contactinfoPage.fullName" />}
                          component={Input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="fullName"
                        />
                        {errors.emailOrPhone && (
                          <Container>
                            <FormRow id="emailOrPhone">
                              <ErrorText>
                                <Trans id="contactinfoForm.emailORphone.warning" />
                              </ErrorText>
                            </FormRow>
                          </Container>
                        )}
                        {errors.email && (
                          <ErrorText>{email.errorMessage}</ErrorText>
                        )}
                        <Field
                          name="email"
                          label={<Trans id="contactinfoPage.emailAddress" />}
                          component={Input}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="email"
                        />
                        {errors.phone && (
                          <ErrorText>{phone.errorMessage}</ErrorText>
                        )}
                        <Field
                          name="phone"
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
