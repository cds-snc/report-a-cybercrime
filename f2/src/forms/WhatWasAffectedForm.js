import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FormControl, Stack, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { P } from '../components/paragraph'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'
import { FormLabel } from '../components/FormLabel'
import { ConditionalForm } from '../components/container'
import { TextInput } from '../components/TextInput'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const validate = values => {
  const errors = {}
  if (!values.affectedOptions || values.affectedOptions.length < 1) {
    errors.affectedOptions = 'Select at least one option'
  }
  return errors
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
    ...data.formData.whatWasAffected,
    optionOther: '',
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
          <Trans id="whatWasAffectedForm.expectations" />
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
        render={({ handleSubmit, values, errors }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <FormArrayControl
              name="affectedOptions"
              label={<Trans id="whatWasAffectedForm.optionsTitle" />}
              helperText={<Trans id="whatWasAffectedForm.optionsHelpText" />}
              errorMessage={<Trans id="whatWasAffectedForm.warning" />}
            >
              {affectedOptions.map(key => {
                return (
                  <React.Fragment key={key}>
                    <CheckboxAdapter
                      name="affectedOptions"
                      value={key}
                      isChecked={whatWasAffected.affectedOptions.includes(key)}
                    >
                      {i18n._(key)}
                    </CheckboxAdapter>
                  </React.Fragment>
                )
              })}
              {showWarning ? (
                <Control>
                  <Alert status="warning">
                    <AlertIcon />
                    <Trans id="whatWasAffectedForm.warning" />
                  </Alert>
                </Control>
              ) : null}
            </FormArrayControl>
            <P>
              <Trans id="whatWasAffectedForm.expectations" />
            </P>
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
