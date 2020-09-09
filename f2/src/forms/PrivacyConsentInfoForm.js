import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { useLingui } from '@lingui/react'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { NextCancelButtons } from '../components/formik/button'

const validate = (values) => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  if (!values.consentOptions || values.consentOptions.length < 1) {
    errors.consentOptions = 'privacyConsentInfoForm.warning'
  }

  return errors
}

export const PrivacyConsentInfoForm = (props) => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const whetherConsent = {
    ...data.formData.consent,
  }
  //const consentOptions = ['privacyConsentInfoForm.yes']
  const { fyiForm } = data.formData

  return (
    <Formik
      initialValues={whetherConsent}
      onSubmit={(values) => {
        props.onSubmit(values)
      }}
    >
      {({ handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row className="form-section">
              <Field
                name="consentOptions"
                label={<Trans id="privacyConsentInfoForm.yes" />}
                component={CheckBox}
                value="privacyConsentInfoForm.yes"
                onChange={handleChange}
                onBlur={handleBlur}
                type="checkbox"
                id="checkbox-consent-option"
              ></Field>
            </Row>
            <Row>
              <NextCancelButtons
                submit={<Trans id="privacyConsentInfoForm.nextButton" />}
                cancel={<Trans id="button.cancelReport" />}
                label={<Trans id="privacyConsentInfoForm.nextPage" />}
              />
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  )
}
