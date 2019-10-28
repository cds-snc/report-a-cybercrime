import React from 'react'
import styled from '@emotion/styled'
import {
  fontSize,
  lineHeight,
  space,
  fontWeight,
  colorStyle,
  display,
} from 'styled-system'
import { cleanProps } from './cleanProps'
import PropTypes from 'prop-types'

export const asAnchor = AnchorType => {
  const Anchor = props => <AnchorType {...props}>{props.children}</AnchorType>

  Anchor.propTypes = {
    children: PropTypes.any,
  }

  const StyledAnchor = styled(Anchor, {
    shouldForwardProp: prop => cleanProps(prop),
  })`
    font-family: ${({ theme }) => theme.fontSans};
    margin: 0;
    ${fontSize};
    ${lineHeight};
    ${space};
    ${colorStyle};
    ${fontWeight};
    ${display};
  `

  StyledAnchor.propTypes = {
    ...fontSize.propTypes,
    ...lineHeight.propTypes,
    ...space.propTypes,
    ...colorStyle.propTypes,
    ...fontWeight.propTypes,
    ...display.propTypes,
  }

  return StyledAnchor
}
