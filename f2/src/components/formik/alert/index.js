import React, { useRef, useEffect } from 'react'
import { Trans } from '@lingui/macro'
import { Row, Container } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoIosWarning } from 'react-icons/io'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

export const Error = (props) => {
  return (
    <Alert variant="danger" className="alert-banner banner-border">
      {props.children}
    </Alert>
  )
}

export const Info = (props) => {
  return (
    <Alert variant="info" className="alert-banner">
      <AiOutlineInfoCircle className="alert-icon" />
      {props.children}
    </Alert>
  )
}

export const Warning = (props) => {
  return (
    <Alert variant="warning" className="alert-banner banner-border">
      <IoIosWarning className="alert-icon" />
      {props.children}
    </Alert>
  )
}

export const Success = (props) => {
  return (
    <Alert variant="success" className="alert-banner">
      <IoIosCheckmarkCircleOutline className="alert-icon" />
      {props.children}
    </Alert>
  )
}

export const ErrorSummary = () => {
  const errorSummaryRef = useRef(null)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  useEffect(() => {
    scrollToRef(errorSummaryRef)
  }, [])

  return (
    <Container>
      <Row>
        <Alert
          variant="danger"
          className="banner-border error-summary"
          ref={errorSummaryRef}
        >
          <Row className="error-summary-title ">
            <Trans id="default.hasValidationErrors" />
          </Row>
        </Alert>
      </Row>
    </Container>
  )
}
