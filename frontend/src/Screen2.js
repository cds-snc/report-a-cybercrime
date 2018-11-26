import React from 'react'
import { navigate } from '@reach/router'
import { css } from 'react-emotion'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import Button from '@govuk-react/button'
import { H1, H3 } from '@govuk-react/header'
import { ApolloConsumer } from 'react-apollo'

const labelFormat = css`
  margin-top: 20pt;
`

const submitButton = css`
  margin-top: 20pt;
`

const submitAndNavigate = (client, data) => {
  client.writeData({
    data: Object.keys(data).length !== 0 ? data : { whatWasInvolved: [] },
  })
  navigate('/form3')
}

const validate = () => {}

const MyForm = options => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        render={({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <H3 className={labelFormat}>
                <label>
                  <Trans>Choose all that apply</Trans>
                </label>
              </H3>
              <div>
                {Object.keys(options).map(key => {
                  return (
                    <label key={key}>
                      <Field
                        name="whatWasInvolved"
                        component="input"
                        type="checkbox"
                        value={key}
                      />{' '}
                      {options[key]}
                    </label>
                  )
                })}
              </div>
            </div>

            <Button className={submitButton} type="submit" disabled={invalid}>
              <Trans>Next</Trans>
            </Button>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

const options = {
  website: <Trans>website</Trans>,
  email: <Trans>email</Trans>,
  phone: <Trans>phone</Trans>,
  'text message': <Trans>text message</Trans>,
  'social media': <Trans>social media</Trans>,
  'bank account': <Trans>bank account</Trans>,
  "I'm not sure": <Trans>I’m not sure</Trans>,
}

export const Screen2 = () => (
  <div>
    <H1>
      <Trans>What was involved?</Trans>
    </H1>
    {MyForm(options)}
  </div>
)
