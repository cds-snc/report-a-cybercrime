/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
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
  const [data] = useStateValue()
  const contactInfo = {
    ...data.formData.contactInfo,
  }

  const fullName = ContactInfoFormSchema.CONTACT_INFO.fullName
  const email = ContactInfoFormSchema.CONTACT_INFO.email
  const phone = ContactInfoFormSchema.CONTACT_INFO.phone

  const createErrorSummary = ContactInfoFormSchema.CREATE_ERROR_SUMMARY

  const { fyiForm } = data.formData

  const validationSchema = fyiForm
    ? ContactInfoFormSchema.ON_SUBMIT_FYI_VALIDATION
    : ContactInfoFormSchema.ON_SUBMIT_VALIDATION

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="contactInfoPage.victimDetail" />
        </div>
      ) : null}
      <Formik
        initialValues={contactInfo}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.onSubmit(values)
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
                {fyiForm ? (
                  <React.Fragment>
                    <P w="100%">
                      <Trans id="contactinfoPage.skipInfo" />
                    </P>
                    <SkipButton
                      label={<Trans id="locationinfoPage.skipButton" />}
                      to="/confirmation"
                    />
                  </React.Fragment>
                ) : null}
                <br />
                <br />
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
