import React from 'react'
// import { Link, navigate } from '@reach/router'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { H1 } from './utils/headers'
import gql from 'graphql-tag'
import { ApolloConsumer, Mutation } from 'react-apollo'
// import Breadcrumb from '@govuk-react/breadcrumb'
import { SAVE_REPORT_MUTATION } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
const FormFormat = styled('div')`
  margin-top: 20pt;
`
const SubmitButton = styled('button')`
  margin-top: 20pt;
`
const ListItem = styled('li')`
  margin: 5pt;
  margin-left: 20pt;
`
const TextArea = styled('textarea')`
  width: 500pt;
  height: 200pt;
  font-size: 19pt;
`
const ErrorMessage = styled('div')`
  margin-top: 10pt;
  display: inline-block;
  font-size: 19pt;
  color: red;
`

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
                <div>
                  <Field name="howWereYouAffected">
                    {({ input, meta }) => (
                      <div>
                        <TextArea {...input} placeholder="" />
                        <ErrorMessage>
                          {meta.error && meta.touched && (
                            <Trans id={meta.error} />
                          )}
                        </ErrorMessage>
                      </div>
                    )}
                  </Field>
                </div>

                <SubmitButton type="submit">
                  <Trans>Next</Trans>
                </SubmitButton>
              </form>
            )}
          />
        )}
      </Mutation>
    )}
  </ApolloConsumer>
)

export const Screen3 = () => (
  <CenterContent>
    {/* <Breadcrumb>
      <Link to={'/'}>
        <Trans>Landing Page</Trans>
      </Link>
      <Link to={'/form1'}>
        <Trans>What happened?</Trans>
      </Link>
      <Link to={'/form2'}>
        <Trans>What was involved?</Trans>
      </Link>
    </Breadcrumb> */}
    <div>Placeholder for Breacrumb</div>
    <H1>
      <Trans>How were you affected?</Trans>
    </H1>

    <TrackPageViews />
    <ul>
      <ListItem>
        <Trans>What was your reaction?</Trans>
      </ListItem>
      <ListItem>
        <Trans>Did you lose money or personal information?</Trans>
      </ListItem>
      <ListItem>
        <Trans>Was your reputation or productivity affected?</Trans>
      </ListItem>
    </ul>
    <FormFormat>{MyForm()}</FormFormat>
  </CenterContent>
)
