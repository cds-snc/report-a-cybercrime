import React from 'react'
import { Container, Row, ListGroup } from 'react-bootstrap'
import { P } from '../paragraph'

export const List = (props) => {
  return (
    <Container>
      <Row className="form-row">
        {props.label && (
          <Row>
            <P fontSize="md" fontWeight="bold" marginBottom="1rem">
              {props.label}
            </P>
          </Row>
        )}
        <Row>
          <ListGroup>
            {props.items.map((item) => {
              return (
                <ListGroup.Item className="list-item">{item}</ListGroup.Item>
              )
            })}
          </ListGroup>
        </Row>
      </Row>
    </Container>
  )
}
