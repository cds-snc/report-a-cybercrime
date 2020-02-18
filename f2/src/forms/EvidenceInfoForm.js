/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import { Container, InfoCard } from '../components/container'
import { plural, Trans } from '@lingui/macro'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { H2 } from '../components/header'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FileUpload } from '../components/file-upload'
import {
  Box,
  Stack,
  FormControl,
  VisuallyHidden,
  Alert,
  AlertIcon,
} from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { P } from '../components/paragraph'
import { Text } from '../components/text'

export const EvidenceInfoForm = props => {
  const [data] = useStateValue()
  const cached = {
    files: [],
    fileDescriptions: [],
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

  const onFilesChange = e => {
    const file = e.target.files[0]
    if (file.size > 4194304) {
      // 4MB in bytes is 4194304.
      alert(
        'ENGLISH - Warning: Your file size exceeds 4MB. Please reduce the size and try uploading again. \n FRANÇAIS - Alerte : La taille de votre fichier dépasse 4 Mo. Veuillez réduire la taille et essayer de télécharger à nouveau.  ',
      )
      return
    }
    setStatus('fileUpload.added')
    setFiles(files.concat(e.target.files[0]))
    setFileDescriptions(fileDescriptions.concat(''))
    e.target.value = '' // clear the file input target, to allow the file to be removed then added again
  }

  const onFileDescriptionChange = e => {
    const index = Number(e.target.id.substring(17))
    let newFileDescriptions = JSON.parse(JSON.stringify(fileDescriptions))
    newFileDescriptions[index] = e.target.value
    setFileDescriptions(newFileDescriptions)
  }

  const removeFile = index => {
    let newFiles = files.filter((_, fileIndex) => index !== fileIndex)
    let newFileDescriptions = fileDescriptions.filter(
      (_, fileIndex) => index !== fileIndex,
    )
    setFiles(newFiles)
    setFileDescriptions(newFileDescriptions)
    setStatus('fileUpload.removed')
  }

  const localSubmit = () => {
    const data = {
      files,
      fileDescriptions,
    }
    props.onSubmit(data)
  }

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="fileUpload.removed" /> <Trans id="fileUpload.added" />
        </div>
      ) : null}
      <Form
        onSubmit={() => localSubmit()}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            spacing={6}
            shouldWrapChildren
          >
            <Stack spacing={4}>
              {files.length < 3 && (
                <Box>
                  <Box
                    fontSize="sm"
                    mb={8}
                    borderBottomWidth="2px"
                    borderBottomColor="grey.400"
                  >
                    <Trans id="evidencePage.fileSize" />
                  </Box>
                  <FileUpload onChange={onFilesChange}>
                    <Button
                      leftIcon="attachment"
                      as="div"
                      variantColor="blue"
                      mb={8}
                    >
                      <Trans id="evidencePage.addFileButtom" />
                    </Button>
                  </FileUpload>
                  <P fontSize="sm">
                    <Text fontSize="sm" as="span" fontWeight="bold">
                      <Trans id="evidencePage.supportedFiles" />
                    </Text>

                    <Trans id="evidencePage.fileTypes" />
                  </P>
                </Box>
              )}

              {files.length > 0 && (
                <P>
                  {plural(files.length, {
                    one: '# file attached',
                    other: '# files attached',
                  })}
                </P>
              )}

              {status ? (
                <VisuallyHidden tabIndex={-1} id="status">
                  {i18n._(status)}
                </VisuallyHidden>
              ) : null}
            </Stack>

            <Container>
              {files.map((f, index) => (
                <React.Fragment key={index}>
                  <InfoCard as="article" mb={4}>
                    <Stack spacing={4}>
                      <H2 fontSize="2xl">{f.name}</H2>
                      <Box>
                        <Field
                          name={`file-description-${index}`}
                          input={{
                            value: fileDescriptions[index],
                            onChange: onFileDescriptionChange,
                          }}
                        >
                          {props => (
                            <FormControl>
                              <FormLabel htmlFor={`file-description-${index}`}>
                                <Trans id="evidencePage.fileDescription" />
                              </FormLabel>
                              <TextArea
                                id={`file-description-${index}`}
                                name={props.input.name}
                                value={props.input.value}
                                onChange={props.input.onChange}
                              />
                            </FormControl>
                          )}
                        </Field>
                      </Box>

                      <Button
                        mr="auto"
                        variantColor="red"
                        type="button"
                        onClick={() => removeFile(index)}
                      >
                        <Trans id="evidencePage.removeFileButton" />
                      </Button>
                    </Stack>
                  </InfoCard>
                </React.Fragment>
              ))}
            </Container>
            {files.length === 3 && (
              <P>
                <Alert status="success" backgroundColor="blue.100">
                  <AlertIcon name="info-outline" color="blue.700" />
                  <Text fontSize="sm">
                    <Trans id="evidencePage.maxFileWarning" />
                  </Text>
                </Alert>
              </P>
            )}

            {files.length < 3 && (
              <Alert status="success" backgroundColor="blue.100">
                <AlertIcon name="info-outline" color="blue.700" />
                <Text fontSize="sm">
                  <Trans id="evidencePage.fileWarning" />
                </Text>
              </Alert>
            )}
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
