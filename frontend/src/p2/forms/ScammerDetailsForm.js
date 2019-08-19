/** @jsx jsx */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Container } from '../../components/container'
import { TextArea } from '../../components/text-area'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { Text } from '../../components/text'
import { H2, H3 } from '../../components/header'
import { P } from '../../components/header'
import { Ul } from '../../components/unordered-list'
import { Li } from '../../components/list-item'
import { FileUpload } from '../../components/file-upload'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getScammerDetails } from '../../utils/queriesAndMutations'

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
    let newFiles = files.filter((_, fileIndex) => index != fileIndex)
    let newFileDescriptions = fileDescriptions.filter(
      (_, fileIndex) => index != fileIndex,
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
              <H2 fontSize={[4, null, 5]} marginTop="40px">
                <Trans>
                  Share details that could help identify the scammer
                </Trans>
              </H2>
              <P>
                <Trans>Think about including things such as:</Trans>
              </P>
              <Ul>
                <Li>
                  <Trans>How they contacted you and who they claim to be</Trans>
                </Li>
                <Li>
                  <Trans>
                    Their usernames, email address, or website links
                  </Trans>
                </Li>
                <Li>
                  <Trans>
                    Any other details about your interaction or transaction with
                    the scammer
                  </Trans>
                </Li>
              </Ul>

              <label htmlFor="scammerDetails">
                <Text marginTop={[5, null, 6]}>
                  <Trans>Tell us about the scammer</Trans>
                </Text>
              </label>
              <div>
                <Field
                  input={{ value: scammerDetails, onChange }}
                  name="scammerDetails"
                  id="scammerDetails"
                  component={TextAreaAdapter}
                  height="200px"
                />
              </div>

              <H2 fontSize={[4, null, 5]} marginTop="40px">
                <Trans>Share files to show what the scammer did</Trans>
              </H2>
              <P>
                <Trans>Think about including things such as:</Trans>
              </P>
              <Ul>
                <Li>
                  <Trans>
                    Screenshots, conversations, bank statements, and receipts
                  </Trans>
                </Li>
              </Ul>

              <Container
                width="300px"
                marginTop={[2, null, 5]}
                marginBottom={[2, null, 5]}
                display="flex"
                flexDirection="row"
                justifyContent="center"
              >
                <FileUpload
                  onChange={onChange}
                  paddingLeft="15px"
                  paddingRight="15px"
                >
                  <Trans>Attach file</Trans>
                </FileUpload>
              </Container>

              <I18n>
                {({ i18n }) => (
                  <H3>
                    {i18n.plural({
                      value: files.length,
                      one: '# file attached',
                      other: '# files attached',
                    })}
                  </H3>
                )}
              </I18n>

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

              <Container
                width="305px"
                marginTop={[1, null, 1]}
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                `}
              >
                <Button type="submit">
                  <Trans>Continue</Trans>
                </Button>
              </Container>

              <Container
                width="300px"
                marginTop={[1, null, 1]}
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                `}
              >
                <Link type="button" color="black" to="/p2" textAlign="center">
                  <Trans>Cancel report</Trans>
                </Link>
              </Container>
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
