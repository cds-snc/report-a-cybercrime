import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Button as BaseButton, Container, Row, Col } from 'react-bootstrap'
import { GoChevronRight } from 'react-icons/go'
import { Route } from 'react-router-dom'
import { FiPaperclip } from 'react-icons/fi'
import { cleanProps } from '../../../utils/cleanProps'
import { space, border, layout, typography } from 'styled-system'
import { P } from '../paragraph'

const buttonTypes = {
  SUBMIT: {
    backGround: '#1f5126',
    color: '#FFF',
    borderColor: '#00692f',
    active: {
      backGround: '#183c1f',
      color: '#FFF',
    },
  },
  DEFAULT: {
    backGround: '#e8e8e8',
    color: '#000',
    borderColor: '#d5d5d5',
    active: {
      backGround: '#d5d5d5',
      color: '#000',
    },
  },
  UPLOAD: {
    backGround: '#153e75',
    color: '#FFF',
    borderColor: '#153e75',
    active: {
      backGround: '#003a66',
      color: '#FFF',
    },
  },
  SKIP: {
    backGround: '#aeaeae',
    color: '#000',
    borderColor: '#808080',
    active: {
      backGround: '#d5d5d5',
      color: '#000',
    },
  },
  FEEDBACK: {
    backGround: '#1e4e8c',
    color: '#FFF',
    borderColor: '#1e4e8c',
    active: {
      backGround: '#1e4e8c',
      color: '#FFF',
    },
  },
}

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

const ButtonContainer = styled(Container)`
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
`

const ButtonCol = styled(Col)`
  padding-left: 0rem;
  padding-right: 0rem;
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
      onClick={props.onClick}
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
    <ButtonContainer>
      <Row>
        <P marginBottom="1rem" fontSize="1.25rem" lineHeight="1.5rem">
          {props.label}
        </P>
      </Row>
      <Row>
        <ButtonCol xs="auto">
          <SubmitButton label={props.submit} />
        </ButtonCol>
        <ButtonCol xs="1"></ButtonCol>
        <ButtonCol xs="auto">
          <CancelButton label={props.cancel} />
        </ButtonCol>
      </Row>
    </ButtonContainer>
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
    <Button buttonStyle={buttonTypes.FEEDBACK} type="submit">
      <ButtonLabel>{props.label}</ButtonLabel>
    </Button>
  )
}

export const SkipButton = (props) => {
  return (
    <Route
      render={({ history }) => (
        <Button
          buttonStyle={buttonTypes.SKIP}
          onClick={() => {
            if (props.onClick) {
              props.onClick()
            }
            history.push(props.to)
          }}
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
