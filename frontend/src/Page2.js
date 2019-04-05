/** @jsx jsx */
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { ApolloConsumer } from 'react-apollo'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'
import { Container } from './components/container'
import { jsx, css } from '@emotion/core'
import { TextArea } from './components/text-area'
import { Button } from './components/button'
import { Label } from './components/label'
import { P, Lead } from './components/paragraph'

/* eslint-disable-next-line */
const submitAndNavigate = (client, data) => {
  // client.writeData({ data })
  // console.log('hit submit')
  navigate('/summary')
}

const goBack = e => {
  e.preventDefault()
  window.location.href = '/'
}

const validate = values => {
  let errors = {}
  if (!values.identifier) {
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
            <Label htmlFor="identifier">
              {' '}
              <Lead mt={5}>
                Enter a website link, email address, or phone number
              </Lead>
              <P fontSize={[2, null, 3]} lineHeight={[2, null, 3]} mb={2}>
                {' '}
                For example:
              </P>
              <Ul>
                <Li>suspect@email.com</Li>
                <Li>www.scam.com</Li>
                <Li>1-800-111-1111</Li>
              </Ul>
            </Label>
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
                <Button onClick={goBack}>
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

export const Page2 = () => (
  <Container width={['100%', null, '750px']} m="auto">
    <H1>Signal a suspected scam</H1>
    <TrackPageViews />
    <MyForm />
  </Container>
)
