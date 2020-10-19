import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { GoChevronRight } from 'react-icons/go'
import { Route } from 'react-router-dom'
import { FiPaperclip } from 'react-icons/fi'

export const DefaultButton = (props) => {
  return (
    <Button
      type="button"
      onClick={() => props.onClick()}
      className="default-button button"
    >
      {props.label}
    </Button>
  )
}

export const MidFormFeedbackButton = (props) => {
  return (
    <Button
      type="button"
      className="default-button mid-form-feedback-button "
      onClick={props.onClick}
    >
      <span className="mid-form-feedback-button-label">{props.label}</span>
    </Button>
  )
}

export const SubmitButton = (props) => {
  return (
    <Button
      type="submit"
      disabled={props.disabled}
      className="button submit-button"
    >
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
          className="button default-button"
          onClick={() => history.push('/confirmCancel')}
        >
          {props.label}
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
        <Col xs="auto" className="button-container">
          <SubmitButton label={props.submit} />
        </Col>
        <Col xs="auto" className="button-container">
          <CancelButton label={props.cancel} />
        </Col>
      </Row>
    </Container>
  )
}

/*
  This is just a button, to handle file uploads use the 
  FileUpload component from f2\src\components\formik\fileUpload\index.js
*/
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

export const FeedbackButton = (props) => {
  return (
    <Button type="submit" className="button feedback-button">
      <span className="button-label">{props.label}</span>
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
          onClick={() => {
            if (props.onClick) {
              props.onClick()
            }
            history.push(props.to)
          }}
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

/*export const FeedbackButton = (props) => {
  return (
    <Button type="submit" className="button feedback-button">
      <span className="button-label">{props.label}</span>
    </Button>
  )
}*/
