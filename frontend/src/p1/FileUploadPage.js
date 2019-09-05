/**@jsx jsx */
import { css, jsx } from '@emotion/core'
// import {  Field } from 'react-final-form'
// import { finalFormAdapter } from '../utils/finalFormAdapter'
// import { TextArea } from '../components/text-area'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { ApolloConsumer } from 'react-apollo'
import { Container } from '../components/container'
import { Text } from '../components/text'
import { H1, H2, H5 } from '../components/header'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { FileUpload } from '../components/file-upload'
import { TrackPageViews } from '../TrackPageViews'
import { Layout } from '../components/layout'
import { Steps } from '../components/stepper'
import { P } from '../components/paragraph'
import { getDoneForms, getFiles } from '../utils/queriesAndMutations'
import upload from '../images/upload.svg'
import { BackButton } from '../components/backbutton'

class FileUploadInternal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: getFiles(props.client).map(name => ({ name })),
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
    navigate(getDoneForms(client) ? 'confirmation' : 'contactinfoquestion')
  }

  render() {
    const { files } = this.state

    return (
      <Layout>
        <TrackPageViews />
        <BackButton route="/p1/uploadfilesquestion">
          <Trans>previous page</Trans>
        </BackButton>
        <Steps activeStep={4} totalSteps={6} />
        <H1>
          <Trans>Attach supporting files</Trans>
        </H1>
        <P>
          <Trans>
            Include any messages, conversations, receipts, or other evidence
            that shows what happened.
          </Trans>
        </P>
        <P>
          <Trans>Please attach one file at a time.</Trans>
        </P>
        <Container
          marginTop={[2, null, 5]}
          marginBottom={[2, 5, 5]}
          display="flex"
          flexDirection="row"
          justifyContent={['flex-start', 'center', 'flex-start']}
          textAlign="center"
        >
          <FileUpload
            onChange={this.onChange}
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
              <Trans>Attach file</Trans>
            </span>
          </FileUpload>
        </Container>
        <P>
          <Trans> </Trans>
        </P>
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
              width={['auto', '100%', 'auto']}
              marginBottom={[2, null, 3]}
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="left"
            >
              <Text marginLeft="0rem">{f.name}</Text>
              <form>
                <br />

                <p>
                  <H5>Describe what this file shows</H5>
                  <textarea width="50px " height="100px">
                    {' '}
                  </textarea>
                </p>

                <br />
              </form>

              <Button
                // float="right"

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
                mt="1rem"
                mb="4rem"
                display={['flex', 'block', 'flex']}
                alignItems="center"
                css={css`
                  button,
                  div[name='buttonlink-container'] a {
                    padding: 0.7rem 1.5rem;
                    width: 100%;
                    text-align: center;
                  }

                  @media (max-width: 640px) {
                    div[name='buttonlink-container'] a {
                      padding: 0.7rem 0;
                    }
                  }
                `}
              >
                <Container mt="1rem">
                  <Button
                    onClick={() => this.submitAndNavigate(client)}
                    type="submit"
                  >
                    <Trans>Next: Your contact information</Trans>
                  </Button>
                </Container>

                <Container mt="1.9rem" ml={['3rem', '0', '3rem']}>
                  <Link
                    type="button"
                    color="black"
                    to="/p1/"
                    textAlign="center"
                  >
                    <Trans>Cancel report</Trans>
                  </Link>
                </Container>
              </Container>
            </Container>
          )}
        </ApolloConsumer>
      </Layout>
    )
  }
}

FileUploadInternal.propTypes = {
  client: PropTypes.object.isRequired,
}

export const FileUploadPage = () => (
  <ApolloConsumer>
    {client => <FileUploadInternal client={client} />}
  </ApolloConsumer>
)
