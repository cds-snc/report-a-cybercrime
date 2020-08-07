import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { GoChevronRight } from 'react-icons/go'
import { Route } from 'react-router-dom'
import { FiPaperclip } from 'react-icons/fi'

export const SubmitButton = (props) => {
  return (
    <Button type="submit" className="button submit-button">
      <span className="button-label">
        {props.label}
        <GoChevronRight className="button-icon-right" />
      </span>
    </Button>
  )
}

export const CancelButton = (props) => {
  return (
    <Route
      render={({ history }) => (
        <Button
          type="button"
          className="button cancel-button"
          to="/confirmCancel"
          onClick={() => history.push('/confirmCancel')}
        >
          <span className="button-label">{props.label}</span>
        </Button>
      )}
    />
  )
}

export const NextCancelButtons = (props) => {
  return (
    <Container className="next-cancel-buttons">
      <Row>
        <p className="label next-page-label">{props.label}</p>
      </Row>
      <Row>
        <SubmitButton label={props.submit} />
        <CancelButton label={props.cancel} />
      </Row>
    </Container>
  )
}

export const UploadButton = (props) => {
  return (
    <Button type="button" className="button upload-button">
      <span className="button-label">
        <FiPaperclip className="button-icon-left" />
        {props.label}
      </span>
    </Button>
  )
}

export const SkipButton = (props) => {
  return (
    <Route
      render={({ history }) => (
        <Button
          type="button"
          className="button skip-button"
          to={props.to}
          onClick={() => history.push(props.to)}
        >
          <span className="button-label">
            {props.label}
            <GoChevronRight className="button-icon-right" />
          </span>
        </Button>
      )}
    />
  )
}
