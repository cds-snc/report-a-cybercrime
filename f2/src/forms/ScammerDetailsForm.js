/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Form, Field } from 'react-final-form'
import { Container } from '../components/container'
import { plural, Trans } from '@lingui/macro'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { Text } from '../components/text'
import { H2, H3 } from '../components/header'
import { P } from '../components/paragraph'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { FileUpload } from '../components/file-upload'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getScammerDetails } from '../utils/queriesAndMutations'
import upload from '../images/upload.svg'
import { Box, Flex, Stack, FormControl, FormLabel } from '@chakra-ui/core'

const TextAreaAdapter = finalFormAdapter(TextArea)

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
  i18n._('fileUpload.removed')
  i18n._('fileUpload.added')

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
    <ApolloConsumer>
      {client => (
        <Form
          onSubmit={() => localSubmit(client)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <P>
                <Trans id="scammerDetail.details" />
              </P>
              <Ul>
                <Li>
                  <Trans id="scammerDetail.detail1" />
                </Li>{' '}
                <Li>
                  <Trans id="scammerDetail.detail2" />
                </Li>
                <Li>
                  <Trans id="scammerDetail.detail3" />
                </Li>
                <Li>
                  <Trans id="scammerDetail.detail4" />
                </Li>
              </Ul>
              <label htmlFor="scammerDetails">
                <Text marginTop={[5, null, 6]}>
                  <strong>
                    <Trans id="scammerDetail.summary" />
                  </strong>
                  <Text color="darkGray" mt="6px" mb="8px">
                    <Trans id="scammerDetail.reminder" />
                  </Text>
                </Text>
              </label>
              <div>
                <Field
                  input={{ value: scammerDetails, onChange }}
                  name="scammerDetails"
                  id="scammerDetails"
                  component={TextAreaAdapter}
                  height="100px"
                  width="100%"
                />
              </div>
              <br></br>
              <Container
                marginTop={[2, null, 5]}
                marginBottom={[2, 5, 5]}
                display="flex"
                flexDirection="row"
                justifyContent={['flex-start', 'center', 'flex-start']}
                textAlign="center"
              >
                <FileUpload onChange={onChange}>
                  <Button leftIcon="attachment" as="div">
                    <Trans id="scammerDetail.addFileButtom" />
                  </Button>
                </FileUpload>
              </Container>

              <H2>
                {plural(files.length, {
                  one: '# file attached',
                  other: '# files attached',
                })}
              </H2>

              {status ? (
                <Text
                  tabIndex={-1}
                  id="status"
                  css={css`
                    :focus {
                      outline: 0px solid transparent;
                    }
                  `}
                >
                  {i18n._(status)}
                </Text>
              ) : null}

              <Container>
                {files.map((f, index) => (
                  <React.Fragment key={index}>
                    <Stack spacing={4} mb={4}>
                      <H3>{f.name}</H3>
                      <FormControl>
                        <FormLabel htmlFor={`file-description-${index}`}>
                          <Trans id="scammerDetail.fileDescription" />
                        </FormLabel>
                        <Field
                          input={{ value: fileDescriptions[index], onChange }}
                          name={`file-description-${index}`}
                          id={`file-description-${index}`}
                          component={TextAreaAdapter}
                          height="50px"
                        />
                      </FormControl>

                      <Button
                        mr="auto"
                        variantColor="red"
                        type="button"
                        onClick={() => removeFile(index)}
                      >
                        <Trans id="scammerDetail.removeFileButton" />
                      </Button>
                    </Stack>
                  </React.Fragment>
                ))}
              </Container>
              <NextAndCancelButtons>
                <Trans id="scammerDetail.nextButton">
                  Next: Impact of scam
                </Trans>
              </NextAndCancelButtons>
            </form>
          )}
        />
      )}
    </ApolloConsumer>
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
