import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import WordMark from '../wordmark'
import { Box, Flex, List } from '@chakra-ui/core'

export const Footer = props => {
  const { bg } = props

  return (
    <Box as="footer" bg={bg} p={[3, 3, 4]}>
      <Flex align="center" direction="row">
        <List px={0}>{props.children}</List>
        <Box w="100px" ml="auto">
          <WordMark
            width="100%"
            flag="#fff"
            text="#fff"
            css={css`
              display: block;
            `}
          />
        </Box>
      </Flex>
    </Box>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
  bg: PropTypes.string,
}

Footer.defaultProps = { bg: 'black' }
