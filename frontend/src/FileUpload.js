/** @jsx jsx */
import { Component } from 'react'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled'
import { P } from './components/paragraph'
import { H1 } from './components/header'
import { Button } from './components/button'
import { FileUpload } from './components/file-upload'
import { finalFormAdapter } from './utils/finalFormAdapter'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { UPLOAD_FILE_MUTATION } from './utils/queriesAndMutations'
import { Trans } from '@lingui/macro'
import { Container } from './components/container'
import { TextArea } from './components/text-area'

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
      resultText: '', // Text that shows the result of the upload operation, does not appear if blank
      postSubmission: false, // Whether or not we are asking the user to submit further files
      dataRestrictionsSpecific: '',
    }
  }

  onChange = e => {
    // this.resetRadioButtons()
    this.setState({ file: e.target.files[0] })
  }

  makeFeedbackString = result => {
    var returnString = ''
    returnString +=
      result.success === true
        ? 'File uploaded successfully'
        : result.errorMessage
    if (result.success === true) {
      returnString += '\n' + 'MD5: ' + result.md5
    }
    return returnString
  }

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
        resultText: this.makeFeedbackString(fileResult.data.uploadFile),
      })
    })
    //navigate(`/summary/${encodeURIComponent(data.identifier)}`)
  }

  // resetRadioButtons = () => {
  //   for (let x of document.getElementsByClassName('resettable-radio-button')) {
  //     x.checked = false
  //   }
  //   this.forceUpdate()
  // }

  // reportAnswerSelected = () => {
  //   for (let x of document.getElementsByClassName('resettable-radio-button')) {
  //     if (
  //       x.checked === true &&
  //       x.name === 'Question1' &&
  //       (x.value === 'true' || x.value === 'false')
  //     ) {
  //       // These are stored as text, we need to convert to boolean
  //       return x.value === 'true'
  //     }
  //   }
  //   return null
  // }

  // shareAnswerSelected = () => {
  //   for (let x of document.getElementsByClassName('resettable-radio-button')) {
  //     if (x.checked === true && x.name === 'Question2') {
  //       // These are stored as text, we need to convert to boolean
  //       return x.value
  //     }
  //   }
  //   return null
  // }

  drawTextbox = () => {
    return (
      <TextArea
        padding="10px"
        style={{ resize: 'none', boxSizing: 'border-box' }}
        height="100px"
        onChange={text =>
          this.setState({ dataRestrictionsSpecific: text.target.value })
        }
        placeholder="Write your data restrictions here..."
      />
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
                            hidden={this.state.resultText === ''}
                          >
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
