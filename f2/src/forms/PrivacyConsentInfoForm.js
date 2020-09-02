import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
//import { Form } from 'react-final-form'
//import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
//import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { A } from '../components/link'
//import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { useLingui } from '@lingui/react'
import { ErrorSummary } from '../components/ErrorSummary'
//import { formDefaults } from './defaultValues'

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
    //...formDefaults.consent,
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
                //   href={'/privacystatement?lang=' + i18n.locale}
                //   isExternal

                //   <Trans id="privacyConsentInfoForm.linkOut" />
                // </A>
                // <Trans id="privacyConsentInfoForm.period" />
                //   }

                component={CheckBox}
                value="privacyConsentInfoForm.yes"
                onChange={handleChange}
                onBlur={handleBlur}
                type="checkbox"
                id="checkbox-consent-option"
              >
                <Warning>
                  <Trans id="privacyConsentInfoForm.warning" />
                </Warning>
              </Field>
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

{
  /* 
PrivacyConsentInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
} */
}
