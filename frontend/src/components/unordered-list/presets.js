import React from 'react'
import PropTypes from 'prop-types'
import { UnorderedList } from '.'
import { css } from '@emotion/core'

export const Ul = props => (
  <UnorderedList
    fontSize={[1, null, 2]}
    lineHeight={[1, null, 2]}
    pl={[5, null, 6]}
    mb={4}
    {...props}
  >
    {props.children}
  </UnorderedList>
)

Ul.propTypes = {
  children: PropTypes.any,
}

export const UlNone = props => (
  <UnorderedList
    fontSize={[1, null, 2]}
    lineHeight={[1, null, 2]}
    mb={4}
    css={css`
      list-style-type: none;
    `}
    {...props}
  >
    {props.children}
  </UnorderedList>
)

UlNone.propTypes = {
  children: PropTypes.any,
}

export const UlSquare = props => (
  <UnorderedList
    fontSize={[1, null, 2]}
    lineHeight={[1, null, 2]}
    mb={4}
    pl={[5, null, 6]}
    css={css`
      list-style-type: square;
    `}
    {...props}
  >
    {props.children}
  </UnorderedList>
)

UlSquare.propTypes = {
  children: PropTypes.any,
}
