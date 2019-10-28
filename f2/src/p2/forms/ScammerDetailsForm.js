/** @jsx jsx */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Form, Field } from 'react-final-form'
import { Container } from '../../components/container'
import { plural, Trans } from '@lingui/macro'
import { ButtonsContainer } from '../../components/buttons-container'
import { TextArea } from '../../components/text-area'
import { Button } from '../../components/button'
import { Text } from '../../components/text'
import { H3 } from '../../components/header'
import { P } from '../../components/paragraph'
import { Ul } from '../../components/unordered-list'
import { Li } from '../../components/list-item'
import { FileUpload } from '../../components/file-upload'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getScammerDetails } from '../../utils/queriesAndMutations'
import upload from '../../images/upload.svg'

const TextAreaAdapter = finalFormAdapter(TextArea)

export const ScammerDetailsFormWrapped = props => {
  const { client } = props
  const cached = getScammerDetails(client)
  const [files, setFiles] = useState(cached.files.map(file => ({ name: file })))
  const [fileDescriptions, setFileDescriptions] = useState(
    cached.fileDescriptions,
  )
  const [scammerDetails, setScammerDetails] = useState(cached.scammerDetails)

  const onChange = e => {
    if (e.target.id === 'scammerDetails') {
      setScammerDetails(e.target.value)
    } else if (e.target.id.indexOf('file-description') > -1) {
      const index = Number(e.target.id.substring(17))
      let newFileDescriptions = JSON.parse(JSON.stringify(fileDescriptions))
      newFileDescriptions[index] = e.target.value
      setFileDescriptions(newFileDescriptions)
    } else if (e.target.files && e.target.files[0]) {
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
                <Trans>Think about including things such as:</Trans>
              </P>
              <Ul>
                <Li>
                  <Trans>Who the scammer claimed to be</Trans>
                </Li>{' '}
                <Li>
                  <Trans>Where they asked you to send things</Trans>
                </Li>
                <Li>
                  <Trans>What language they used to communicate</Trans>
                </Li>
                <Li>
                  <Trans>Any screenshots, messages, or receipts</Trans>
                </Li>
              </Ul>
              <label htmlFor="scammerDetails">
                <Text marginTop={[5, null, 6]}>
                  <Trans>
                    <strong>
                      What do you know about where the scam came from?
                    </strong>
                  </Trans>
                  <Text
                    css={css`
                      color: gray;
                    `}
                    mt="6px"
                    mb="8px"
                  >
                    <Trans>
                      Remember to include any email addresses, phone numbers, or
                      website links
                    </Trans>
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
                <FileUpload
                  onChange={onChange}
                  width={['auto', '100%', 'auto']}
                  paddingLeft="1.5rem"
                  paddingRight="1.5rem"
                  paddingBottom="0.6rem"
                  paddingTop="0.6rem"
                  css={css`
                    display: flex;
                    justify-content: center;
                    img {
                      width: 1rem;
                      margin-right: 0.6rem;
                    }
                  `}
                >
                  <img alt="upload icon" src={upload} />
                  <span>
                    <Trans>Add file</Trans>
                  </span>
                </FileUpload>
              </Container>
              <H3>
                {plural(files.length, {
                  one: '# file attached',
                  other: '# files attached',
                })}
              </H3>

              <Container>
                {files.map((f, index) => (
                  <React.Fragment key={index}>
                    <H3 marginTop={[4, null, 5]} fontSize={[2, null, 4]}>
                      {f.name}
                    </H3>

                    <label htmlFor={`file-description-${index}`}>
                      <Text>
                        <Trans>Describe what this file shows</Trans>
                      </Text>
                    </label>
                    <div>
                      <Field
                        input={{ value: fileDescriptions[index], onChange }}
                        name={`file-description-${index}`}
                        id={`file-description-${index}`}
                        component={TextAreaAdapter}
                        height="50px"
                      />
                    </div>

                    <Button
                      float="right"
                      backgroundColor="crimson"
                      type="button"
                      onClick={() => removeFile(index)}
                    >
                      <Trans>Remove file</Trans>
                    </Button>
                  </React.Fragment>
                ))}
              </Container>
              <ButtonsContainer
                buttonLink={false}
                cancel={true}
                nextPage="Impact of scam"
              />
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
