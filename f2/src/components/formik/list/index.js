import React from 'react'
import { Container, Row, ListGroup } from 'react-bootstrap'
import { P } from '../paragraph'
import { FormRow } from '../row'

export const List = (props) => {
  return (
    <Container>
      <FormRow>
        {props.label && (
          <Row>
            <P fontSize="md" fontWeight="bold" marginBottom="1rem">
              {props.label}
            </P>
          </Row>
        )}
        <Row>
          <ListGroup>
            {props.items.map((item, index) => {
              return (
                <ListGroup.Item key={index} className="list-item">
                  {item}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Row>
      </FormRow>
    </Container>
  )
}
