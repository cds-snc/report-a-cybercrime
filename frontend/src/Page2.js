/** @jsx jsx */
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
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

/* eslint-disable-next-line */
const submitAndNavigate = (flagIdentifier, data) => {
  flagIdentifier({ variables: data })
  navigate('/summary')
}

const validate = values => {
  let errors = {}
  if (!values.identifier) {
    errors.identifier = i18nMark(
      'Please enter the contact information you suspect in the box.',
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
                  <Lead mt={5}>
                    <Trans>
                      Enter the suspicious email address, phone number, or
                      website.
                    </Trans>
                  </Lead>
                  <P fontSize={[2, null, 3]} lineHeight={[2, null, 3]} mb={2}>
                    {' '}
                    <Trans>For example:</Trans>
                  </P>
                  <Ul>
                    <Li>
                      <Trans>suspect@email.com</Trans>
                    </Li>
                    <Li>www.scam.com</Li>
                    <Li>1-888-111-1111</Li>
                  </Ul>
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
                    <ButtonLink to="/">
                      &lt; <Trans>Back</Trans>
                    </ButtonLink>
                  </Container>
                  <Container width={1 / 2}>
                    <Button
                      type="submit"
                      css={css`
                        float: right;
                      `}
                    >
                      <Trans>Submit</Trans> &gt;
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

export const Page2 = () => (
  <Container width={['100%', null, '600px']} m="auto">
    <H1 fontSize={[5, null, 6]}>
      <Trans>What do you suspect?</Trans>
    </H1>
    <TrackPageViews />
    <MyForm />
  </Container>
)
