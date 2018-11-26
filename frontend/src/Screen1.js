import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { Link, navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3 } from '@govuk-react/header'
import ListItem from '@govuk-react/list-item'
import Breadcrumb from '@govuk-react/breadcrumb'

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

const submitAndNavigate = (client, data) => {
  client.writeData({ data: data })
  navigate('/form2')
}

const validate = () => {}

const MyForm = () => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <H3 className={labelFormat}>
              <label>
                <Trans>What happened?</Trans>
              </label>
            </H3>
            <div>
              <Field
                name="whatHappened"
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
              <Trans>Submit</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

export const Screen1 = () => (
  <div>
    <Breadcrumb>
      <Link to={'/'}>
        <Trans>Landing Page</Trans>
      </Link>
    </Breadcrumb>

    <H1>
      <Trans>Describe what happened</Trans>
    </H1>

    <ListItem className={listitem}>
      <Trans>When did it take place?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>Who was involved?</Trans>
    </ListItem>
    <ListItem className={listitem}>
      <Trans>How were you affected?</Trans>
    </ListItem>

    {MyForm()}
  </div>
)
