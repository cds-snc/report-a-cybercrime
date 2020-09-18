import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { A } from '../components/formik/link'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { NextCancelButtons } from '../components/formik/button'
import { Error } from '../components/formik/alert'
import { PrivacyConsentInfoFormSchema } from './PrivacyConsentInfoFormSchema'

export const PrivacyConsentInfoForm = (props) => {
  const [data] = useStateValue()
  const whetherConsent = {
    ...data.formData.consent,
  }

  return (
    <Formik
      initialValues={whetherConsent}
      onSubmit={(values) => {
        props.onSubmit(values)
      }}
      validationSchema={PrivacyConsentInfoFormSchema()}
    >
      {({ handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row className="form-question">
              <ErrorMessage name="consentOptions" component={Error} />
            </Row>
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
