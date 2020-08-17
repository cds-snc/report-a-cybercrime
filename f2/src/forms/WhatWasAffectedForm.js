import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { ErrorSummary } from '../components/ErrorSummary'
import { Text } from '../components/text'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'

const validate = (values) => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  if (!values.affectedOptions || values.affectedOptions.length < 1) {
    errors.affectedOptions = 'whatWasAffectedForm.warning'
  }
  return errors
}

export const whatWasAffectedPages = [
  {
    key: 'whatWasAffectedForm.financial',
    url: 'moneylost',
  },
  {
    key: 'whatWasAffectedForm.personalInformation',
    url: 'information',
  },
  { key: 'whatWasAffectedForm.devices', url: 'devices' },
  { key: 'whatWasAffectedForm.business_assets', url: 'business' },
  { key: 'whatWasAffectedForm.other', url: '' },
]

export const WhatWasAffectedForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whatWasAffected))
      props.onSubmit(data)
  }

  const { i18n } = useLingui()
  const [data] = useStateValue()
  const whatWasAffected = {
    ...formDefaults.whatWasAffected,
    ...data.formData.whatWasAffected,
  }

  const affectedOptions = whatWasAffectedPages.map((page) => page.key)

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="whatWasAffectedForm.financial" />
          <Trans id="whatWasAffectedForm.personalInformation" />
          <Trans id="whatWasAffectedForm.devices" />
          <Trans id="whatWasAffectedForm.business_assets" />
          <Trans id="whatWasAffectedForm.other" />
          <Trans id="whatWasAffectedForm.financial.example" />
          <Trans id="whatWasAffectedForm.personalInformation.example" />
          <Trans id="whatWasAffectedForm.devices.example" />
          <Trans id="whatWasAffectedForm.business_assets.example" />
        </div>
      ) : null}

      <Form
        initialValues={whatWasAffected}
        onSubmit={localOnSubmit}
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
                <Trans id="whatWasAffectedForm.hasValidationErrors" />
              </ErrorSummary>
            ) : null}

            <FormArrayControl
              name="affectedOptions"
              label={<Trans id="whatWasAffectedForm.optionsTitle" />}
              helperText={<Trans id="whatWasAffectedForm.optionsHelpText" />}
              errorMessage={<Trans id="whatWasAffectedForm.warning" />}
            >
              {affectedOptions.map((key) => {
                return (
                  <React.Fragment key={key}>
                    <CheckboxAdapter 
                      name="affectedOptions" 
                      value={key}
                    >
                      {i18n._(key)}
                      {key !== 'whatWasAffectedForm.other' && (
                        <Text as="span" d="block" fontSize="sm">
                          {<Trans id={`${key}.example`} />}
                        </Text>
                      )}
                    </CheckboxAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>
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
