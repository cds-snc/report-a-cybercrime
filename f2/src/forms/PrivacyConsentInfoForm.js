import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { Text } from '../components/text'
import { FormControl, Stack, Box } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { useStateValue } from '../utils/state'
import { P } from '../components/paragraph'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const CheckboxArrayControl = ({ name, value, defaultIsChecked, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
    defaultIsChecked,
  })

  return (
    <Checkbox
      {...input}
      isChecked={checked}
      validate={required}
      isInvalid={error && touched}
    >
      {children}
    </Checkbox>
  )
}

const validate = values => {
  console.log(values)
  const errors = {}
  if (values.consentOptions.length === 0) {
    errors.consentOptions = 'Required'
  }
  return errors
}

const required = value => (value ? undefined : 'Required')

export const PrivacyConsentInfoForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const whetherConsent = {
    consentOptions: [],
    ...data.formData.whetherConsent,
  }

  let showWarning = false

  const consentOptions = ['privacyConsentInfoForm.yes']
  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="privacyConsentInfoForm.yes" />
        </div>
      ) : null}

      <Form
        initialValues={whetherConsent}
        onSubmit={props.onSubmit}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Field name="check one" validate={required}>
              {({ input, meta }) => (
                <div>
                  <Checkbox {...input}>
                    <label>Check 1</label>

                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </Checkbox>
                </div>
              )}
            </Field>

            <Control as="fieldset" name="consentOptions">
              <FormHelperText>
                <Trans id="privacyConsentInfoForm.optionsHelpText" />
              </FormHelperText>
              <Stack spacing={4} shouldWrapChildren>
                {consentOptions.map(key => {
                  return (
                    <Box key={key}>
                      <Field
                        type="checkbox"
                        name="consentOptions"
                        value={key}
                        isChecked={whetherConsent.consentOptions.includes(key)}
                        validate={required}
                      >
                        {({ input, meta }) => (
                          <div>
                            <Checkbox {...input}>
                              <label> {i18n._(key)}</label>

                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </Checkbox>
                          </div>
                        )}
                      </Field>

                      <CheckboxArrayControl
                        name="consentOptions"
                        value={key}
                        isChecked={whetherConsent.consentOptions.includes(key)}
                        validate={required}
                      >
                        {i18n._(key)}
                      </CheckboxArrayControl>
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            {showWarning ? (
              <Text>
                <Trans id="privacyConsentInfoForm.warning" />
              </Text>
            ) : null}
            <P>
              <Trans id="privacyConsentInfoForm.nextPage" />
            </P>
            <NextAndCancelButtons>
              <Trans id="privacyConsentInfoForm.nextButton" />
            </NextAndCancelButtons>
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

PrivacyConsentInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
