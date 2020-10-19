import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'
import { Container, Row, Modal } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { DefaultButton } from '../button'

export const WarningModal = (props) => {
  const [showModal, setShowModal] = useState(false)

  const [confirmNav, setConfirmNav] = useState(false)

  const confirm = (history) => {
    setShowModal(false)
    setConfirmNav(true)
    history.goBack()
  }

  const cancel = () => {
    setShowModal(false)
  }

  const shouldBlock = (dirty, isSubmitting) => {
    const alteredForm = dirty && !isSubmitting

    return alteredForm && !confirmNav
  }

  return (
    <Route
      render={({ history }) => (
        <React.Fragment>
          <Prompt
            when={shouldBlock(props.dirty, props.isSubmitting)}
            message={() => {
              setShowModal(true)
              return false
            }}
          />
          <Modal show={showModal} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>
                <Trans id="fileUpload.errorModal.title" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container></Container>
            </Modal.Body>
            <Modal.Footer>
              <DefaultButton onClick={() => confirm(history)} label="OK" />
              <DefaultButton onClick={cancel} label="Cancel" />
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )}
    />
  )
}
