import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { Row, Container, Alert as BaseAlert } from 'react-bootstrap'
import { A } from '../link'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoIosWarning } from 'react-icons/io'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { cleanProps } from '../../../utils/cleanProps'
import { border } from 'styled-system'
import { FormRow } from '../row'

const Alert = styled(BaseAlert, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  display: inline-flex;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
  ${border}
`

const Summary = styled(BaseAlert, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  width: 100%;
  border-left: 3px solid;
`

const iconStyle = (props) =>
  css`
    height: 1.5rem;
    width: 1.5rem;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
    align-self: center;
    flex: none;
  `

const InfoIcon = styled(AiOutlineInfoCircle)`
  ${iconStyle}
`

const WarningIcon = styled(IoIosWarning)`
  ${iconStyle}
`

const SuccessIcon = styled(IoIosCheckmarkCircleOutline)`
  ${iconStyle}
`

export const Error = (props) => {
  return (
    <Alert variant="danger" borderLeft="3px solid">
      {props.children}
    </Alert>
  )
}

export const Info = (props) => {
  return (
    <Alert variant="info">
      <InfoIcon />
      {props.children}
    </Alert>
  )
}

export const Warning = (props) => {
  return (
    <Alert variant="warning" borderLeft="3px solid">
      <WarningIcon />
      {props.children}
    </Alert>
  )
}

export const Success = (props) => {
  return (
    <Alert variant="success">
      <SuccessIcon />
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
        <Summary variant="danger" ref={errorSummaryRef}>
          <FormRow color="#000" fontWeight="700">
            {props.title}
          </FormRow>
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
        </Summary>
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
