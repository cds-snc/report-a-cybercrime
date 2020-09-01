/** @jsx jsx */
import React from 'react'
import addrs from 'email-addresses'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Input } from '../components/input'
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
  const [data] = useStateValue()
  const contactInfo = {
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

  const { fyiForm } = data.formData

  return (
    <React.Fragment>
      <Formik
        initialValues={contactInfo}
        validationSchema={ContactInfoFormSchema()}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-section">
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
