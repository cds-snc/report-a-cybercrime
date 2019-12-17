/** @jsx jsx **/
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'

import { Box, Collapse } from '@chakra-ui/core'

export const Container = props => <Box {...props} />

export const InfoCard = props => (
  <Box
    rounded="none"
    border="2px"
    borderColor="blackAlpha.400"
    p={[3, null, 6]}
    bg="white"
    {...props}
  ></Box>
)

export const ConditionalForm = ({ ...props }) => (

  <Collapse
    borderLeftWidth={0}
    borderLeftColor="gray.400"
    boxShadow="outlineLeft"
    isOpen="show"
    mt={1}
    ml={5}
    pl={7}
    {...props}
  >{props.children}</Collapse>
)

ConditionalForm.propTypes = {
  children: PropTypes.any,
}
