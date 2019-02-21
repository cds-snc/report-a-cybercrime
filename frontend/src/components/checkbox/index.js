import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { StyledLabel } from './styled-label'
import { StyledInput } from './styled-input'

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const StyledCheckbox = styled('label')({
  display: 'block',
  position: 'relative',
  padding: '0 0 0 38px',
})

const Checkbox = ({ label, className, ...props }) => {
  const guid = uuidv4()
  return (
    <StyledCheckbox className={className} htmlFor={guid}>
      <StyledInput type="checkbox" {...props} id={guid} />
      <StyledLabel {...props}>{label}</StyledLabel>
    </StyledCheckbox>
  )
}

Checkbox.defaultProps = {
  className: undefined,
}

Checkbox.propTypes = {
  /**
   * Text content for checkbox
   */
  label: PropTypes.element,

  /**
   * CSS Classname for outermost container
   */
  className: PropTypes.string,
}

const CheckboxAdapter = ({ input, ...rest }) => (
  <Checkbox {...input} {...rest} />
)

CheckboxAdapter.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  }),
}

export { Checkbox, CheckboxAdapter }
