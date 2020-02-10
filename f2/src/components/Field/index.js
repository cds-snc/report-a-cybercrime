/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { FormErrorMessage, FormControl } from '@chakra-ui/core'
import { FormHelperText } from '../FormHelperText'
import { FormLabel } from '../FormLabel'
import { Field as FieldAdapter } from 'react-final-form'
import { UniqueID } from '../unique-id'

export const Field = ({ name, label, helperText, errorMessage, component }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <FormControl aria-labelledby={id}>
            <FormLabel id={id} htmlFor={name}>
              {label}
            </FormLabel>
            <FormHelperText>{helperText}</FormHelperText>
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
            <FieldAdapter id={name} component={component} />
          </FormControl>
        )
      }}
    </UniqueID>
  )
}

Field.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.object,
  helperText: PropTypes.object,
  errorMessage: PropTypes.object,
}
