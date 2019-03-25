/** @jsx jsx */
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { H1, H4 } from './components/header'
import { Checkbox } from './components/checkbox'
import { Link } from './components/link'
import { Text } from './components/text'
import { Breadcrumb } from './components/breadcrumb'
import { ApolloConsumer } from 'react-apollo'
import { TrackPageViews } from './TrackPageViews'
import { i18nMark } from '@lingui/react'
import { finalFormAdapter } from './utils/finalFormAdapter'
import { Container } from './components/container'
import { jsx, css } from '@emotion/core'
import { TextArea } from './components/text-area'
import { Button } from './components/button'
import { Label } from './components/label'

const CheckboxAdapter = finalFormAdapter(Checkbox)

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/old/form3')
}

const validate = values => {
  let errors = {}
  if (
    (!values.whatWasInvolved || !values.whatWasInvolved.length) &&
    !values.whatWasInvolvedOther
  ) {
    errors.whatWasInvolvedOther = i18nMark(
      'Please complete the form to tell us what was affected.',
    )
  }
  return errors
}
const MyForm = options => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => submitAndNavigate(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>

            <Container>
              <H4>
                

            
              <LabelFormat>
                <label htmlFor="whatWasInvolved">

                  <Trans>What was affected? Choose all that apply.</Trans>
                </label>
              </H4>
              <Container>
                {Object.keys(options).map(key => {
                  return (
                    <Label key={key}>
                      <Field
                        id="whatWasInvolved"
                        name="whatWasInvolved"
                        component={CheckboxAdapter}
                        type="checkbox"
                        value={key}
                        label={options[key]}
                      />
                    </Label>
                  )
                })}

              </Container>
            </Container>
            <H4>
              <LabelFormat>
              <label htmlFor="whatWasInvolvedOther">
                <Trans>Other</Trans>
              </label>
            </LabelFormat>
            </H4>
            <Container>
              <Field id="whatWasInvolvedOther" name="whatWasInvolvedOther">

                {({ input, meta }) => (
                  <Container>
                    <TextArea {...input} placeholder="" />
                    <Container
                      css={css`
                        margin-top: 10pt;
                        display: inline-block;
                        font-size: 19pt;
                        color: red;
                      `}
                    >
                      {meta.error && meta.touched && <Trans id={meta.error} />}
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
  </ApolloConsumer>
)

const options = {
  website: <Trans>Website</Trans>,
  email: <Trans>Email address</Trans>,
  phone: <Trans>Phone</Trans>,
  'text message': <Trans>Text messages</Trans>,
  'social media': <Trans>Social media accounts</Trans>,
  'bank account': <Trans>Bank accounts</Trans>,
  "I'm not sure": <Trans>I’m not sure</Trans>,
}

export const Screen2 = () => (
  <Container
    css={css`
      max-width: 750px;
      margin: auto;
    `}
  >
    <Breadcrumb>
      <Link to="/old">
        <Trans>Landing Page</Trans>
      </Link>
      <Link to="/old/form1">
        <Trans>What Happened</Trans>
      </Link>
      <Text display="inline-block">
        <Trans>How did that happen?</Trans>
      </Text>
    </Breadcrumb>
    <H1>
      <Trans>How did that happen?</Trans>
    </H1>
    <TrackPageViews />
    {MyForm(options)}
  </Container>
)
