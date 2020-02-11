/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import { Plural, Trans } from '@lingui/macro'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FileUpload } from '../components/file-upload'
import { Box, Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { P } from '../components/paragraph'
import { Link } from '../components/link'

export const EvidenceInfoForm = props => {
  const [data] = useStateValue()
  const cached = {
    files: [],
    fileDescriptions: [],
    ...data.formData.scammerDetails,
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

  const onChange = e => {
    if (e.target.id.indexOf('file-description') > -1) {
      const index = Number(e.target.id.substring(17))
      let newFileDescriptions = JSON.parse(JSON.stringify(fileDescriptions))
      newFileDescriptions[index] = e.target.value
      setFileDescriptions(newFileDescriptions)
    } else if (e.target.files && e.target.files[0]) {
      setStatus('fileUpload.added')
      setFiles(files.concat(e.target.files[0]))
      setFileDescriptions(fileDescriptions.concat(''))
    }
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
              <P borderBottom="2px" borderBottomColor="gray.200" pb={2}>
                <Plural
                  id="evidencePage.numberOfFilesAttached"
                  value={files.length}
                  one="# file attached"
                  other="# files attached"
                />
              </P>
              {status ? (
                <VisuallyHidden tabIndex={-1} id="status">
                  {i18n._(status)}
                </VisuallyHidden>
              ) : null}

              {files.map((f, index) => (
                <Stack
                  spacing={4}
                  borderBottom="2px"
                  borderBottomColor="gray.200"
                  py={6}
                  key={index}
                >
                  <P>{f.name}</P>
                  <FormControl>
                    <FormLabel htmlFor={`file-description-${index}`}>
                      <Trans id="evidencePage.fileDescription" />
                    </FormLabel>
                    <Field
                      mb={2}
                      id={`file-description-${index}`}
                      component={TextArea}
                    />
                    <Link
                      as="button"
                      onClick={() => removeFile(index)}
                      color="red.600"
                    >
                      Remove File
                    </Link>
                  </FormControl>
                </Stack>
              ))}

              <Box>
                <FileUpload onChange={onChange}>
                  <Button leftIcon="attachment" as="div" variantColor="blue">
                    <Trans id="evidencePage.addFileButtom" />
                  </Button>
                </FileUpload>
              </Box>
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
