import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { color } from 'styled-system'
import { theme } from '../../../theme'
import { cleanProps } from '../../../utils/cleanProps'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { GoChevronRight } from 'react-icons/go'
import { Route } from 'react-router-dom'
import { FiPaperclip } from 'react-icons/fi'

const buttonTypes = {
  SUBMIT: {
    bg: 'rgb(31, 81, 38);',
    fg: 'rgb(255, 255, 255);',
    borderColor: 'rgb(24, 60, 31);',
    active: {
      bg: 'rgb(24, 60, 31);',
      fg: 'rgb(255, 255, 255);',
    },
  },
  DEFAULT: {
    bg: 'rgb(232, 232, 232);',
    fg: 'rgb(0, 0, 0);',
    borderColor: 'rgb(213, 213, 213);',
    active: {
      bg: 'rgb(213, 213, 213);',
      fg: 'rgb(0, 0, 0);',
    },
  },
  UPLOAD: {
    bg: 'rgb(30, 78, 140);',
    fg: 'rgb(255, 255, 255);',
    borderColor: 'rgb(21, 62, 117);',
    active: {
      bg: 'rgb(21, 62, 117);',
      fg: 'rgb(255, 255, 255);',
    },
  },
  SKIP: {
    bg: 'rgb(174, 174, 174);',
    fg: 'rgb(0, 0, 0);',
    borderColor: 'rgb(128, 128, 128);',
    active: {
      bg: 'rgb(213, 213, 213);',
      fg: 'rgb(0, 0, 0);',
    },
  },
}

const buttonStyle = (props) => {
  let buttonProps = buttonTypes.DEFAULT

  if (props.type === 'submit') {
    buttonProps = buttonTypes.SUBMIT
  }

  if (props.type === 'upload') {
    buttonProps = buttonTypes.UPLOAD
  }

  if (props.type === 'skip') {
    buttonProps = buttonTypes.SKIP
  }

  return css`
    background-color: ${buttonProps.bg}
    color: ${buttonProps.fg}
    border-color: ${buttonProps.borderColor}

    &:hover,
    &:focus {
      background-color: ${buttonProps.bg}
      color: ${buttonProps.fg}
      box-shadow: rgb(213, 213, 213) 0px 0px 0px 2px;
    }

    &:not(:disabled):not(.disabled):active {
      background-color: ${buttonProps.active.bg}
      color: ${buttonProps.active.fg}
    }
  `
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
  border-style: outset;
  min-width: 8rem;
  padding-left: 0rem;
  padding-right: 0rem;
  align-items: center;
  ${buttonStyle}
`

const BaseButtonTheme = styled(Button)`
  ${color}
`

export const TestButton = (props) => {
  return (
    <BaseButtonTheme color="white" bg="green">
      <ButtonLabel>{props.label}</ButtonLabel>
    </BaseButtonTheme>
  )
}

export const TestSubmitButton = (props) => {
  return (
    <BaseButton type="submit">
      <ButtonLabel>
        {props.label}
        <GoChevronRight className="button-icon-right" />
      </ButtonLabel>
    </BaseButton>
  )
}

export const TestCancelButton = (props) => {
  return (
    <BaseButton type="cancel">
      <ButtonLabel>{props.label}</ButtonLabel>
    </BaseButton>
  )
}

export const TestUploadButton = (props) => {
  return (
    <BaseButton type="upload">
      <ButtonLabel>
        <FiPaperclip className="button-icon-left" />
        {props.label}
      </ButtonLabel>
    </BaseButton>
  )
}

export const TestSkipButton = (props) => {
  return (
    <BaseButton type="skip">
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
