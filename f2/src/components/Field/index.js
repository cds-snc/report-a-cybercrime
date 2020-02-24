/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { FormControl } from '@chakra-ui/core'
import { FormHelperText } from '../FormHelperText'
import { FormLabel } from '../FormLabel'
import { FormErrorMessage } from '../FormErrorMessage'
import { Field as FieldAdapter, useField } from 'react-final-form'
import { UniqueID } from '../unique-id'
import { Input } from '../input'

export const Field = ({
  name,
  label,
  helperText,
  errorMessage,
  component,
  ...props
}) => {
  const {
    meta: { invalid, submitFailed },
  } = useField(name, {
    subscription: {
      invalid: true,
      submitFailed: true,
    },
  })

  return (
    <UniqueID>
      {id => {
        return (
          <FormControl
            aria-labelledby={id}
            isInvalid={submitFailed && invalid}
            {...props}
          >
            <FormLabel id={id} htmlFor={name}>
              {label}
            </FormLabel>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
            {errorMessage && (
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
            )}
            <FieldAdapter
              name={name}
              id={name}
              component={component}
              {...props}
            />
          </FormControl>
        )
      }}
    </UniqueID>
  )
}
Field.defaultProps = {
  component: Input,
}

Field.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.any,
  helperText: PropTypes.any,
  errorMessage: PropTypes.any,
}
