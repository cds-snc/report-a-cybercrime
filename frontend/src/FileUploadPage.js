/** @jsx jsx */
import { React, Component } from 'react'
import { Trans } from '@lingui/macro'
import { css, jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Container } from './components/container'
import { P } from './components/paragraph'
import { StyledSpan, Text } from './components/text'
import { H1 } from './components/header'
import { Button } from './components/button'
import { ButtonLink } from './components/button-link'
import { FileUpload } from './components/file-upload'
import { finalFormAdapter } from './utils/finalFormAdapter'
import { UPLOAD_FILE_MUTATION } from './utils/queriesAndMutations'

const FileUploadAdapter = finalFormAdapter(FileUpload)
const CenterContent = styled('div')`
  max-width: 750px;
`
export class FileUploadPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // file: undefined,
      files: [{ name: 'test.txt' }],
      uploadSuccess: undefined,
      fileMD5: undefined,
      resultText: '', // Text that shows the result of the upload operation, does not appear if blank
      postSubmission: false, // Whether or not we are asking the user to submit further files
      fileDescription: '',
    }
  }

  onChange = e => {
    this.setState({ files: this.state.files.concat(e.target.files[0]) })
  }

  removeFile = index => {
    let newFiles = this.state.files
    newFiles.splice(index, 1)
    this.setState({ files: newFiles })
  }
  // submit = uploadFile => {
  //   const file = this.state.file // SJA fix for multiples
  //   uploadFile({
  //     variables: {
  //       file: file,
  //       fileDescription: this.state.fileDescription,
  //     },
  //   }).then(fileResult => {
  //     this.setState({
  //       file: undefined,
  //       postSubmission: true,
  //       uploadSuccess: fileResult.data.uploadFile.success,
  //       fileMD5: fileResult.data.uploadFile.md5,
  //     })
  //   })
  // }

  validate = () => {}

  render() {
    const { files } = this.state

    console.log({ files })

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
                  <Trans>Upload Evidence</Trans>
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

                        <Text marginTop={[4, null, 5]}>
                          <Trans>{files.length} files selected</Trans>
                        </Text>

                        {!this.state.postSubmission && (
                          <div>
                            {files ? (
                              files.map((f, index) => (
                                <Container
                                  display="flex"
                                  flexDirection="row"
                                  justifyContent="space-around"
                                  width="300px"
                                  marginBottom={[2, null, 3]}
                                  key={index}
                                >
                                  <Text>{f.name}</Text>
                                  <Button
                                    marginTop={0}
                                    backgroundColor="red"
                                    type="button"
                                    onClick={() => this.removeFile(index)}
                                  >
                                    X
                                  </Button>
                                </Container>
                              ))
                            ) : (
                              <Trans>
                                No files currently selected for upload
                              </Trans>
                            )}
                          </div>
                        )}
                        <Container
                          width="305px"
                          marginTop={[3, null, 4]}
                          css={css`
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                          `}
                        >
                          <Button type="button">
                            <Trans>Back</Trans>
                          </Button>

                          <Button type="submit">
                            <Trans>Next</Trans>
                          </Button>
                        </Container>

                        <Container
                          width="300px"
                          marginTop={[2, null, 3]}
                          css={css`
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                          `}
                        >
                          <ButtonLink type="button" color="black">
                            <Trans>Cancel Report</Trans>
                          </ButtonLink>

                          <ButtonLink
                            type="button"
                            color="black"
                            marginTop={[1, null, 1]}
                          >
                            <Trans>Save Report</Trans>
                          </ButtonLink>
                        </Container>
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
