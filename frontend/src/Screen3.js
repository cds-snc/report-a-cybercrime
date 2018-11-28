import React from 'react'
import { Link, navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3 } from './utils/headers'
import ListItem from '@govuk-react/list-item'
import gql from 'graphql-tag'
import { ApolloConsumer, Mutation } from 'react-apollo'
import Breadcrumb from '@govuk-react/breadcrumb'

const centercontent = css`
  max-width: 750px;
  margin: auto;
`

const labelFormat = css`
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

export const SAVE_REPORT_MUTATION = gql`
  mutation saveReport(
    $whatHappened: String
    $whatWasInvolved: String
    $whatWasInvolvedOther: String
    $howWereYouAffected: String
  ) {
    saveReport(
      whatHappened: $whatHappened
      whatWasInvolved: $whatWasInvolved
      whatWasInvolvedOther: $whatWasInvolvedOther
      howWereYouAffected: $howWereYouAffected
    ) {
      whatHappened
      whatWasInvolved
      whatWasInvolvedOther
      howWereYouAffected
    }
  }
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

const validate = () => {}

const MyForm = () => (
  <ApolloConsumer>
    {client => (
      <Mutation mutation={SAVE_REPORT_MUTATION}>
        {saveReport => (
          <Form
            onSubmit={data => submitAndNavigate(client, saveReport, data)}
            validate={validate}
            render={({ handleSubmit, pristine, invalid }) => (
              <form onSubmit={handleSubmit}>
                <H3 className={labelFormat}>
                  <label>
                    <Trans>How were you affected?</Trans>
                  </label>
                </H3>
                <div>
                  <Field
                    name="howWereYouAffected"
                    component="textarea"
                    className={textArea}
                    placeholder=""
                  />
                </div>

                <Button
                  className={submitButton}
                  type="submit"
                  disabled={pristine || invalid}
                >
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

    <ListItem className={listitem}>
      <Trans>What was your reaction?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>Did you lose money or personal information?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>Was your reputation or productivity affected?</Trans>
    </ListItem>

    {MyForm()}
  </div>
)
