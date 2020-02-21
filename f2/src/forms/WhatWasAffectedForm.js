import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack, Alert } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { A } from '../components/link'
import { Li } from '../components/list-item'
import { Ol } from '../components/ordered-list'
import { Text } from '../components/text'

const validate = values => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  if (!values.affectedOptions || values.affectedOptions.length < 1) {
    errors.affectedOptions = 'whatWasAffectedForm.warning'
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
              <Alert status="error" borderLeft="3px" borderColor="red.700">
                <Stack>
                  <Text fontSize="md" fontWeight="bold">
                    <Trans id="default.hasValidationErrors" />
                  </Text>

                  <Ol>
                    {Object.keys(errors).map(key => (
                      <Li fontSize="md">
                        <A
                          fontSize="md"
                          fontWeight="bold"
                          key={key}
                          href={`#${key}`}
                        >
                          {i18n._(errors[key])}
                        </A>
                      </Li>
                    ))}
                  </Ol>
                </Stack>
              </Alert>
            ) : null}

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
