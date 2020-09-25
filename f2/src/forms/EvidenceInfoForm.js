/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Trans, Plural } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { useStateValue } from '../utils/state'
import { fileExtensionPasses } from '../utils/acceptableFiles'
import { Form, Container } from 'react-bootstrap'
import { Formik, Field, FieldArray } from 'formik'
import { Info, Warning } from '../components/formik/alert'
import { List } from '../components/formik/list'
import { P, HiddenText } from '../components/formik/paragraph'
import { A } from '../components/formik/link'
import { NextCancelButtons, DefaultButton } from '../components/formik/button'
import { FileUpload } from '../components/formik/fileUpload'
import { TextArea } from '../components/formik/textArea'
import { FormRow } from '../components/formik/row'
import { Modal } from 'react-bootstrap'

export const EvidenceInfoForm = (props) => {
  const [data] = useStateValue()
  const cached = {
    ...data.formData.evidence,
  }

  const { i18n } = useLingui()

  const allowedFilesList = [
    <Trans id="evidencePage.fileTypes1" />,
    <Trans id="evidencePage.fileTypes2" />,
    <Trans id="evidencePage.fileTypes3" />,
  ]

  const [files, setFiles] = useState(cached.files)
  const [fileDescriptions, setFileDescriptions] = useState(
    cached.fileDescriptions,
  )
  const [status, setStatus] = useState('')
  const [showModal, setShowModal] = useState(false)

  //Place file descriptions into an object to be used by Formik.
  const fileDescriptionsObj = {}

  const setFormValues = () => {
    fileDescriptions.forEach((description, index) => {
      fileDescriptionsObj[`file-description-${index}`] = description
    })
  }

  setFormValues()

  useEffect(() => {
    const element = document.getElementById('status')
    if (status === 'fileUpload.added' || status === 'fileUpload.removed') {
      element.focus()
    }
  }, [status])

  const displayFileCount = files.length > 0
  const maxFiles = files.length >= 3

  const onFilesChange = (e) => {
    const file = e.target.files[0]
    if (file.size > 4194304) {
      // 4MB in bytes is 4194304.
      setStatus('fileUpload.maxSizeError')
      setShowModal(true)
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    } else if (file.size === 0) {
      setStatus('fileUpload.zeroSizeError')
      setShowModal(true)
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    }
    if (!fileExtensionPasses(file.name)) {
      setStatus('evidencePage.supportedFiles')
      setShowModal(true)
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    }
    if(file.type.indexOf("image") !== -1) {
      let img = new Image()
      img.src = window.URL.createObjectURL(file)
      img.onload = () => {
        if (img.width < 128 || img.height < 128){
          setStatus('fileUpload.imageTooSmallError')
          setShowModal(true)
        }
        else {
          setStatus('fileUpload.added')
          setFiles(files.concat(file))
          setFileDescriptions(fileDescriptions.concat(''))
          }        
      }
      e.target.value = ''
    }
    else {
      setStatus('fileUpload.added')
      setFiles(files.concat(e.target.files[0]))
      setFileDescriptions(fileDescriptions.concat(''))
      e.target.value = '' // clear the file input target, to allow the file to be removed then added again
    }
  }

  const onFileDescriptionChange = (description, index) => {
    fileDescriptions[index] = description
    setFileDescriptions(fileDescriptions)
  }

  const removeFile = (index) => {
    let newFiles = files.filter((_, fileIndex) => index !== fileIndex)
    let newFileDescriptions = fileDescriptions.filter(
      (_, fileIndex) => index !== fileIndex,
    )
    setFiles(newFiles)
    setFileDescriptions(newFileDescriptions)
    setStatus('fileUpload.removed')
  }

  const handleClose = () => setShowModal(false)

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="fileUpload.removed" />
          <Trans id="fileUpload.added" />
          <Trans id="fileUpload.fileName" />
          <Trans id="fileUpload.fileDescription" />
          <Trans id="fileUpload.fileSize" />
          <Trans id="fileUpload.CosmosDBFile" />
          <Trans id="fileUpload.classification.title" />
          <Trans id="fileUpload.classification.cannotscan" />
          <Trans id="fileUpload.malwareScan" />
          <Trans id="fileUpload.malwareScan.clean" />
          <Trans id="fileUpload.isAdult" />
          <Trans id="fileUpload.adultScore" />
          <Trans id="fileUpload.isRacy" />
          <Trans id="fileUpload.isRacy.false" />
          <Trans id="fileUpload.isRacy.true" />
          <Trans id="fileUpload.racyScore" />
          <Trans id="fileUpload.fileAttachment" />
          <Trans id="fileUpload.fileAttachment.offensivewarning" />
          <Trans id="fileUpload.fileAttachment.offensivewarning.block" />
          <Trans id="fileUpload.virusScanError" />
          <Trans id="fileUpload.fileTypeError" />
          <Trans id="fileUpload.noFiles" />
        </div>
      ) : null}

      {status ? (
        <HiddenText tabIndex={-1} id="status">
          {i18n._(status)}
        </HiddenText>
      ) : null}

      <Modal show={showModal} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <Trans id="fileUpload.errorModal.title" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {status === 'fileUpload.maxSizeError' && (
              <FormRow>
                <Trans id="fileUpload.maxSizeError" />
              </FormRow>
            )}
            {status === 'fileUpload.zeroSizeError' && (
              <FormRow>
                <Trans id="fileUpload.zeroSizeError" />
              </FormRow>
            )}
            {status === 'evidencePage.supportedFiles' && (
              <List
                label={<Trans id="evidencePage.supportedFiles" />}
                items={allowedFilesList}
              />
            )}
            {status === 'fileUpload.imageTooSmallError' && (
              <FormRow>
                <Trans id="fileUpload.imageTooSmallError" />
              </FormRow>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <DefaultButton onClick={handleClose} label="OK" />
        </Modal.Footer>
      </Modal>

      <Formik
        initialValues={fileDescriptionsObj}
        enableReinitialize={true}
        onSubmit={() => {
          const data = {
            files,
            fileDescriptions,
          }
          props.onSubmit(data)
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              {!maxFiles && (
                <FormRow>
                  <P
                    fontSize="md"
                    borderBottom="2px"
                    borderColor="rgb(232, 232, 232)"
                    marginBottom="1rem"
                    paddingBottom="1rem"
                    width="100%"
                  >
                    <Trans id="evidencePage.fileSize" />
                  </P>
                </FormRow>
              )}
              {displayFileCount && (
                <React.Fragment>
                  <FormRow>
                    <P fontSize="1.25rem" lineHeight="1.33" marginBottom="1rem">
                      <Plural
                        id="evidencePage.numberOfFilesAttached"
                        value={files.length}
                        one="# file attached"
                        other="# files attached"
                      />
                    </P>
                  </FormRow>
                  <FieldArray
                    name="fileDescriptions"
                    render={() =>
                      files.map((f, index) => {
                        return (
                          <FormRow
                            key={index}
                            separator="true"
                            marginTop="1rem"
                            paddingTop="1.5rem"
                            paddingBottom="1.5rem"
                          >
                            <P
                              fontSize="1.25rem"
                              lineHeight="1.5rem"
                              marginBottom="1rem"
                            >
                              {f.name}
                            </P>
                            <Field
                              label={
                                <Trans id="evidencePage.fileDescription" />
                              }
                              name={`file-description-${index}`}
                              id={`file-description-${index}`}
                              onChange={(e) => {
                                handleChange(e)
                                onFileDescriptionChange(e.target.value, index)
                              }}
                              component={TextArea}
                            />
                            <A
                              onClick={() => {
                                removeFile(index)
                                setFormValues()
                              }}
                              color="red"
                              fontSize="1.125rem"
                            >
                              <Trans id="evidencePage.removeFileButton" />
                            </A>
                          </FormRow>
                        )
                      })
                    }
                  />
                </React.Fragment>
              )}
              {maxFiles && (
                <FormRow>
                  <Warning>
                    <Trans id="evidencePage.maxFileWarning" />
                  </Warning>
                </FormRow>
              )}
              {!maxFiles && (
                <React.Fragment>
                  <FileUpload
                    id="uploader"
                    label={<Trans id="evidencePage.addFileButton" />}
                    onChange={onFilesChange}
                  />
                  <List
                    label={<Trans id="evidencePage.supportedFiles" />}
                    items={allowedFilesList}
                  />
                </React.Fragment>
              )}
              <FormRow>
                <Info>
                  <Trans id="evidencePage.fileWarning" />
                </Info>
              </FormRow>
              <FormRow>
                <NextCancelButtons
                  submit={<Trans id="button.continue" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="evidencePage.nextPage" />}
                />
              </FormRow>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

EvidenceInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
