import React from 'react'
import { Row } from 'react-bootstrap'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

const StyledRow = (props, { className }) => {
  return <Row className={className}>{props.children}</Row>
}

export const FormRow = styled(StyledRow, {
  shouldForwardProp: (prop) => isPropValid(prop),
})((props) => ({
  ...props,
}))
