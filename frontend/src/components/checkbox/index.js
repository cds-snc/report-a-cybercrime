/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { StyledLabel } from './StyledLabel'
import { StyledInput } from './StyledInput'
import { UniqueID } from '../unique-id'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'

export const Checkbox = ({ label, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <div
            css={css`
              display: block;
              position: relative;
              padding: 0 0 0 38px;
            `}
          >
            <StyledInput type="checkbox" {...props} id={id} />
            <StyledLabel htmlFor={id} {...props}>
              {label}
            </StyledLabel>
          </div>
        )
      }}
    </UniqueID>
  )
}

Checkbox.defaultProps = {
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '16px',
  checkscale: '1',
}

Checkbox.propTypes = {
  label: PropTypes.node.isRequired,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
}
