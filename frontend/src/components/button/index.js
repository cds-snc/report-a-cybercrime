import React from 'react'
import styled from '@emotion/styled'
import { fontSize, lineHeight, space, color, fontWeight } from 'styled-system'
import tag from 'clean-tag'
import PropTypes from 'prop-types'

const BaseButton = styled(tag.button)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  border: 0;
  &:focus {
    outline: 3px solid #ffbf47;
  }
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
`

BaseButton.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
}

export const Button = props => (
  <BaseButton
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    padding={[2, null, 3]}
    borderColor="blue"
    mt={[2, null, 3]}
    color="white"
    bg="green"
    py={1}
    px={[2, null, 3]}
    {...props}
  >
    {props.children}
  </BaseButton>
)

Button.propTypes = {
  children: PropTypes.any,
}
