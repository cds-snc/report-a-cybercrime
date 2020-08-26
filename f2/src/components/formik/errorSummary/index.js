import React from 'react'
import { Trans } from '@lingui/macro'
import { Row, Container } from 'react-bootstrap'
import { Error } from '../alert'

export const TestList = (props) => {
  const formErrors = props.formErrors

  console.log('Form Errors - ', JSON.stringify(formErrors, null, 2))

  return (
    <Container>
      <Error>
        <Row>
          <Trans id="default.hasValidationErrors" />
        </Row>
        <Row>
          <ul>
            {Object.keys(formErrors).map((key, i) => {
              console.log(formErrors[key])
              return <li key={i}>{formErrors[key]}</li>
            })}
          </ul>
        </Row>
      </Error>
    </Container>
  )
}
