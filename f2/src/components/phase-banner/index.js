/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Flex, Tag } from '@chakra-ui/core'
import { Text } from '../text'

export const PhaseBanner = props => (
  <Flex align="center" p={4} bg="green.50">
    <Tag variantColor="green">{props.phase}</Tag>
    <Text color="green.900" ml={4}>
      {props.children}
    </Text>
  </Flex>
)

PhaseBanner.propTypes = {
  phase: PropTypes.node.isRequired,
  children: PropTypes.node,
}
