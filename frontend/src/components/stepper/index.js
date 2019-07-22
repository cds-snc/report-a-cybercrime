/**@jsx jsx */
import { jsx } from '@emotion/core'
import Stepper from 'react-stepper-horizontal'
import PropTypes from 'prop-types'
import { Text } from '../text'

export const Steps = ({ activeStep, steps, ...props }) => (
  <Text width="100%">
    <Stepper steps={steps} activeStep={activeStep} {...props} />
  </Text>
)

Steps.defaultProps = {
  steps: [{ title: '' }],
}
Steps.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number,
  lang: PropTypes.string,
  children: PropTypes.any,
}
