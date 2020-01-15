import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { FormControl, Stack, Box } from '@chakra-ui/core'
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
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
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

  const consentOptions = [
    'privacyConsentInfoForm.yes',
  ]
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
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Control as="fieldset" name="consentOptions">
              <P>    
                <Trans id="privacyConsentInfoForm.optionsHelpText" />
                </P>
              <Stack spacing={4} shouldWrapChildren>
                {consentOptions.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxArrayControl
                        name="consentOptions"
                        value={key}
                        isChecked={whetherConsent.consentOptions.includes(
                          key,
                        )}
                      >
                        {i18n._(key)}
                      </CheckboxArrayControl>
                    </Box>
                  )
                })}
              </Stack>
            </Control>

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
 
      