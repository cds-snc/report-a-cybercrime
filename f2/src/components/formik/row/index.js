import { Row } from 'react-bootstrap'
import styled from '@emotion/styled'
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
  typography,
} from 'styled-system'

const separator = (props) =>
  props.separator
    ? `border-bottom: 2px solid;
  border-color: rgb(232, 232, 232)};`
    : null

export const FormRow = styled(Row, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  ${separator}
  margin-bottom: 1rem;
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
  ${typography}
`
