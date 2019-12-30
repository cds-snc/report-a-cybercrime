/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Form, Field } from 'react-final-form'
import { Container, InfoCard } from '../components/container'
import { plural, Trans } from '@lingui/macro'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { H2, H3 } from '../components/header'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FileUpload } from '../components/file-upload'
import { getScammerDetails } from '../utils/queriesAndMutations'
import { Box, Stack, FormControl, PseudoBox } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'

export const ScammerDetailsFormWrapped = props => {
  const { client } = props
  const cached = getScammerDetails(client)
  const [files, setFiles] = useState(cached.files.map(file => ({ name: file })))
  const [fileDescriptions, setFileDescriptions] = useState(
    cached.fileDescriptions,
  )
  const [scammerDetails, setScammerDetails] = useState(cached.scammerDetails)
  const [status, setStatus] = useState('')
  useEffect(() => {
    if (status) {
      document.getElementById('status').focus()
    }
  }, [status])
  const { i18n } = useLingui()

  const onChange = e => {
    if (e.target.id === 'scammerDetails') {
      setScammerDetails(e.target.value)
    } else if (e.target.id.indexOf('file-description') > -1) {
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

  const localSubmit = client => {
    const data = {
      scammerDetails,
      files: files.map(f => f.name),
      fileDescriptions,
    }
    props.onSubmit(client, data)
  }
  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="fileUpload.removed" /> <Trans id="fileUpload.added" />
        </div>
      ) : null}
      <ApolloConsumer>
        {client => (
          <Form
            onSubmit={() => localSubmit(client)}
            render={({ handleSubmit }) => (
              <Stack
                as="form"
                onSubmit={handleSubmit}
                spacing={6}
                shouldWrapChildren
              >
                <Field name="scammerDetails">
                  {props => (
                    <FormControl>
                      <FormLabel htmlFor="scammerDetails">
                        <Trans id="scammerDetail.summary" />
                      </FormLabel>
                      <FormHelperText>
                        <Trans id="scammerDetail.reminder" />
                      </FormHelperText>

                      <TextArea
                        id="scammerDetails"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                      />
                    </FormControl>
                  )}
                </Field>

                <Stack spacing={4}>
                  <Box>
                    <FileUpload onChange={onChange}>
                      <Button leftIcon="attachment" as="div" variantColor="blue">
                        <Trans id="scammerDetail.addFileButtom" />
                      </Button>
                    </FileUpload>
                  </Box>

                  <H2>
                    {plural(files.length, {
                      one: '# file attached',
                      other: '# files attached',
                    })}
                  </H2>

                  {status ? (
                    <PseudoBox
                      as="Text"
                      tabIndex={-1}
                      id="status"
                      _focus={{
                        outline: 'none',
                        bg: 'white',
                        boxShadow: 'outline',
                        borderColor: 'black',
                      }}
                    >
                      {i18n._(status)}
                    </PseudoBox>
                  ) : null}
                </Stack>

                <Container>
                  {files.map((f, index) => (
                    <React.Fragment key={index}>
                      <InfoCard mb={4}>
                        <Stack spacing={4}>
                          <H3>{f.name}</H3>
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
                                  <FormLabel
                                    htmlFor={`file-description-${index}`}
                                  >
                                    <Trans id="scammerDetail.fileDescription" />
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
                            <Trans id="scammerDetail.removeFileButton" />
                          </Button>
                        </Stack>
                      </InfoCard>
                    </React.Fragment>
                  ))}
                </Container>

                <NextAndCancelButtons>
                  <Trans id="scammerDetail.nextButton">
                    Next: Impact of scam
                  </Trans>
                </NextAndCancelButtons>
              </Stack>
            )}
          />
        )}
      </ApolloConsumer>
    </React.Fragment>
  )
}

ScammerDetailsFormWrapped.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  client: PropTypes.any.isRequired,
}

export const ScammerDetailsForm = props => (
  <ApolloConsumer>
    {client => <ScammerDetailsFormWrapped client={client} {...props} />}
  </ApolloConsumer>
)
