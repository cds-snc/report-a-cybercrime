import React from 'react'
import { Alert } from 'react-bootstrap'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoIosWarning } from 'react-icons/io'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

export const Error = (props) => {
  return (
    <Alert variant="danger" className="alert-banner">
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
    <Alert variant="warning" className="alert-banner">
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
