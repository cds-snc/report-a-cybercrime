import React from 'react'
import { BreadcrumbList, BreadcrumbListItem } from '.'
import { Text } from '../text'
import PropTypes from 'prop-types'

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
  return (
    <BreadcrumbList
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      mb={4}
      {...props}
    >
      {React.Children.map(props.children, (child, index) => (
        <BreadcrumbLi>
          {child}
          {index === React.Children.count(props.children) - 1 ? null : (
            <Text {...props} display="inline-block">
              &nbsp;/&nbsp;
            </Text>
          )}
        </BreadcrumbLi>
      ))}
    </BreadcrumbList>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.any,
}
