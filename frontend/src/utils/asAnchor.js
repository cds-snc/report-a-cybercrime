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
import cleanElement from 'clean-element'
import PropTypes from 'prop-types'

export const asAnchor = AnchorType => {
  const Anchor = props => <AnchorType {...props}>{props.children}</AnchorType>

  Anchor.propTypes = {
    children: PropTypes.any,
  }

  const CleanAnchor = cleanElement(Anchor)

  CleanAnchor.propTypes = {
    ...fontSize.propTypes,
    ...lineHeight.propTypes,
    ...space.propTypes,
    ...colorStyle.propTypes,
    ...fontWeight.propTypes,
    ...display.propTypes,
  }

  const StyledAnchor = styled(CleanAnchor)`
    font-family: ${({ theme }) => theme.fontSans};
    margin: 0;
    ${fontSize};
    ${lineHeight};
    ${space};
    ${colorStyle};
    ${fontWeight};
    ${display};
  `
  return StyledAnchor
}
