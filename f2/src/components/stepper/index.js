/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import { Container } from '../container'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/core'
import { Trans } from '@lingui/macro'
import { graphqlSync } from 'graphql'

export const Steps = ({ activeStep, totalSteps }) => (
  <Text fontSize={['xl', null, '2xl', null]} color="gray.500">
    <Trans>
      Step {activeStep} of {totalSteps}
    </Trans>
  </Text>
)

Steps.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
}
