/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { FormErrorMessage, FormControl, Stack } from '@chakra-ui/core'
import { useField } from 'react-final-form'
import { FormLabel } from '../FormLabel'
import { FormHelperText } from '../FormHelperText'
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
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return (
    <UniqueID>
      {id => {
        return (
          <FormControl
            as="fieldset"
            aria-labelledby={id}
            isInvalid={error && touched}
            {...rest}
          >
            <FormLabel id={id} as="legend" htmlFor={name}>
              {label}
            </FormLabel>
            <FormHelperText>{helperText}</FormHelperText>
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
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
