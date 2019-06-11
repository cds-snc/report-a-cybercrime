/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Input } from '../input'
import { Container } from '../container'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'
import { BREAKPOINTS } from '../../theme'
import { Trans } from '@lingui/macro'


const mq = BREAKPOINTS.map(bp => `@media (min-width: ${bp})`)

export const RadioButton = ({ label, ...props }) => {
  console.log(mq[0])
  return (
    <UniqueID>
      {id => {
        return (
          <Container
            display="block"
            position="relative"
            pl={6}
            mt={[0, null, 1]}
          >
            <Input
              type="radio"
              className={"resettable-radio-button"}
              position="absolute"
              left="0"
              top="0"
              zIndex="1"
              m={0}
              css={theme => ({
                height: theme.radiobuttons.size,
                width: theme.radiobuttons.size,
                opacity: 0,
                zoom: '1',
                ':checked + span:after': {
                  opacity: '1',
                },
                ':checked': {
                  backgroundColor:`${theme.colors.black}`
                }
              })}
              {...props}
              id={id}
            />
            <Text
              m={0}
              p={0}
              pr={2}
              pl={2}
              color="black"
              textAlign="left"
              css={theme => ({
                height: theme.radiobuttons.labelSize,
                '::before': {
                  content: '""',
                  display: 'block',
                  border: `2px solid ${theme.colors.black}`,
                  borderRadius: "50%",
                  background: 'transparent',
                  [mq[0]]: {
                    width: theme.fontSizes[2] ,
                    height: theme.fontSizes[2],
                  },
                  [mq[2]]: {
                    width: theme.fontSizes[3],
                    height: theme.fontSizes[3],
                  },
                  position: 'absolute',
                  top: '0',
                  left: '0',
                },
                '::after': {
                  content: '""',
                  display:"block",
                  border: `2px solid ${theme.colors.black}`,
                  borderRadius: "50%",
                  background: 'transparent',
                  [mq[0]]: {
                    width: theme.fontSizes[2],
                    height: theme.fontSizes[2],
                    backgroundColor:`${theme.colors.canadaRed}`
                  },
                  [mq[2]]: {
                    width: theme.fontSizes[3],
                    height: theme.fontSizes[3],
                    backgroundColor:`${theme.colors.canadaRed}`
                  },
                  zoom: '1',
                  opacity: '0',
                  position: 'absolute',
                  top: '0',
                  left: '0'
                },
              })}
              htmlFor={id}
              {...props}
            >
              <Trans id={label} defaults={label} />
            </Text>
          </Container>
        )
      }}
    </UniqueID>
  )
}

RadioButton.defaultProps = {
  fontWeight: '400',
  fontSize: [1, null, 2],
  lineHeight: [4, null, 5],
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
