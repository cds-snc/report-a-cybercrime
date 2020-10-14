import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Button as BaseButton, Container, Row, Col } from 'react-bootstrap'
import { GoChevronRight } from 'react-icons/go'
import { Route } from 'react-router-dom'
import { FiPaperclip } from 'react-icons/fi'
import { cleanProps } from '../../../utils/cleanProps'
import { buttonTypes } from './theme'
import { space, border, layout, typography } from 'styled-system'

const buttonStyle = (props) => {
  let buttonProps = props.buttonStyle

  if (buttonProps) {
    return css`
      background-color: ${buttonProps.backGround};
      color: ${buttonProps.color};
      border-color: ${buttonProps.borderColor};

      &:hover,
      &:focus {
        background-color: ${buttonProps.backGround};
        color: ${buttonProps.color};
        box-shadow: #d5d5d5 0px 0px 0px 2px;
      }

      &:not(:disabled):not(.disabled):active {
        background-color: ${buttonProps.active.backGround};
        color: ${buttonProps.active.color};
      }
    `
  }
}

const ButtonLabel = styled('span', {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.125rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  ${space}
  ${typography}
`

const Button = styled(BaseButton, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  height: 3rem;
  -webkit-box-pack: center;
  border-style: outset;
  min-width: 10rem;
  padding-left: 0rem;
  padding-right: 0rem;
  align-items: center;
  z-index: 1;
  ${space}
  ${border}
  ${layout}
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
    <Button buttonStyle={buttonTypes.DEFAULT}>
      <ButtonLabel>{props.label}</ButtonLabel>
    </Button>
  )
}

export const MidFormFeedbackButton = (props) => {
  return (
    <Button
      buttonStyle={buttonTypes.DEFAULT}
      border="1px solid"
      padding="1rem 1.5rem"
      marginLeft="0rem"
      borderStyle="outset"
      height="inherit"
    >
      <ButtonLabel fontSize="1.25rem" paddingLeft="0rem" paddingRight="0rem">
        {props.label}
      </ButtonLabel>
    </Button>
  )
}

export const SubmitButton = (props) => {
  return (
    <Button buttonStyle={buttonTypes.SUBMIT} type="submit">
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
          buttonStyle={buttonTypes.DEFAULT}
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
        <Col xs="1" className="button-container"></Col>
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
    <Button buttonStyle={buttonTypes.UPLOAD} onClick={props.onClick}>
      <ButtonLabel>
        <PaperClipIcon />
        {props.label}
      </ButtonLabel>
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
          buttonStyle={buttonTypes.SKIP}
          onClick={() => history.push(props.to)}
        >
          <ButtonLabel>
            {props.label}
            <RightArrowIcon />
          </ButtonLabel>
        </Button>
      )}
    />
  )
}
