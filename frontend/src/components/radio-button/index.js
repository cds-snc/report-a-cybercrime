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

export const RadioButton = ({ label, ...props }) => {
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
              type="radio"
              position="absolute"
              left="0"
              top="0"
              zIndex="1"
              m={0}
              css={theme => ({
                height: theme.radioButtons.size,
                width: theme.radioButtons.size,
                opacity: 0,
                zoom: '1',
                ':checked + span:after': {
                  opacity: '1',
                },
                ':focus + span:before': {
                  boxShadow: `0 0 0 3px ${theme.colors.focusColor}`,
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
                  borderRadius: '50%',
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
                  boxSizing: 'border-box',
                  content: '""',
                  display: 'block',
                  border: `2px solid ${theme.colors.white}`,
                  borderRadius: '50%',
                  background: 'white',
                  [mq[0]]: {
                    width: theme.fontSizes[3],
                    height: theme.fontSizes[3],
                    backgroundColor: `${theme.colors.black}`,
                  },
                  [mq[2]]: {
                    width: theme.fontSizes[4],
                    height: theme.fontSizes[4],
                    backgroundColor: `${theme.colors.black}`,
                  },
                  zoom: '1',
                  opacity: '0',
                  position: 'absolute',
                  top: '2px',
                  left: '2px',
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

RadioButton.defaultProps = {
  fontWeight: '400',
  fontSize: [3, null, 3],
  lineHeight: [3, null, 3],
  checkscale: '1',
}

RadioButton.propTypes = {
  label: PropTypes.node.isRequired,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
}
