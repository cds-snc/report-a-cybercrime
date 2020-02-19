/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { MidFeedbackForm } from '../../forms/MidFeedbackForm'
import { TrackPageViews } from '../../TrackPageViews'

export const Page = props => (
  <React.Fragment>
    <TrackPageViews />
    {props.children}
    <MidFeedbackForm />
  </React.Fragment>
)

Page.propTypes = {
  children: PropTypes.node,
}
