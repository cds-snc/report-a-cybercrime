/** @jsx jsx */
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { H1 } from './components/header'
import { Link } from './components/link'
import { Text } from './components/text'
import gql from 'graphql-tag'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Breadcrumb } from './components/breadcrumb'
import { SAVE_REPORT_MUTATION } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'
import { jsx, css } from '@emotion/core'
import { TextArea } from './components/text-area'
import { Button } from './components/button'
import { Li } from './components/list-item'
import { UnorderedList } from './components/unordered-list'

const submitAndNavigate = (client, saveReport, { howWereYouAffected }) => {
  let data = client.readQuery({
    query: gql`
      query readCache {
        whatHappened
        whatWasInvolved
        whatWasInvolvedOther
      }
    `,
  })
  data.howWereYouAffected = howWereYouAffected
  data.whatWasInvolved = data.whatWasInvolved.join(', ')
  saveReport({ variables: data })
  navigate('thanks')
}

const validate = values => {
  let errors = {}
  if (!values.howWereYouAffected) {
    errors.howWereYouAffected = i18nMark(
      'Please complete the text box to tell us how you were affected.',
    )
  }
  return errors
}
const MyForm = () => (
  <ApolloConsumer>
    {client => (
      <Mutation mutation={SAVE_REPORT_MUTATION}>
        {saveReport => (
          <Form
            onSubmit={data => submitAndNavigate(client, saveReport, data)}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Container>
                  <Field name="howWereYouAffected">
                    {({ input, meta }) => (
                      <Container
                        css={css`
                          margin-top: 10pt;
                          display: inline-block;
                          font-size: 19pt;
                          color: red;
                        `}
                      >
                        <TextArea {...input} placeholder="" />
                        <Container>
                          {meta.error && meta.touched && (
                            <Trans id={meta.error} />
                          )}
                        </Container>
                      </Container>
                    )}
                  </Field>
                </Container>

                <Button type="submit">
                  <Trans>Next</Trans>
                </Button>
              </form>
            )}
          />
        )}
      </Mutation>
    )}
  </ApolloConsumer>
)

export const Screen3 = () => (
  <Container
    css={css`
      max-width: 750px;
      margin: auto;
    `}
  >
    <Breadcrumb>
      <Link to="/">
        <Trans>Landing Page</Trans>
      </Link>
      <Link to="/form1">
        <Trans>What Happened</Trans>
      </Link>
      <Link to="/form2">
        <Trans>How did that happen?</Trans>
      </Link>
      <Text display="inline-block">
        <Trans>How were you affected?</Trans>
      </Text>
    </Breadcrumb>
    <H1>
      <Trans>How were you affected?</Trans>
    </H1>

    <TrackPageViews />
    <UnorderedList>
      <Li>
        <Trans>What was your reaction?</Trans>
      </Li>
      <Li>
        <Trans>Did you lose money or personal information?</Trans>
      </Li>
      <Li>
        <Trans>Was your reputation or productivity affected?</Trans>
      </Li>
    </UnorderedList>
    <Container>{MyForm()}</Container>
  </Container>
)
