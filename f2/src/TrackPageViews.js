import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useLocation } from 'react-router-dom'

const GA = process.env.REACT_APP_GOOGLE_ANALYTICS_ID

// debug dumps info the the console
// testMode doesn't connect to Google, but allows us to perform automated testing of the tracker in our code
ReactGA.initialize(GA, {
  debug: false,
  testMode: process.env.NODE_ENV !== 'production',
})
ReactGA.set({ anonymizeIp: true })

const logPageView = path => {
  if (typeof window === 'object') {
    ReactGA.pageview(path)
  }
}

export const TrackPageViews = () => {
  const location = useLocation()

  useEffect(() => {
    logPageView(location.pathname)
  })

  return <div />
}
