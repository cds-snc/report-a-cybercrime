/**@jsx jsx */
import { jsx } from '@emotion/core'
import Stepper from 'react-stepper-horizontal'
import PropTypes from 'prop-types'
import { I18n, i18nMark } from '@lingui/react'

const languages = [
  i18nMark('Describe'),
  i18nMark('Money'),
  i18nMark('Scammer'),
  i18nMark('Upload'),
  i18nMark('Contact'),
]

export const Steps = ({ activeStep, ...props }) => (
  <I18n>
    {({ i18n }) => (
      <Stepper
        steps={languages.map(key => {
          return { title: i18n._(key) }
        })}
        activeStep={activeStep}
        {...props}
      />
    )}
  </I18n>
)

Steps.propTypes = {
  activeStep: PropTypes.number,
  lang: PropTypes.string,
  children: PropTypes.any,
}
