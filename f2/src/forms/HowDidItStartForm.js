import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { TextArea } from '../components/formik/textArea'
import { NextCancelButtons } from '../components/formik/button'
import { Error, Info } from '../components/formik/alert'
import { HowDidItStartFormSchema } from './HowDidItStartFormSchema'

export const HowDidItStartForm = (props) => {
  const [data] = useStateValue()
  const howDidItStart = {
    ...data.formData.howdiditstart,
  }

  const formOptions = [
    {
      name: 'email',
      checkboxLabel: <Trans id="howDidTheyReachYou.email" />,
      checkboxName: 'howDidTheyReachYou.email',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question1" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint1" />,
    },
    {
      name: 'phone',
      checkboxLabel: <Trans id="howDidTheyReachYou.phone" />,
      checkboxName: 'howDidTheyReachYou.phone',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question2" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint2" />,
    },
    {
      name: 'online',
      checkboxLabel: <Trans id="howDidTheyReachYou.online" />,
      checkboxName: 'howDidTheyReachYou.online',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question3" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint3" />,
    },
    {
      name: 'application',
      checkboxLabel: <Trans id="howDidTheyReachYou.app" />,
      checkboxName: 'howDidTheyReachYou.app',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question4" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint4" />,
    },
    {
      name: 'others',
      checkboxLabel: <Trans id="howDidTheyReachYou.others" />,
      checkboxName: 'howDidTheyReachYou.others',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question5" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint5" />,
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={howDidItStart}
        validationSchema={HowDidItStartFormSchema()}
        onSubmit={(values) => {
          formOptions.forEach((question) => {
            if (!values.howDidTheyReachYou.includes(question.name)) {
              values[question.name] = ''
            }
          })
          props.onSubmit(values)
        }}
        render={({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <Row className="form-label">
                  <Trans id="howDidTheyReachYou.question" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="howDidTheyReachYou.reminder" />
                </Row>
                <ErrorMessage name="howDidTheyReachYou" component={Error} />
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="howDidTheyReachYou"
                  className="form-section"
                  render={() =>
                    formOptions.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="howDidTheyReachYou"
                            label={question.checkboxLabel}
                            component={CheckBox}
                            value={question.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="checkbox"
                            id={'checkbox-' + question.name}
                          >
                            <ErrorMessage
                              name={question.name}
                              component={Error}
                            />
                            <Field
                              name={question.name}
                              label={question.questionLabel}
                              helpText={question.helpText}
                              component={TextArea}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </Field>
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>
              <Row className="form-section">
                <Info>
                  <Trans id="howDidItStartPage.tip" />
                </Info>
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="howDidItStartPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="howDidItStartPage.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
