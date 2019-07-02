/**@jsx jsx */
import { jsx } from '@emotion/core'
import Stepper from 'react-stepper-horizontal'
import PropTypes from 'prop-types'

export const Steps = ({ activeStep, ...props }) => (
  <Stepper
    steps={[
      { title: '' },
      { title: '' },
      { title: '' },
      { title: '' },
      { title: '' },
    ]}
    activeStep={activeStep}
    {...props}
  />
)

Steps.propTypes = {
  activeStep: PropTypes.number,
  lang: PropTypes.string,
  children: PropTypes.any,
}
