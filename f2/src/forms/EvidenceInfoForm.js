/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Trans, Plural } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { useStateValue } from '../utils/state'
import { fileExtensionPasses } from '../utils/acceptableFiles'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'

import { Form, Container } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { Info, Warning } from '../components/formik/alert'
import { List } from '../components/formik/list'
import { P } from '../components/formik/paragraph'
import { A } from '../components/formik/link'
import { NextCancelButtons } from '../components/formik/button'
import { FileUpload } from '../components/formik/fileUpload'
import { TextArea } from '../components/formik/textArea'
import { FormRow } from '../components/formik/row'
import { ModalMessage } from '../components/formik/modal'

export const EvidenceInfoForm = (props) => {
  const [data] = useStateValue()
  const cached = {
    ...data.formData.evidence,
  }

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
  const [errors, setErrors] = useState('')
  useEffect(() => {
    if (status) {
      //document.getElementById('status').focus()
    }
  }, [status])
  const { i18n } = useLingui()

  const displayFileCount = files.length > 0
  const maxFiles = files.length >= 3
  let errorMsg

  const onFilesChange = (e) => {
    const file = e.target.files[0]
    if (file.size > 4194304) {
      // 4MB in bytes is 4194304.
      setErrors('fileUpload.maxSizeError')
      errorMsg = <Trans id="fileUpload.maxSizeError" />
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    } else if (file.size === 0) {
      errorMsg = <Trans id="fileUpload.zeroSizeError" />
      setErrors('fileUpload.zeroSizeError')
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    }
    if (!fileExtensionPasses(file.name)) {
      errorMsg =
        i18n._('evidencePage.supportedFiles') +
        i18n._('evidencePage.fileTypes1') +
        ', ' +
        i18n._('evidencePage.fileTypes2') +
        ', ' +
        i18n._('evidencePage.fileTypes3')
      setErrors('fileUpload.fileExtensionError')
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    }
    setStatus('fileUpload.added')
    setFiles(files.concat(e.target.files[0]))
    setFileDescriptions(fileDescriptions.concat(''))
    e.target.value = '' // clear the file input target, to allow the file to be removed then added again
  }

  const onFileDescriptionChange = (e) => {
    const index = Number(e.target.id.substring(17))
    let newFileDescriptions = JSON.parse(JSON.stringify(fileDescriptions))
    newFileDescriptions[index] = e.target.value
    setFileDescriptions(newFileDescriptions)
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

      {errors && (
        <ModalMessage
          title="File Size Error"
          msg={errorMsg}
          handelClose={() => setErrors('')}
        />
      )}

      <Formik
        initialValues={cached}
        onSubmit={() => {
          const data = {
            files, // from useState()
            fileDescriptions, // from useState()
          }
          console.log('Submit - ', JSON.stringify(data, null, 2))
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <FormRow marginBottom="0rem" marginTop="0rem">
                {!maxFiles && (
                  <FormRow marginBottom="3rem">
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
                  <P fontSize="1.25rem" lineHeight="1.33" marginBottom="1rem">
                    <Plural
                      id="evidencePage.numberOfFilesAttached"
                      value={files.length}
                      one="# file attached"
                      other="# files attached"
                    />
                  </P>
                )}
                {files.map((f, index) => (
                  <FormRow separator marginBottom="3rem">
                    <P
                      fontSize="1.25rem"
                      lineHeight="1.5rem"
                      marginBottom="1rem"
                    >
                      {f.name}
                    </P>
                    <Field
                      label={<Trans id="evidencePage.fileDescription" />}
                      name={`file-description-${index}`}
                      value={fileDescriptions[index]}
                      onChange={onFileDescriptionChange}
                      component={TextArea}
                    />
                    <A
                      onClick={() => removeFile(index)}
                      color="red"
                      fontSize="1.125rem"
                    >
                      <Trans id="evidencePage.removeFileButton" />
                    </A>
                  </FormRow>
                ))}
                {maxFiles && (
                  <Warning>
                    <Trans id="evidencePage.maxFileWarning" />
                  </Warning>
                )}
                {!maxFiles && (
                  <React.Fragment>
                    <FileUpload
                      id="evidenceUpload"
                      label={<Trans id="evidencePage.addFileButton" />}
                      onChange={onFilesChange}
                    />
                    <List
                      label={<Trans id="evidencePage.supportedFiles" />}
                      items={allowedFilesList}
                    />
                  </React.Fragment>
                )}
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
