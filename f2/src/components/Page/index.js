/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { MidFeedbackForm } from '../../forms/MidFeedbackForm'
import { TrackPageViews } from '../../TrackPageViews'
import { Layout } from '../layout'

export const Page = props => (
  <React.Fragment>
    <TrackPageViews />
    {props.children}
    <Layout mt={10} columns={{ base: 4 / 4, lg: 9 / 12, xl: 7 / 12 }}>
      <MidFeedbackForm />
    </Layout>
  </React.Fragment>
)

Page.propTypes = {
  children: PropTypes.node,
}
