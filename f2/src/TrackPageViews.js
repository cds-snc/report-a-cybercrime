import React from 'react'
import ReactGA from 'react-ga'
import Component from '@reach/component-component'
import { Route } from 'react-router-dom'

const GA = process.env.REACT_APP_GOOGLE_ANALYTICS_ID

// debug dumps info the the console
// testMode doesn't connect to Google, but allows us to perform automated testing of the tracker in our code
ReactGA.initialize(GA, {
  debug: true,
  testMode: process.env.NODE_ENV !== 'production',
})

console.log({ GA })
console.log(`NODE_ENV=${process.env.NODE_ENV}`)

ReactGA.set({ anonymizeIp: true })

const logPageView = path => {
  if (typeof window === 'object') {
    ReactGA.pageview(path)
  }
}

export const TrackPageViews = () => (
  <Route
    render={({ location }) => (
      <Component
        didMount={() => logPageView(location.pathname)}
        didUpdate={() => logPageView(location.pathname)}
      />
    )}
  />
)
