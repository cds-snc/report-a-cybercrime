import React from 'react'
import { OrderedList } from '.'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export const Ol = props => {
  const { listStyleType, ...rest } = props
  var paddingValue

  if (listStyleType === 'none') paddingValue = 0
  else paddingValue = [5, null, 6]

  return (
    <OrderedList
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      pl={paddingValue}
      mb={4}
      css={css`
        list-style-type: ${listStyleType};
      `}
      {...rest}
    >
      {props.children}
    </OrderedList>
  )
}

Ol.defaultProps = {
  listStyleType: 'number',
}

Ol.propTypes = {
  listStyleType: PropTypes.string,
  children: PropTypes.any,
}
