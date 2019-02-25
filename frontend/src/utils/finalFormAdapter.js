import React from 'react'
import PropTypes from 'prop-types'
import { color, fontSize, fontWeight, lineHeight, space } from 'styled-system'

export const finalFormAdapter = Input => {
  const FinalFormInput = ({ input, ...rest }) => <Input {...input} {...rest} />

  FinalFormInput.propTypes = {
    input: PropTypes.shape({
      value: PropTypes.any.isRequired,
      onChange: PropTypes.func.isRequired,
      onBlur: PropTypes.func,
      onFocus: PropTypes.func,
      ...fontSize.propTypes,
      ...fontWeight.propTypes,
      ...lineHeight.propTypes,
      ...space.propTypes,
      ...color.propTypes,
    }),
  }
  return FinalFormInput
}
