import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { FormControl, Stack, Box } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'

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

export const WhatWasAffectedForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const whatWasAffected = {
    affectedOptions: [],
    ...data.formData.whatWasAffected,
  }

  const affectedOptions = [
    'whatWasAffectedForm.financial',
    'whatWasAffectedForm.personal_information',
    'whatWasAffectedForm.devices',
    'whatWasAffectedForm.business_assets',
    'whatWasAffectedForm.other',
  ]
  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="whatWasAffectedForm.financial" />
          <Trans id="whatWasAffectedForm.personal_information" />
          <Trans id="whatWasAffectedForm.devices" />
          <Trans id="whatWasAffectedForm.business_assets" />
          <Trans id="whatWasAffectedForm.other" />
        </div>
      ) : null}

      <Form
        initialValues={whatWasAffected}
        onSubmit={props.onSubmit}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Control as="fieldset" name="affectedOptions">
              <FormLabel as="legend" htmlFor="affectedOptions" mb={2}>
                <Trans id="whatWasAffectedForm.optionsTitle" />
              </FormLabel>
              <FormHelperText>
                <Trans id="whatWasAffectedForm.optionsHelpText" />
              </FormHelperText>

              <Stack spacing={4} shouldWrapChildren>
                {affectedOptions.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxArrayControl
                        name="affectedOptions"
                        value={key}
                        isChecked={whatWasAffected.affectedOptions.includes(
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

            <NextAndCancelButtons>
              <Trans id="whatWasAffectedForm.nextButton" />
            </NextAndCancelButtons>
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

WhatWasAffectedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
