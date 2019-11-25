/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Flex, Alert, AlertIcon, AlertDescription } from '@chakra-ui/core'
import { Text } from '../text'

export const WarningBanner = props => {
  const { status, message } = props

  return (
    <Alert p={4} status={status}>
      <AlertIcon mt={0} />
      <AlertDescription>
        <Text>{message}</Text>
      </AlertDescription>
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
