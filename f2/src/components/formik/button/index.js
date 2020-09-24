import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Button as BaseButton, Container, Row, Col } from 'react-bootstrap'
import { GoChevronRight } from 'react-icons/go'
import { Route } from 'react-router-dom'
import { FiPaperclip } from 'react-icons/fi'
import { buttonTypes } from '../theme'

const buttonStyle = (props) => {
  let buttonProps = props.type

  return css`
    background-color: ${buttonProps.bg};
    color: ${buttonProps.fg};
    border-color: ${buttonProps.borderColor};

    &:hover,
    &:focus {
      background-color: ${buttonProps.bg};
      color: ${buttonProps.fg};
      box-shadow: #d5d5d5 0px 0px 0px 2px;
    }

    &:not(:disabled):not(.disabled):active {
      background-color: ${buttonProps.active.bg};
      color: ${buttonProps.active.fg};
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

const Button = styled(BaseButton)`
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

const BigButton = styled(BaseButton)`
  padding: 1rem 1.5rem;
  height: inherit;
  margin-left: 0rem;
  ${buttonStyle}
`

const RightArrowIcon = styled(GoChevronRight)`
  margin-left: 0.5rem;
  margin-right: -0.5rem;
`

const PaperClipIcon = styled(FiPaperclip)`
  margin-left: -0.5rem;
  margin-right: 0.5rem;
`

export const DefaultButton = (props) => {
  return (
    <Button type={buttonTypes.DEFAULT}>
      <ButtonLabel>{props.label}</ButtonLabel>
    </Button>
  )
}

export const MidFormFeedbackButton = (props) => {
  return (
    <BigButton type={buttonTypes.DEFAULT}>
      <ButtonLabel>{props.label}</ButtonLabel>
    </BigButton>
  )
}

export const SubmitButton = (props) => {
  return (
    <Button type={buttonTypes.SUBMIT}>
      <ButtonLabel>
        {props.label}
        <RightArrowIcon />
      </ButtonLabel>
    </Button>
  )
}

export const CancelButton = (props) => {
  return (
    <Route
      render={({ history }) => (
        <Button
          type={buttonTypes.DEFAULT}
          onClick={() => history.push('/confirmCancel')}
        >
          <ButtonLabel>{props.label}</ButtonLabel>
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
    <Button type={buttonTypes.UPLOAD}>
      <ButtonLabel>
        <PaperClipIcon />
        {props.label}
      </ButtonLabel>
    </Button>
  )
}

export const SkipButton = (props) => {
  return (
    <Route
      render={({ history }) => (
        <Button type={buttonTypes.SKIP} onClick={() => history.push(props.to)}>
          <ButtonLabel>
            {props.label}
            <RightArrowIcon />
          </ButtonLabel>
        </Button>
      )}
    />
  )
}

export const FeedbackButton = (props) => {
  return (
    <Button type={buttonTypes.FEEDBACK}>
      <ButtonLabel>{props.label}</ButtonLabel>
    </Button>
  )
}
