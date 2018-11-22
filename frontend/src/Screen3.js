import React from 'react'
import { navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3 } from '@govuk-react/header'
import ListItem from '@govuk-react/list-item'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { CHANGE_LANGUAGE_MUTATION } from './LanguageSwitcher'

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
`

export const SAVE_REPORT_MUTATION = gql`
  mutation saveReport(
    $whatHappened: String
    $whatWasInvolved: String
    $howWereYouAffected: String
  ) {
    saveReport(
      whatHappened: $whatHappened
      whatWasInvolved: $whatWasInvolved
      howWereYouAffected: $howWereYouAffected
    ) {
      whatHappened
    }
  }
`

const onSubmit = (
  saveReport,
  whatHappened,
  whatWasInvolved,
  howWereYouAffected,
) => {
  console.log('onSubmit')
  const res = saveReport(
    whatHappened,
    whatWasInvolved,
    howWereYouAffected,
  ).then(console.log)
  navigate('thanks')
}

const validate = () => {}

const MyForm = () => (
  <Mutation mutation={SAVE_REPORT_MUTATION}>
    {saveReport => (
      <Form
        onSubmit={() => onSubmit(saveReport, 'happ', 'inv', 'affect')}
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
                name="how_affected"
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
)

export const Screen3 = () => (
  <div>
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
