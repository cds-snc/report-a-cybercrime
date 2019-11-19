/** @jsx jsx **/
import { jsx } from '@emotion/core'

import { Box } from '@chakra-ui/core'

export const Container = props => <Box {...props} />

export const InfoCard = props => (
  <Box
    rounded="lg"
    border="2px"
    borderColor="blackAlpha.900"
    p={[3, null, 6]}
    bg="blackAlpha.100"
    {...props}
  ></Box>
)
