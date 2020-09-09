import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { DefaultButton } from '../button'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'

export const ModalMessage = (props) => {
  console.log(props.msg.toString())
  const { i18n } = useLingui()

  const [show, setShow] = useState(true)

  const handleClose = () => {
    props.handelClose()
    setShow(false)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> {props.title} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {' '}
        <Trans id={props.msg} />{' '}
      </Modal.Body>
      <Modal.Footer>
        <DefaultButton onClick={handleClose} label="OK" />
      </Modal.Footer>
    </Modal>
  )
}
