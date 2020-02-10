/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { FormErrorMessage, FormControl } from '@chakra-ui/core'
import { FormHelperText } from '../FormHelperText'
import { FormLabel } from '../FormLabel'
import { Field as FieldAdapter } from 'react-final-form'

export const Field = (name, label, helperText, errorMessage, children) => {
  render(
    <FieldAdapter name={name}>
      {props => (
        <FormControl>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormHelperText>{helperText}</FormHelperText>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
          {children}
        </FormControl>
      )}
    </FieldAdapter>,
  )
}

Field.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.object,
  helperText: PropTypes.object,
  errorMessage: PropTypes.object,
}
