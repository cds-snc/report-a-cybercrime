/** @jsx jsx **/
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'

import { Box, Stack } from '@chakra-ui/core'
import { Column } from '../layout'

export const Container = props => <Box className="container" {...props} />

export const InfoCard = props => (
  <Column columns={props.columns}>
    <Box rounded="none" borderBottom="2px" p={4} py={8} {...props}>
      {props.children}
    </Box>
  </Column>
)

export const LandingBox = props => (
  <Column columns={props.columns}>
    <Stack
      className="landing-box"
      alignItems="flex-start"
      height="100%"
      bg="gray.300"
      borderBottom="2px"
      borderColor="gray.400"
      color="black"
      p={4}
      pt={8}
      marginBottom={4} /* styled system shorthand "mb" not working. Leave */
      spacing={4}
      {...props}
    >
      {props.children}
    </Stack>
  </Column>
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

LandingBox.defaultProps = {
  columns: { base: 4 / 4, md: 4 / 8 },
}
InfoCard.defaultProps = {
  columns: { base: 4 / 4, md: 6 / 8, lg: 5 / 12 },
}
