/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { A } from '../link'
import { Flex } from '@chakra-ui/core'

const makeInvisible = css`
  left: -999px;
  position: absolute;
  top: auto;
  overflow: hidden;
  z-index: -999;
  :focus,
  :active {
    left: auto;
    top: auto;
    height: auto;
    overflow: auto;
    z-index: 999;
  }
`
export const SkipLink = ({ invisible, ...rest }) => (
  <Flex justify="center">
    <A
      mt={2}
      p={2}
      textDecoration=""
      backgroundColor="gray.skipLink"
      rounded="4px"
      color="white"
      fontWeight="bold"
      position="absolute"
      mx="auto"
      css={invisible ? makeInvisible : null}
      {...rest}
    />
  </Flex>
)

SkipLink.defaultProps = {
  invisible: false,
}
SkipLink.propTypes = {
  invisible: PropTypes.bool,
}
