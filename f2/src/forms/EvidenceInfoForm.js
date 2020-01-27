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
import { Box, Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { P } from '../components/paragraph'

export const EvidenceInfoForm = props => {
  const [data] = useStateValue()
  const cached = {
    files: [],
    fileDescriptions: [],
    ...data.formData.scammerDetails,
  }

  const [files, setFiles] = useState(cached.files.map(file => ({ name: file })))
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
      files: files.map(f => f.name),
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
              <Box>
                <FileUpload onChange={onChange}>
                  <Button leftIcon="attachment" as="div" variantColor="blue">
                    <Trans id="evidencePage.addFileButtom" />
                  </Button>
                </FileUpload>
              </Box>

              <P>
                {plural(files.length, {
                  one: '# file attached',
                  other: '# files attached',
                })}
              </P>

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
                            onChange,
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
