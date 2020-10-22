import styled from '@emotion/styled'
import React from 'react'
import { Container, Row, ListGroup } from 'react-bootstrap'
import { P } from '../paragraph'
import { FormRow } from '../row'

const ListItem = styled(ListGroup.Item)`
  display: list-item;
  list-style-position: inside;
  border: 0;
  padding: 0 0 0.5rem 0;
  background-color: inherit;
`

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
              return <ListItem key={index}>{item}</ListItem>
            })}
          </ListGroup>
        </Row>
      </FormRow>
    </Container>
  )
}
