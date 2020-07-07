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
import { Trans } from '@lingui/react'
import { Text } from '../text'

export const Field = (props) => {
  const {
    meta: { invalid, submitFailed },
  } = useField(props.name, {
    subscription: {
      invalid: true,
      submitFailed: true,
    },
  })

  return (
    <UniqueID>
      {(id) => {
        return (
          <FormControl aria-labelledby={id} isInvalid={submitFailed && invalid}>
            <FormLabel id={id} htmlFor={props.name}>
              {props.label}{' '}
              <Text as="span" fontWeight="normal">
                {props.required && <Trans id="default.requiredField" />}
              </Text>
            </FormLabel>
            {props.helperText && (
              <FormHelperText>{props.helperText}</FormHelperText>
            )}
            {props.errorMessage && (
              <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
            )}

            <FieldAdapter
              mt={3}
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
  required: PropTypes.bool,
}
