import React, { Component } from 'react'
const { getLogger } = require('./utils/winstonLoggerClient')

const logger = getLogger(__filename)

export default class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // log the error to winston
    console.log('Something wrong happened')
    logger.error({
      message: 'Client App Error',
      error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
      info: JSON.stringify(info, Object.getOwnPropertyNames(info)),
    })
    this.setState({ info })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
