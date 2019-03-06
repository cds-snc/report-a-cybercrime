/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
// import { StyledLabel } from './StyledLabel'
// import { StyledInput } from './StyledInput'
import { Input } from '../input'
import { Label } from '../label'
import { UniqueID } from '../unique-id'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'

export const Checkbox = ({ label, ...props }) => {
  console.log(props.fontSize)
  // console.log(themeGet('checkboxSize', '5px')(props.theme))
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
            <Input
              type="checkbox"
              position="absolute"
              left="0"
              top="0"
              zIndex="1"
              m={0}
              css={theme => ({
                height: theme.checkboxes.size,
                width: theme.checkboxes.size,
                opacity: 0,
                zoom: '1',
                ':checked + span:after': {
                  opacity: '1',
                },
                ':focus + span:before': {
                  boxShadow: `0 0 0 3px ${theme.colors.yellow}`,
                },
              })}
              {...props}
              id={id}
            />
            <Label
              m={0}
              pt={2}
              pr={2}
              pb={0}
              pl={2}
              display="block"
              color="black"
              css={theme => ({
                height: theme.checkboxes.labelSize,
                '::before': {
                  content: '""',
                  display: 'block',
                  border: `2px solid ${theme.colors.black}`,
                  background: 'transparent',
                  width: '25px',
                  height: '25px',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                },
              })}
              htmlFor={id}
              {...props}
            >
              {label}
            </Label>
          </div>
        )
      }}
    </UniqueID>
  )
}

Checkbox.defaultProps = {
  fontWeight: '400',
  fontSize: [2, null, 3],
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
