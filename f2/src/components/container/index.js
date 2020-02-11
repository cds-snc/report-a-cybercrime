/** @jsx jsx **/
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'

import { Box } from '@chakra-ui/core'

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
  <React.Fragment>
    {props.children && (
      <Box
        borderLeftWidth={1}
        borderLeftColor="gray.400"
        mt={1}
        ml={5}
        pl={6}
        {...props}
      >
        {props.children}
      </Box>
    )}
  </React.Fragment>
)

ConditionalForm.propTypes = {
  children: PropTypes.any,
}
