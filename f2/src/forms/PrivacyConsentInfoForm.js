import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { A } from '../components/formik/link'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { NextCancelButtons } from '../components/formik/button'
import { useLingui } from '@lingui/react'
import { ErrorSummary } from '../components/formik/alert'
import { PrivacyConsentInfoFormSchema } from './PrivacyConsentInfoFormSchema'

const createErrorSummary = (errors) => {
  const errorSummary = {}
  if (errors.consentOptions) {
    errorSummary['consentOptions'] = {
      label: <Trans id="privacyConsentInfoPage.linkOut" />,
      message: <Trans id="privacyConsentInfoForm.newWarning" />,
    }
  }
  return errorSummary
}

export const PrivacyConsentInfoForm = (props) => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const whetherConsent = {
    ...data.formData.consent,
  }
  const { fyiForm } = data.formData

  return (
    <Formik
      initialValues={whetherConsent}
      onSubmit={(values) => {
        props.onSubmit(values)
      }}
      validationSchema={PrivacyConsentInfoFormSchema()}
    >
      {({ handleSubmit, handleChange, handleBlur, errors, submitCount }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row classname="form-question">
              {Object.keys(errors).length > 0 && (
                <ErrorSummary
                  errors={createErrorSummary(errors)}
                  submissions={submitCount}
                  title={
                    <Trans id="privacyConsentInfoForm.hasValidationErrors" />
                  }
                />
              )}
            </Row>
            <Row className="form-section">
              <Field
                name="consentOptions"
                label={
                  <Trans id="privacyConsentInfoForm.yes.withExternalLink">
                    <A
                      color="#0000ff"
                      target="_blank"
                      href={'/privacystatement?lang=' + i18n.locale}
                    />
                  </Trans>
                }
                component={CheckBox}
                value="privacyConsentInfoForm.yes"
                onChange={handleChange}
                onBlur={handleBlur}
                type="checkbox"
                id="consentOptions"
              ></Field>
            </Row>
            <Row>
              <NextCancelButtons
                submit={<Trans id="privacyConsentInfoForm.nextButton" />}
                cancel={<Trans id="button.cancelReport" />}
                label={
                  fyiForm ? (
                    <Trans id="fyiForm.nextPage1" />
                  ) : (
                    <Trans id="privacyConsentInfoForm.nextPage" />
                  )
                }
              />
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  )
}
