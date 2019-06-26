/** @jsx jsx */
import { Component } from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Container } from './components/container'
import { Text } from './components/text'
import { H1, H2 } from './components/header'
import { Button } from './components/button'
import { ButtonLink } from './components/button-link'
import { FileUpload } from './components/file-upload'
import { TrackPageViews } from './TrackPageViews'

export class FileUploadPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
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

  submitAndNavigate = client => {
    const files = this.state.files.map(file => file.name)
    const data = { files }
    client.writeData({ data }) // TODO: actually upload files
    navigate('/contactinfo')
  }

  render() {
    const { files } = this.state

    return (
      <Container>
        <TrackPageViews />
        <H1 fontSize={[5, null, 6]} marginBottom="70px">
          <Trans>Upload Evidence</Trans>
        </H1>
        <Container
          width="300px"
          marginBottom={[2, null, 3]}
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
          `}
        >
          <FileUpload
            onChange={this.onChange}
            paddingLeft="15px"
            paddingRight="15px"
          >
            <Trans>Choose a file</Trans>
          </FileUpload>
        </Container>

        <H2 fontSize={[3, null, 5]} marginTop={[5, null, 6]}>
          {files.length} <Trans>files selected</Trans>
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
                backgroundColor="crimson"
                type="button"
                onClick={() => this.removeFile(index)}
              >
                <Trans>Remove</Trans>
              </Button>
            </Container>
          ))}
        </Container>

        <ApolloConsumer>
          {client => (
            <Container>
              <Container
                width="300px"
                marginTop={[7, null, 8]}
                css={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                `}
              >
                <Button type="button" onClick={() => navigate('/suspectinfo')}>
                  <Trans>Back</Trans>
                </Button>

                <Button onClick={() => this.submitAndNavigate(client)}>
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
            </Container>
          )}
        </ApolloConsumer>
      </Container>
    )
  }
}
