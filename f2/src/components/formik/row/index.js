import React from 'react'
import { Row } from 'react-bootstrap'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

/*const StyledRow = (props, {className}) => {
  console.log(JSON.stringify(className, null, 2))
  return (
    <Row className={className}>{props.children}</Row>
  )
}*/

export const FormRow = styled(Row)`
  border-bottom: 2px solid;
  border-color: ${(props) =>
    props.color ? props.color : 'rgb(232, 232, 232)'};
  margin: 1rem 0rem;
  padding: 1.5rem 0rem;
  width: 100%;
`

/*export const FormRow = styled(StyledRow, {
  shouldForwardProp: (prop) => isPropValid(prop),
})((props) => ({
  ...props,
}))*/
