/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Input } from '../input'
import { Container } from '../container'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'
import { BREAKPOINTS } from '../../theme'

const mq = BREAKPOINTS.map(bp => `@media (min-width: ${bp})`)

export const Checkbox = ({ label, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <Container
            display="block"
            position="relative"
            pl={6}
            mt={[1, null, 1]}
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
            <Text
              m={0}
              p={0}
              pr={2}
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
                '::after': {
                  content: '""',
                  border: 'solid',
                  color: theme.colors.black,
                  background: 'transparent',
                  borderTopColor: 'transparent',
                  position: 'absolute',
                  top: '8px',
                  [mq[0]]: {
                    left: '5px',
                    width: `${9 * props.checkscale}px`,
                    height: `${3 * props.checkscale}px`,
                    borderWidth: '0 0 3px 3px',
                  },
                  [mq[2]]: {
                    left: '6px',
                    width: `${11 * props.checkscale}px`,
                    height: `${5 * props.checkscale}px`,
                    borderWidth: '0 0 4px 4px',
                  },
                  transform: 'rotate(-45deg)',
                  zoom: '1',
                  opacity: '0',
                },
              })}
              htmlFor={id}
              {...props}
            >
              {label}
            </Text>
          </Container>
        )
      }}
    </UniqueID>
  )
}

Checkbox.defaultProps = {
  fontWeight: '400',
  fontSize: [2, null, 3],
  lineHeight: [2, null, 3],
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
