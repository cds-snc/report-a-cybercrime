/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { FormErrorMessage, FormControl } from '@chakra-ui/core'
import { FormHelperText } from '../FormHelperText'
import { FormLabel } from '../FormLabel'
import { Field as FieldAdapter } from 'react-final-form'
import { UniqueID } from '../unique-id'
import { Input } from '../input'

export const Field = props => {
  return (
    <UniqueID>
      {id => {
        return (
          <FormControl aria-labelledby={id}>
            <FormLabel id={id} htmlFor={props.name}>
              {props.label}
            </FormLabel>
            {props.helperText && (
              <FormHelperText>{props.helperText}</FormHelperText>
            )}
            <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
            <FieldAdapter
              name={props.name}
              id={props.name}
              component={props.component}
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
  component: PropTypes.elementType,
  children: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.any,
  helperText: PropTypes.any,
  errorMessage: PropTypes.any,
}
