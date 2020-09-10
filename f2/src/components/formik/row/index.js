import React from 'react'
import { Row } from 'react-bootstrap'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { cleanProps } from '../../../utils/cleanProps'
import {
  space,
  color,
  display,
  border,
  borderColor,
  width,
  height,
  position,
  zIndex,
} from 'styled-system'

const separator = (props) =>
  props.separator
    ? css`border-bottom: 2px solid;
  border-color: rgb(232, 232, 232)};`
    : null

const defaultStyle = (props) => props

export const FormRow = styled(Row, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  ${separator}
  margin: 1rem 0rem;
  padding: 1.5rem 0rem;
  width: 100%;
  ${space};
  ${color};
  ${display};
  ${border};
  ${borderColor};
  ${width};
  ${height};
  ${position};
  ${zIndex};
`
