/**@jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/core'
import { Trans } from '@lingui/macro'

export const Steps = ({ activeStep, totalSteps }) => (
  <Text fontSize={['xl', null, '2xl', null]} color="blackAlpha.600">
    <Trans id="stepper" values={{ activeStep, totalSteps }} />
  </Text>
)

Steps.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
}
