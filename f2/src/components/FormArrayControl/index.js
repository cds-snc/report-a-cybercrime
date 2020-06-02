/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import React from 'react'
import { FormControl, Stack } from '@chakra-ui/core'
import { useField, useForm } from 'react-final-form'
import { FormLabel } from '../FormLabel'
import { FormHelperText } from '../FormHelperText'
import { FormErrorMessage } from '../FormErrorMessage'
import { UniqueID } from '../unique-id'
import { Trans } from '@lingui/macro'

export const FormArrayControl = (props) => {
  const {
    meta: { submitFailed, invalid },
  } = useField(props.name, {
    subscription: { submitFailed: true, invalid: true },
  })

  const { errors } = useForm(props.onSubmit).getState()

  return (
    <UniqueID>
      {(id) => {
        return (
          <FormControl
            id={props.name}
            borderLeft={submitFailed && invalid ? '3px' : null}
            pl={submitFailed && invalid ? 4 : null}
            borderLeftColor={submitFailed && invalid ? 'red.700' : null}
            as="fieldset"
            aria-labelledby={id}
            isInvalid={submitFailed && invalid}
            {...props}
          >
            <Stack spacing={1} pb={4}>
              <FormLabel
                id={id}
                as="legend"
                htmlFor={props.name}
                mb={props.label && 0}
              >
                {props.label}
              </FormLabel>
              {props.helperText && (
                <FormHelperText>{props.helperText}</FormHelperText>
              )}
              {props.errorMessage && (
                <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
              )}
              {props.errors && (
                <FormErrorMessage>
                  {Array.isArray(errors[props.name]) ? (
                    errors[props.name].map((msg) => (
                      <React.Fragment>
                        <Trans key={msg} id={msg} />{' '}
                      </React.Fragment>
                    ))
                  ) : (
                    <Trans id={errors[props.name]} />
                  )}
                </FormErrorMessage>
              )}
            </Stack>

            {/** This component comes with a group attribute. We don't need to use Chakra's <CheckboxGroup> or <RadioGroup> as per the Chakra docs */}
            <Stack shouldWrapChildren spacing={4}>
              {props.children}
            </Stack>
          </FormControl>
        )
      }}
    </UniqueID>
  )
}

FormArrayControl.propTypes = {
  label: PropTypes.any,
  helperText: PropTypes.any,
  errorMessage: PropTypes.any,
  name: PropTypes.string,
  children: PropTypes.any,
}
