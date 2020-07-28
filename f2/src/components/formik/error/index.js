import React from 'react'
import { Row } from 'react-bootstrap'

export const Error = (props) => {
  return (
    <Row className="error-row">
      <p className="error-message">{props.msg}</p>
    </Row>
  )
}
