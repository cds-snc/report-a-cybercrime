/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Alert, AlertIcon, AlertDescription, Box } from '@chakra-ui/core'
import { Layout } from '../layout'

export const WarningBanner = props => {
  const { status, bg } = props

  return (
    <Box bg={`${bg}.400`}>
      <Layout>
        <Alert px={0} py={4} status={status} bg={`${bg}.400`} fontFamily="body">
          <AlertIcon mt={0} color="black" />
          <AlertDescription color="black">{props.children}</AlertDescription>
        </Alert>
      </Layout>
    </Box>
  )
}

WarningBanner.propTypes = {
  bg: PropTypes.string,
}

WarningBanner.defaultProps = {
  bg: 'yellow',
  status: 'warning',
}
