/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/core'
import { Text } from '../text'

export const WarningBanner = props => {
  const { status, message, bg } = props

  return (
    <Alert p={4} status={status} bg={`${bg}.400`} fontFamily="body">
      <AlertIcon mt={0} color="black" />
      <AlertDescription color="black">{message}</AlertDescription>
    </Alert>
  )
}

WarningBanner.propTypes = {
  bg: PropTypes.string,
}

WarningBanner.defaultProps = {
  bg: 'yellow',
  status: 'warning',
  message:
    "Warning! This is a prototype. It won't actually submit your report to the RCMP.",
}
