import React from 'react'
import { BaseButton } from '.'
import PropTypes from 'prop-types'

export const Button = props => (
  <BaseButton
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mt={[2, null, 3]}
    color="white"
    bg="green"
    {...props}
  >
    {props.children}
  </BaseButton>
)

Button.propTypes = {
  children: PropTypes.any,
}
