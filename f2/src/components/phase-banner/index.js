/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Flex, Tag } from '@chakra-ui/core'
import { Text } from '../text'
import { Layout } from '../layout'

export const PhaseBanner = props => (
  <Flex bg="gray.100">
    <Layout>
      <Flex align="center" py={4}>
        <Tag
          fontFamily="body"
          letterSpacing={2}
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
    </Layout>
  </Flex>
)

PhaseBanner.propTypes = {
  phase: PropTypes.node.isRequired,
  children: PropTypes.node,
}
