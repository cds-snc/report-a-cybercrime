/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Field as RFFField } from 'react-final-form'
import { TextInput } from '../TextInput'
import { FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../FormHelperText'
import { FormLabel } from '../FormLabel'
import { P } from '../paragraph'

export const Field = ({
  id,
  label,
  helpText,
  hiddenHelpText,
  validationError,
}) => {
  return (
    <RFFField name={id}>
      {props => (
        <FormControl>
          <FormLabel htmlFor={id}>{label}</FormLabel>
          <FormHelperText>
            {helpText}
            <VisuallyHidden as="span">{hiddenHelpText}</VisuallyHidden>
          </FormHelperText>
          <TextInput
            id={id}
            name={props.input.name}
            value={props.input.value}
            onChange={props.input.onChange}
          />
          <P color="red.700">{validationError}</P>
        </FormControl>
      )}
    </RFFField>
  )
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  helpText: PropTypes.any,
  hiddenHelpText: PropTypes.any,
  validationError: PropTypes.any,
}
