import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FormControl, Stack, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const validate = () => {
  return {}
}

export const PrivacyConsentInfoForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const whetherConsent = {
    consentOptions: [],
    ...data.formData.whetherConsent,
  }
  const consentOptions = ['privacyConsentInfoForm.yes']
  let showWarning = false

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="privacyConsentInfoForm.yes" />
        </div>
      ) : null}

      <Form
        initialValues={whetherConsent}
        onSubmit={values => {
          if (values.consentOptions.length === 0) {
            showWarning = true
          } else {
            props.onSubmit(values)
          }
        }}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Control as="fieldset" name="consentOptions">
              <Stack spacing={4} shouldWrapChildren>
                <FormArrayControl name="consentOptions">
                  {consentOptions.map(key => {
                    return (
                      <React.Fragment key={key}>
                        <CheckboxAdapter
                          name="consentOptions"
                          value={key}
                          isChecked={whetherConsent.consentOptions.includes(
                            key,
                          )}
                        >
                          {i18n._(key)}
                        </CheckboxAdapter>
                      </React.Fragment>
                    )
                  })}
                  {showWarning ? (
                    <Alert status="warning">
                      <AlertIcon />
                      <Trans id="privacyConsentInfoForm.warning" />
                    </Alert>
                  ) : null}
                </FormArrayControl>
              </Stack>
            </Control>
            <NextAndCancelButtons
              next={<Trans id="privacyConsentInfoForm.nextPage" />}
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
