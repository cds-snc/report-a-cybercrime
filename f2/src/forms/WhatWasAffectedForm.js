import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { FormControl, Stack, Box, Alert, AlertIcon } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { ConditionalForm } from '../components/container'
import { TextInput } from '../components/TextInput'

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

export const whatWasAffectedPages = [
  { key: 'whatWasAffectedForm.financial', url: 'moneylost' },
  { key: 'whatWasAffectedForm.personal_information', url: 'information' },
  { key: 'whatWasAffectedForm.devices', url: 'devices' },
  { key: 'whatWasAffectedForm.business_assets', url: 'business' },
  { key: 'whatWasAffectedForm.other', url: '' },
]

export const WhatWasAffectedForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const whatWasAffected = {
    affectedOptions: [],
    optionOther: '',
    ...data.formData.whatWasAffected,
  }

  const affectedOptions = whatWasAffectedPages.map(page => page.key)
  let showWarning = false

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
        onSubmit={values => {
          if (values.affectedOptions.length === 0) {
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
                      {key === 'whatWasAffectedForm.other' &&
                        values.affectedOptions.includes(
                          'whatWasAffectedForm.other',
                        ) && (
                          <ConditionalForm>
                            <Field name="optionOther">
                              {props => (
                                <FormControl>
                                  <FormLabel htmlFor={key}></FormLabel>
                                  <TextInput
                                    id="optionOther"
                                    name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}
                                  />
                                </FormControl>
                              )}
                            </Field>
                          </ConditionalForm>
                        )}
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            {showWarning ? (
              <Control>
                <Alert status="warning">
                  <AlertIcon />
                  <Trans id="whatWasAffectedForm.warning" />
                </Alert>
              </Control>
            ) : null}
            <NextAndCancelButtons
              next={<Trans id="whatWasAffectedForm.nextPage" />}
              button={<Trans id="whatWasAffectedForm.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

WhatWasAffectedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
