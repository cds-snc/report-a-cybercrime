/** @jsx jsx */
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { FLAG_IDENTIFIER_MUTATION } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'
import { Container } from './components/container'
import { jsx, css } from '@emotion/core'
import { TextArea } from './components/text-area'
import { Button } from './components/button'
import { ButtonLink } from './components/link'
import { Label } from './components/label'
import { P, Lead } from './components/paragraph'

const submitAndNavigate = (flagIdentifier, data) => {
  flagIdentifier({ variables: data })
  navigate(`page3/${encodeURIComponent(data.identifier)}`)
}

const validate = values => {
  let errors = {}
  if (!values.identifier) {
    errors.identifier = i18nMark(
      'Please enter information about the scam in the box.',
    )
  }
  return errors
}
const MyForm = () => (
  <ApolloConsumer>
    {() => (
      <Mutation mutation={FLAG_IDENTIFIER_MUTATION}>
        {flagIdentifier => (
          <Form
            onSubmit={data => submitAndNavigate(flagIdentifier, data)}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Label htmlFor="identifier">
                  {' '}
                  <Lead mt={5} />
                  <P fontSize={[2, null, 3]} lineHeight={[2, null, 3]} mb={2}>
                    {' '}
                  </P>
                  <P fontSize={[2, null, 3]} lineHeight={[2, null, 3]} mb={2}>
                    {' '}
                    <Trans>
                      <b>
                        Enter the email address, phone number, or website of the
                        scam:
                      </b>
                    </Trans>
                  </P>
                </Label>
                <Container>
                  <Field id="identifier" name="identifier">
                    {({ input, meta }) => (
                      <Container width={['100%', null, '600px']}>
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
                <Container
                  display="flex"
                  flexDirection="row"
                  width={['100%', null, '600px']}
                >
                  <Container width={1 / 2}>
                    <ButtonLink to="/feature1">
                      &lt; <Trans>Back</Trans>
                    </ButtonLink>
                  </Container>
                  <Container width={1 / 2}>
                    <Button
                      type="Submit"
                      css={css`
                        float: right;
                      `}
                    >
                      <Trans>Submit scam</Trans> &gt;
                    </Button>
                  </Container>
                </Container>
              </form>
            )}
          />
        )}
      </Mutation>
    )}
  </ApolloConsumer>
)

export const Feature1Page2 = () => (
  <Container width={['100%', null, '600px']} m="auto">
    <H1 fontSize={[5, null, 6]}>
      <Trans>Report a scam</Trans>
    </H1>
    <TrackPageViews />
    <MyForm />
  </Container>
)
