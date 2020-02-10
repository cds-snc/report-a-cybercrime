/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { FormErrorMessage, FormControl } from '@chakra-ui/core'
import { useField } from 'react-final-form'
import { FormLabel } from '../FormLabel'
import { FormHelperText } from '../FormHelperText'

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
    <FormControl as="fieldset" {...rest} isInvalid={error && touched}>
      <FormLabel as="legend" htmlFor={name}>
        {label}
      </FormLabel>
      <FormHelperText>{helperText}</FormHelperText>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {children}
    </FormControl>
  )
}

FormArrayControl.propTypes = {
  label: PropTypes.object,
  helperText: PropTypes.object,
  errorMessage: PropTypes.object,
  name: PropTypes.string,
  children: PropTypes.any,
}
