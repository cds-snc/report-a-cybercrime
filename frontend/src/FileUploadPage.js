/** @jsx jsx */
import { Component } from 'react'
import { Trans } from '@lingui/macro'
import { css, jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Container } from './components/container'
import { Text, StyledSpan } from './components/text'
import { H1, H2 } from './components/header'
import { Button } from './components/button'
import { ButtonLink } from './components/button-link'
import { FileUpload } from './components/file-upload'
import { finalFormAdapter } from './utils/finalFormAdapter'
import { UPLOAD_FILE_MUTATION } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'

const FileUploadAdapter = finalFormAdapter(FileUpload)

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  window.alert(JSON.stringify(data))
  // client.writeData({ data })
  // navigate('/form3')
}

export class FileUploadPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // file: undefined,
      files: [{ name: 'test.txt' }],
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

  validate = () => {}

  render() {
    const { files } = this.state

    return (
      <ApolloConsumer>
        {() => (
          <Mutation mutation={UPLOAD_FILE_MUTATION}>
            {uploadFile => (
              <Container>
                <TrackPageViews />
                <H1 fontSize={[5, null, 6]} marginBottom="70px">
                  <Trans>Upload Evidence</Trans>
                </H1>

                <Form
                  onSubmit={() => {
                    this.submit(uploadFile)
                  }}
                  validate={this.validate}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Field
                        id="file"
                        name="file"
                        component={FileUploadAdapter}
                        onChange={this.onChange}
                        paddingLeft="15px"
                        paddingRight="15px"
                        // margin="0 auto"
                      >
                        <Trans>Choose a file</Trans>
                      </Field>

                      <H2 fontSize={[3, null, 5]} marginTop={[5, null, 6]}>
                        <Trans>{files.length} files selected</Trans>
                      </H2>

                      <Container>
                        {files.map((f, index) => (
                          <Container
                            width="300px"
                            marginBottom={[2, null, 3]}
                            key={index}
                            css={css`
                              display: flex;
                              flex-direction: row;
                              justify-content: space-between;
                            `}
                          >
                            <Text>{f.name}</Text>
                            <Button
                              float="right"
                              marginTop={0}
                              backgroundColor="red"
                              type="button"
                              onClick={() => this.removeFile(index)}
                            >
                              X
                            </Button>
                          </Container>
                        ))}
                      </Container>

                      <Container
                        width="305px"
                        marginTop={[5, null, 6]}
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
              </Container>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    )
  }
}
