import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { A } from '../components/formik/link'
import { useLingui } from '@lingui/react'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { Warning } from '../components/formik/alert'
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
                label={
                  <Trans id="privacyConsentInfoForm.yes.withExternalLink">
                    <A
                      color="#0000ff"
                      target="_blank"
                      href={'/privacystatement?lang=en'}
                    />
                  </Trans>
                }
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
