/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { Form } from 'react-final-form'
import { Plural, Trans } from '@lingui/macro'
import { TextArea } from '../components/text-area'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FileUpload } from '../components/file-upload'
import { Box, Stack, VisuallyHidden } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { P } from '../components/paragraph'
import { LinkButton } from '../components/link'
import { Text } from '../components/text'
import { Field } from '../components/Field'
import { Alert } from '../components/Messages'
import { fileExtensionPasses } from '../utils/acceptableFiles'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'

export const EvidenceInfoForm = (props) => {
  const [data] = useStateValue()
  const cached = {
    ...formDefaults.evidence,
    ...data.formData.evidence,
  }

  const [files, setFiles] = useState(cached.files)
  const [fileDescriptions, setFileDescriptions] = useState(
    cached.fileDescriptions,
  )
  const [status, setStatus] = useState('')
  useEffect(() => {
    if (status) {
      document.getElementById('status').focus()
    }
  }, [status])
  const { i18n } = useLingui()

  const onFilesChange = (e) => {
    const file = e.target.files[0]
    if (file.size > 4194304) {
      // 4MB in bytes is 4194304.
      alert(
        'Warning: Your file size exceeds 4MB. Please reduce the size and try uploading again. \n Alerte : La taille de votre fichier dépasse 4 Mo. Veuillez réduire la taille et essayer de télécharger à nouveau.',
      )
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    } else if (file.size === 0) {
      alert(
        'Warning: Your file is empty. Please select the right file and try uploading again. \n Alerte : Votre dossier est vide. Veuillez sélectionner le bon fichier et réessayer de télécharger.',
      )
      e.target.value = '' // clear the file input target, to allow the file to be chosen again
      return
    }
    if (!fileExtensionPasses(file.name)) {
      alert(
        i18n._('evidencePage.supportedFiles') +
          i18n._('evidencePage.fileTypes1') +
          ', ' +
          i18n._('evidencePage.fileTypes2') +
          ', ' +
          i18n._('evidencePage.fileTypes3'),
      )
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

  const localOnSubmit = () => {
    const data = {
      files, // from useState()
      fileDescriptions, // from useState()
    }
    if (clientFieldsAreValid(data, formDefaults.evidence)) props.onSubmit(data)
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
          <Trans id="fileUpload.malwareScan" />
          <Trans id="fileUpload.isAdult" />
          <Trans id="fileUpload.adultScore" />
          <Trans id="fileUpload.isRacy" />
          <Trans id="fileUpload.racyScore" />
          <Trans id="fileUpload.fileAttachment" />
          <Trans id="fileUpload.virusScanError" />
          <Trans id="fileUpload.fileTypeError" />
          <Trans id="fileUpload.noFiles" />
        </div>
      ) : null}
      <Form
        onSubmit={localOnSubmit}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            spacing={6}
            shouldWrapChildren
          >
            <Stack spacing={4}>
              {files.length < 3 && (
                <Box
                  fontSize="sm"
                  mb={8}
                  borderBottomWidth="2px"
                  borderBottomColor="grey.400"
                >
                  <P fontSize="md">
                    <Trans id="evidencePage.fileSize" />
                  </P>
                </Box>
              )}
              {files.length > 0 && (
                <P>
                  <Plural
                    id="evidencePage.numberOfFilesAttached"
                    value={files.length}
                    one="# file attached"
                    other="# files attached"
                  />
                </P>
              )}
              {status ? (
                <VisuallyHidden tabIndex={-1} id="status">
                  {i18n._(status)}
                </VisuallyHidden>
              ) : null}
              {files.map((f, index) => (
                <Stack
                  spacing={4}
                  shouldWrapChildren
                  borderBottom="2px"
                  borderBottomColor="gray.200"
                  py={6}
                  key={index}
                >
                  <Text>{f.name}</Text>
                  <Field
                    label={<Trans id="evidencePage.fileDescription" />}
                    name={`file-description-${index}`}
                    input={{
                      value: fileDescriptions[index],
                      onChange: onFileDescriptionChange,
                    }}
                    component={TextArea}
                  />
                  <LinkButton onClick={() => removeFile(index)} color="red.600">
                    <Trans id="evidencePage.removeFileButton" />
                  </LinkButton>
                </Stack>
              ))}
              {files.length === 3 && (
                <Alert status="warning">
                  <Trans id="evidencePage.maxFileWarning" />
                </Alert>
              )}
              {files.length < 3 && (
                <React.Fragment>
                  <Box mb={4}>
                    <FileUpload
                      leftIcon="attachment"
                      variantColor="blue"
                      onChange={onFilesChange}
                    >
                      <Trans id="evidencePage.addFileButton" />
                    </FileUpload>
                  </Box>
                  <Box mb={4}>
                    <P fontSize="md" fontWeight="bold">
                      <Trans id="evidencePage.supportedFiles" />
                    </P>
                    <Ul>
                      <Li fontSize="md" mb={2}>
                        <Trans id="evidencePage.fileTypes1" />
                      </Li>
                      <Li fontSize="md" mb={2}>
                        <Trans id="evidencePage.fileTypes2" />
                      </Li>
                      <Li fontSize="md" mb={2}>
                        <Trans id="evidencePage.fileTypes3" />
                      </Li>
                    </Ul>
                  </Box>
                </React.Fragment>
              )}
              <Alert status="info">
                <Trans id="evidencePage.fileWarning" />
              </Alert>
              ))
            </Stack>
            <NextAndCancelButtons
              next={<Trans id="evidencePage.nextPage" />}
              button={<Trans id="evidencePage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

EvidenceInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
