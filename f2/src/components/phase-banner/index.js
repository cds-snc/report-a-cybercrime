/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Flex, Tag } from '@chakra-ui/core'
import { Text } from '../text'

export const PhaseBanner = props => (
  <Flex align="center" p={4} bg="gray.200">
    <Tag
      rounded="none"
      color="black"
      borderWidth="2px"
      borderColor="gray.900"
      minW="inherit"
      minH="inherit"
      mr={4}
      py={0}
    >
      {props.phase}
    </Tag>
    <Text fontSize="md">{props.children}</Text>
  </Flex>
)

PhaseBanner.propTypes = {
  phase: PropTypes.node.isRequired,
  children: PropTypes.node,
}
