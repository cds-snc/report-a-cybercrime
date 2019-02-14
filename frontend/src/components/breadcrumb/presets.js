import React from 'react'
import { BreadcrumbListItem, BreadcrumbList } from '.'
import PropTypes from 'prop-types'

export const Breadcrumb = ({ children, ...props }) => (
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

const Breadcrumb = ({ children, ...props }) => (
  <BreadcrumbContainer {...props}>
    <BreadcrumbList>
      {children.length && children.map ? (
        children.map((child, i) =>
          child && (child.length || child.props) ? (
            <BreadcrumbListItem key={child.key || i}>
              {child}
            </BreadcrumbListItem>
          ) : null,
        )
      ) : (
        <BreadcrumbListItem>{children}</BreadcrumbListItem>
      )}
    </BreadcrumbList>
  </BreadcrumbContainer>
)
