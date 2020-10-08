import React from 'react'
import styled from '@emotion/styled'

const FieldContainer = styled('div')`
  border-left-width: 0.25rem;
  border-left-color: rgb(174, 174, 174);
  margin-top: 0.5rem;
  margin-left: 1.25rem;
  padding-top: 0.25rem;
  padding-left: 1.5rem;
  width: -webkit-fill-available;
`

export const ConditionalField = (props) => {
  return <FieldContainer>{props.children}</FieldContainer>
}
