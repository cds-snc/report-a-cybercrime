import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { cleanProps } from '../../../utils/cleanProps'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { GoChevronRight } from 'react-icons/go'
import { Route } from 'react-router-dom'
import { FiPaperclip } from 'react-icons/fi'

const buttonStyle = (props) => {
  if (props.type === 'submit') {
    return css`
      background-color: rgb(31, 81, 38);
      color: rgb(255, 255, 255);
      border-color: rgb(24, 60, 31);

      &:hover,
      &:focus {
        background-color: rgb(31, 81, 38);
        box-shadow: rgb(213, 213, 213) 0px 0px 0px 2px;
      }

      &:not(:disabled):not(.disabled):active {
        background-color: rgb(24, 60, 31);
      }
    `
  }
}

const ButtonLabel = styled.span`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.125rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
`

const BaseButton = styled(Button, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  height: 3rem;
  -webkit-box-pack: center;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 4px;
  border-style: outset;
  min-width: 8rem;
  padding-left: 0rem;
  padding-right: 0rem;
  align-items: center;
  ${buttonStyle}
`

export const TestButton = (props) => {
  return (
    <BaseButton type="submit">
      <ButtonLabel>
        {props.label}
        <GoChevronRight className="button-icon-right" />
      </ButtonLabel>
    </BaseButton>
  )
}

export const DefaultButton = (props) => {
  return (
    <Button
      type="button"
      disabled={props.disabled}
      className="button default-button"
    >
      <span className="button-label">{props.label}</span>
    </Button>
  )
}

export const MidFormFeedbackButton = (props) => {
  return (
    <Button type="button" className="default-button mid-form-feedback-button ">
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

export const FeedbackButton = (props) => {
  return (
    <Button type="submit" className="button feedback-button">
      <span className="button-label">{props.label}</span>
    </Button>
  )
}
