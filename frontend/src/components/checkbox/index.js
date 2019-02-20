import theme from '../../theme'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

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

const StyledInput = styled('input')(
  {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '24px',
    height: '24px',
    zIndex: 1,
    margin: 0,
    zoom: 1,
    opacity: 0,
    ':checked + span:after': {
      opacity: 1,
    },
    ':focus + span:before': {
      boxShadow: `0 0 0 3px ${theme.colors.yellow}`,
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? 'auto' : 'pointer',
    ' + span': {
      pointerEvents: disabled ? 'none' : 'auto',
    },
  }),
)

const StyledLabel = styled('span')({
  fontFamily: theme.fontSans,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '24px',
  lineHeight: '16px',
  cursor: 'pointer',
  padding: '8px 0px 9px 8px',
  display: 'block',
  height: '28px',
  color: `${theme.colors.black}`,
  '::before': {
    content: "''",
    display: 'block',
    border: `2px solid ${theme.colors.black}`,
    background: 'transparent',
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  '::after': {
    content: "''",
    border: 'solid',
    color: theme.colors.black,
    borderWidth: '0 0 4px 4px',
    background: 'transparent',
    borderTopColor: 'transparent',
    width: '11px',
    height: '5px',
    position: 'absolute',
    top: '8px',
    left: '6px',
    transform: 'rotate(-45deg)',
    zoom: 1,
    opacity: 0,
  },
})

const Checkbox = ({ label, className, ...props }) => {
  const guid = uuidv4()
  return (
    <StyledCheckbox className={className} htmlFor={guid}>
      <StyledInput type="checkbox" {...props} id={guid} />
      <StyledLabel>{label}</StyledLabel>
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
