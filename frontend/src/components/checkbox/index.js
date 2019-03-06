/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { Input } from '../input'
import { Label } from '../label'
import { UniqueID } from '../unique-id'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'
import { BREAKPOINTS } from '../../theme'

const mq = BREAKPOINTS.map(bp => `@media (min-width: ${bp})`)

export const Checkbox = ({ label, ...props }) => {
  console.log(mq[2])
  return (
    <UniqueID>
      {id => {
        return (
          <div
            css={css`
              display: block;
              position: relative;
              padding: 0 0 0 38px;
              margin-top: 1.5rem;
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
              pt={0}
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
                  [mq[0]]: {
                    width: theme.fontSizes[3],
                    height: theme.fontSizes[3],
                  },
                  [mq[2]]: {
                    width: theme.fontSizes[4],
                    height: theme.fontSizes[4],
                  },
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
  fontSize: [3, null, 4],
  lineHeight: [3, null, 4],
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
