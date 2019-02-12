import React from 'react'
import { Paragraph } from '.'
import PropTypes from 'prop-types'

export const P = props => (
  <Paragraph
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    color="black"
    {...props}
  >
    {props.children}
  </Paragraph>
)

P.propTypes = {
  children: PropTypes.any,
}

export const Lead = props => (
  <Paragraph
    fontSize={[3, null, 4]}
    lineHeight={[3, null, 4]}
    mb={4}
    color="black"
    {...props}
  >
    {props.children}
  </Paragraph>
)

Lead.propTypes = {
  children: PropTypes.any,
}
