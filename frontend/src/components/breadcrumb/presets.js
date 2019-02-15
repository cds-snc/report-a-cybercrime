import React from 'react'
import { BreadcrumbList, BreadcrumbListItem } from '.'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

export const BreadcrumbLi = props => (
  <BreadcrumbListItem
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={[0, null, 1]}
    fontWeight="normal"
    {...props}
  >
    {props.children}
  </BreadcrumbListItem>
)

BreadcrumbLi.propTypes = {
  children: PropTypes.any,
}

export const Breadcrumb = props => {
  var paddingValue

  paddingValue = 0

  return (
    <BreadcrumbList
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      pl={paddingValue}
      mb={4}
      css={css`
        list-style-type: 'none';
      `}
      {...props}
    >
      {props.children.map((child, index) => (
        <BreadcrumbLi key={index}>{child}</BreadcrumbLi>
      ))}
    </BreadcrumbList>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.any,
}
