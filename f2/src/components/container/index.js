/** @jsx jsx **/
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'

import { Box } from '@chakra-ui/core'
import { Column } from '../layout'

export const Container = props => <Box {...props} />

export const InfoCard = props => (
  <Column
    columns={{ base: 4 / 4, md: 6 / 8, lg: 5 / 12 }}
    rounded="none"
    borderBottom="2px"
    p={4}
    py={8}
    {...props}
  ></Column>
)

export const LandingBox = props => (
  <Column
    columns={{ base: 4 / 4, md: 4 / 8 }}
    alignItems="flex-start"
    bg="gray.300"
    borderColor="gray.400"
    borderBottom="2px"
    color="black"
    p={4}
    pt={8}
    mb={4}
    spacing={4}
    {...props}
  ></Column>
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
