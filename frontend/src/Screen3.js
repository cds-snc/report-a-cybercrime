import React from 'react'
import { Link, navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1 } from './utils/headers'
import ListItem from '@govuk-react/list-item'
import gql from 'graphql-tag'
import { ApolloConsumer, Mutation } from 'react-apollo'
import Breadcrumb from '@govuk-react/breadcrumb'
import { SAVE_REPORT_MUTATION } from './utils/queriesAndMutations'
import { TrackPageViews } from './TrackPageViews'

const centercontent = css`
  max-width: 750px;
  margin: auto;
`
const formFormat = css`
  margin-top: 20pt;
`
const submitButton = css`
  margin-top: 20pt;
`
const listitem = css`
  margin: 5pt;
  margin-left: 20pt;
`
const textArea = css`
  width: 500pt;
  height: 200pt;
  font-size: 19pt;
`
const errorMessage = css`
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
      'Please tell us what how you were affected.',
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
                        <textarea
                          {...input}
                          placeholder=""
                          className={textArea}
                        />
                        <div className={errorMessage}>
                          {meta.error && meta.touched && (
                            <Trans id={meta.error} />
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                </div>

                <Button className={submitButton} type="submit">
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
  <div className={centercontent}>
    <Breadcrumb>
      <Link to={'/'}>
        <Trans>Landing Page</Trans>
      </Link>
      <Link to={'/form1'}>
        <Trans>What happened?</Trans>
      </Link>
      <Link to={'/form2'}>
        <Trans>What was involved?</Trans>
      </Link>
    </Breadcrumb>
    <H1>
      <Trans>How were you affected?</Trans>
    </H1>

    <TrackPageViews />
    <ListItem className={listitem}>
      <Trans>What was your reaction?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>Did you lose money or personal information?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>Was your reputation or productivity affected?</Trans>
    </ListItem>

    <div className={formFormat}>{MyForm()}</div>
  </div>
)
