/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { FormControl, Stack } from '@chakra-ui/core'
import { useField } from 'react-final-form'
import { FormLabel } from '../FormLabel'
import { FormHelperText } from '../FormHelperText'
import { FormErrorMessage } from '../FormErrorMessage'
import { UniqueID } from '../unique-id'

export const FormArrayControl = ({
  label,
  helperText,
  errorMessage,
  name,
  children,
  ...rest
}) => {
  const {
    meta: { error, touched, submitFailed },
  } = useField(name, {
    subscription: { touched: true, error: true, submitFailed: true },
  })

  return (
    <UniqueID>
      {id => {
        return (
          <FormControl
            id={name}
            borderLeft={submitFailed ? '3px' : null}
            pl={submitFailed ? 4 : null}
            borderLeftColor={submitFailed ? 'red.700' : null}
            as="fieldset"
            aria-labelledby={id}
            isInvalid={submitFailed}
            {...rest}
          >
            <Stack spacing={1} pb={4}>
              <FormLabel id={id} as="legend" htmlFor={name}>
                {label}
              </FormLabel>
              <FormHelperText>{helperText}</FormHelperText>
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
            </Stack>

            {/** This component comes with a group attribute. We don't need to use Chakra's <CheckboxGroup> or <RadioGroup> as per the Chakra docs */}
            <Stack shouldWrapChildren spacing={4}>
              {children}
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
