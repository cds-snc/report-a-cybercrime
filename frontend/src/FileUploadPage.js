/**@jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { ApolloConsumer } from 'react-apollo'
import { Container } from './components/container'
import { Text } from './components/text'
import { H1, H2 } from './components/header'
import { Button } from './components/button'
import { Link } from './components/link'
import { FileUpload } from './components/file-upload'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Steps } from './components/stepper'
import { P } from './components/paragraph'

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
    navigate('/contactinfoquestion')
  }

  render() {
    const { files } = this.state

    return (
      <Layout>
        <TrackPageViews />
        <Container
          display="flex"
          width="90%"
          flexDirection="row"
          marginBottom="20px"
        >
          <Steps
            activeStep={3}
            steps={[
              { href: '/scaminfo' },
              { href: '/moneylost' },
              { href: '/suspectinfo' },
              {},
              {},
            ]}
          />
        </Container>
        <H1 marginBottom="70px">
          <Trans>Attach supporting files</Trans>
        </H1>
        <P>
          <Trans>
            {' '}
            Supporting files could include copies of emails, conversations, and
            receipts. Any documentation could serve as evidence for police.
          </Trans>
        </P>
        <Container
          width="300px"
          marginTop={[2, null, 5]}
          marginBottom={[2, null, 5]}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <FileUpload
            onChange={this.onChange}
            paddingLeft="15px"
            paddingRight="15px"
          >
            <Trans>Attach file</Trans>
          </FileUpload>
        </Container>
        <hr />

        <I18n>
          {({ i18n }) => (
            <H2 fontSize={[3, null, 5]}>
              {i18n.plural({
                value: files.length,
                one: '# file attached',
                other: '# files attached',
              })}
            </H2>
          )}
        </I18n>

        <Container>
          {files.map((f, index) => (
            <Container
              width="300px"
              marginBottom={[2, null, 3]}
              key={index}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text>{f.name}</Text>
              <Button
                float="right"
                marginTop={0}
                backgroundColor="crimson"
                type="button"
                onClick={() => this.removeFile(index)}
              >
                <Trans>Remove file</Trans>
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
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Button onClick={() => this.submitAndNavigate(client)}>
                  <Trans>Continue</Trans>
                </Button>
              </Container>

              <Container
                width="300px"
                marginTop={[2, null, 3]}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Link type="button" color="black" to="/" textAlign="center">
                  <Trans>Cancel report</Trans>
                </Link>
              </Container>
            </Container>
          )}
        </ApolloConsumer>
      </Layout>
    )
  }
}
