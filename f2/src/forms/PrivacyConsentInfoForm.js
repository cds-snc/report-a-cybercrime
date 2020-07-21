import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { A } from '../components/link'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { useLingui } from '@lingui/react'
import { ErrorSummary } from '../components/ErrorSummary'
import { formDefaults } from './defaultValues'

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
    ...formDefaults.consent,
    ...data.formData.consent,
  }
  const consentOptions = ['privacyConsentInfoForm.yes']
  const { fyiForm }  = data.formData

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="privacyConsentInfoForm.yes" />
          <Trans id="privacyConsentInfoForm.consent" />
        </div>
      ) : null}

      <Form
        initialValues={whetherConsent}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
        validate={validate}
        render={({
          handleSubmit,
          values,
          errors,
          submitFailed,
          hasValidationErrors,
        }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            {submitFailed && hasValidationErrors ? (
              <ErrorSummary>
                <Trans id="privacyConsentInfoForm.hasValidationErrors" />
              </ErrorSummary>
            ) : null}

            <FormArrayControl
              name="consentOptions"
              errorMessage={<Trans id="privacyConsentInfoForm.warning" />}
            >
              {consentOptions.map((key) => {
                return (
                  <React.Fragment key={key}>
                    <CheckboxAdapter name="consentOptions" value={key}>
                      <Trans id="privacyConsentInfoForm.yes" />
                      <A
                        href={'/privacystatement?lang=' + i18n.locale}
                        isExternal
                      >
                        <Trans id="privacyConsentInfoForm.linkOut" />
                      </A>
                      <Trans id="privacyConsentInfoForm.period" />
                    </CheckboxAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>
            <NextAndCancelButtons
              next={ fyiForm ? <Trans id="fyiForm.nextPage1" /> : <Trans id="privacyConsentInfoForm.nextPage" /> }
              button={<Trans id="privacyConsentInfoForm.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

PrivacyConsentInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
