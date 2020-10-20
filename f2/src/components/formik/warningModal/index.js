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

  const shouldPrompt = (dirty, isSubmitting) => {
    const alteredForm = dirty && !isSubmitting

    return alteredForm && !confirmNav
  }

  return (
    <Route
      render={({ history }) => (
        <React.Fragment>
          <Prompt
            when={shouldPrompt(props.dirty, props.isSubmitting)}
            message={(location, action) => {
              if (action === 'PUSH') {
                return true
              } else {
                setShowModal(true)
                return false
              }
            }}
          />
          <Modal show={showModal} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>
                <Trans id="warningModal.title" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Trans id="warningModal.body" />
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <DefaultButton
                onClick={() => confirm(history)}
                label={<Trans id="button.ok" />}
              />
              <DefaultButton
                onClick={cancel}
                label={<Trans id="button.cancel" />}
              />
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      )}
    />
  )
}
