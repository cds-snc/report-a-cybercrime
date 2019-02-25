import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { StyledLabel } from './styled-label'
import { StyledInput } from './styled-input'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'

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

export const Checkbox = ({ label, className, ...props }) => {
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
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '16px',
  checkscale: '1',
}

Checkbox.propTypes = {
  label: PropTypes.any.isRequired,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  className: PropTypes.string,
}
