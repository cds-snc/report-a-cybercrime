import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Container, Alert } from 'react-bootstrap'
import { A } from '../link'
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

export const ErrorSummary = (props) => {
  const errorSummaryRef = useRef(null)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

  useEffect(() => {
    /*
    If user has attempted to submit scroll to the summary, otherwise simply display it.
    */
    if (props.submissions > 0) {
      scrollToRef(errorSummaryRef)
    }
  }, [props.submissions])

  return (
    <Container>
      <Row>
        <Alert
          variant="danger"
          className="banner-border error-summary"
          ref={errorSummaryRef}
        >
          <Row className="error-summary-title ">{props.title}</Row>
          <Row>
            <Container>
              {Object.entries(props.errors).map(([key, error]) => {
                return (
                  <React.Fragment key={key}>
                    <Row>
                      <A href={`#${key}`} marginBottom="0.5rem" color="initial">
                        {error.label} - {error.message}
                      </A>
                    </Row>
                  </React.Fragment>
                )
              })}
            </Container>
          </Row>
        </Alert>
      </Row>
    </Container>
  )
}

ErrorSummary.propTypes = {
  children: PropTypes.any,
}
Error.propTypes = {
  children: PropTypes.any,
}
