/** @jsx jsx */
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'

import { ApolloConsumer } from 'react-apollo'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'
import { Container } from './components/container'
import { jsx, css } from '@emotion/core'
import { TextArea } from './components/text-area'
import { Button } from './components/button'
import { Label } from './components/label'
import { P } from './components/paragraph'

const submitAndNavigate = (client, data) => {
  // client.writeData({ data })
  console.log('hit submit')
  navigate('/old/form3')
}

const validate = values => {
  let errors = {}
  if (!values.whatAreYouWorriedAbout || !values.identifier) {
    errors.identifier = i18nMark(
      'Please complete the form to tell us what was affected.',
    )
  }
  return errors
}
const MyForm = () => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <P fontSize={[3, null, 4]}>
              <Label htmlFor="whatAreYouWorriedAbout">
                <Trans>What are you worried about?</Trans>
              </Label>
            </P>
            <Container>
              <Field id="whatAreYouWorriedAbout" name="whatAreYouWorriedAbout">
                {({ input }) => (
                  <Container>
                    <TextArea
                      width={1}
                      border="1px solid black"
                      height={['100px', null, '200px']}
                      {...input}
                      placeholder=""
                    />
                  </Container>
                )}
              </Field>
            </Container>
            <P fontSize={[3, null, 4]} mt={5}>
              <Label htmlFor="identifier">
                <Trans>
                  {' '}
                  Enter a website link, email address, or phone number
                </Trans>
              </Label>
            </P>
            <Container>
              <Field id="identifier" name="identifier">
                {({ input, meta }) => (
                  <Container>
                    <TextArea
                      width={1}
                      border="1px solid black"
                      height={['35px', null, '45px']}
                      {...input}
                      placeholder=""
                    />
                    <Container mt={3} display="inline-block">
                      <P fontSize={[2, null, 3]} color="red">
                        {meta.error && meta.touched && (
                          <Trans id={meta.error} />
                        )}
                      </P>
                    </Container>
                  </Container>
                )}
              </Field>
            </Container>
            <Container display="flex" flexDirection="row" width={1}>
              <Container width={1 / 2}>
                <Button>
                  <Trans>&lt; Back</Trans>
                </Button>
              </Container>
              <Container width={1 / 2}>
                <Button
                  type="submit"
                  css={css`
                    float: right;
                  `}
                >
                  <Trans>Next &gt;</Trans>
                </Button>
              </Container>
            </Container>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

export const Screen2 = () => (
  <Container width={['100%', null, '750px']} m="auto">
    <H1>Signal a suspected scam</H1>
    <TrackPageViews />
    <MyForm />
  </Container>
)
