/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Flex, Tag } from '@chakra-ui/core'
import { Text } from '../text'

export const PhaseBanner = props => (
  <Flex align="center" p={4} bg="purple.50">
    <Tag
      rounded="none"
      variantColor="purple"
      variant="solid"
      minW="inherit"
      mr={4}
    >
      {props.phase}
    </Tag>
    <Text color="green.900">{props.children}</Text>
  </Flex>
)

PhaseBanner.propTypes = {
  phase: PropTypes.node.isRequired,
  children: PropTypes.node,
}
