/** @jsx jsx */
import { Component } from 'react'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Container } from './components/container'
import { TextArea } from './components/text-area'
import { P } from './components/paragraph'
import { Text } from './components/text'
import { H1 } from './components/header'
import { Button } from './components/button'
import { FileUpload } from './components/file-upload'
import { finalFormAdapter } from './utils/finalFormAdapter'
import { UPLOAD_FILE_MUTATION } from './utils/queriesAndMutations'
import { valueToObjectRepresentation } from 'apollo-utilities'

const FileUploadAdapter = finalFormAdapter(FileUpload)
const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
export class FileUploadPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: undefined,
      uploadSuccess: undefined,
      fileMD5: undefined,
      resultText: '', // Text that shows the result of the upload operation, does not appear if blank
      postSubmission: false, // Whether or not we are asking the user to submit further files
      dataRestrictionsSpecific: '',
    }
  }

  onChange = e => {
    this.setState({ file: e.target.files[0] })
  }

  // makeFeedbackString = result => {
  //   var returnString = ''
  //   returnString +=
  //     result.success === true
  //       ? 'File uploaded successfully'
  //       : result.errorMessage
  //   // if (result.success === true) {
  //   //   returnString += '\n' + 'MD5: ' + result.md5
  //   // }
  //   return returnString
  // }

  submit = uploadFile => {
    const file = this.state.file
    uploadFile({
      variables: {
        file: file,
        dataRestrictionsSpecific: this.state.dataRestrictionsSpecific,
      },
    }).then(fileResult => {
      this.setState({
        file: undefined,
        postSubmission: true,
        uploadSuccess: fileResult.data.uploadFile.success,
        fileMD5: fileResult.data.uploadFile.md5,
      })
    })
  }

  drawTextbox = () => {
    return (
      <Container>
        <label htmlFor="description">
          <Text>
            <Trans>Description</Trans>
          </Text>
        </label>
        <TextArea
          id="description"
          padding="10px"
          style={{ resize: 'none', boxSizing: 'border-box' }}
          height="100px"
          onChange={text =>
            this.setState({ dataRestrictionsSpecific: text.target.value })
          }
        />
      </Container>
    )
  }

  validate = () => {}

  render() {
    return (
      <ApolloConsumer>
        {() => (
          <Mutation mutation={UPLOAD_FILE_MUTATION}>
            {uploadFile => (
              <Container>
                <H1
                  fontSize={[5, null, 6]}
                  textAlign="center"
                  marginBottom="100px"
                >
                  <Trans>Upload a suspicious file</Trans>
                </H1>
                <CenterContent padding="30px">
                  <Form
                    margin="200px"
                    float="left"
                    onSubmit={() => {
                      this.submit(uploadFile)
                    }}
                    validate={this.validate}
                    render={({ handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <center>
                          {!this.state.postSubmission && (
                            <Field
                              id="file"
                              name="file"
                              component={FileUploadAdapter}
                              onChange={this.onChange}
                              paddingLeft="15px"
                              paddingRight="15px"
                              margin="0 auto"
                            >
                              <Trans>Choose File</Trans>
                            </Field>
                          )}

                          {!this.state.postSubmission && (
                            <P mt={4}>
                              {this.state.file ? (
                                this.state.file.name
                              ) : (
                                <Trans>
                                  No files currently selected for upload
                                </Trans>
                              )}
                            </P>
                          )}
                          {this.drawTextbox()}
                          {this.state.file !== undefined && (
                            <Button type="submit">
                              <Trans>Submit!</Trans>
                            </Button>
                          )}
                          <P
                            mt={4}
                            style={{ whiteSpace: 'pre-wrap' }}
                            hidden={this.state.uploadSuccess === undefined}
                          >
                            {this.state.uploadSuccess ? (
                              <Trans>
                                File uploaded successfully, MD5:{' '}
                                {this.state.fileMD5}
                              </Trans>
                            ) : (
                              <Trans>Error uploading file</Trans>
                            )}

                            {this.state.resultText}
                          </P>
                          {this.state.postSubmission && (
                            <Button
                              onClick={() =>
                                this.setState({
                                  postSubmission: false,
                                  resultText: '',
                                })
                              }
                            >
                              <Trans>Upload another file</Trans>
                            </Button>
                          )}
                        </center>
                      </form>
                    )}
                  />
                </CenterContent>
              </Container>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    )
  }
}
