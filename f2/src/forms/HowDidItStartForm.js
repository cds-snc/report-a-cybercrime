import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Well } from '../components/Messages'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { getHowDidItStartSchema } from '../utils/formik/validationSchema'
import { CheckBox } from '../components/formik/checkbox'
import { TextArea } from '../components/formik/textArea'
import { Error } from '../components/formik/error'
import { NextCancelButtons } from '../components/formik/button'

export const HowDidItStartForm = (props) => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const howDidItStart = {
    ...data.formData.howdiditstart,
  }

  const formOptions = [
    {
      name: 'email',
      checkboxLabel: <Trans id="howDidTheyReachYou.email" />,
      checkboxName: 'howDidTheyReachYouEmail',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question1" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint1" />,
    },
    {
      name: 'phone',
      checkboxLabel: <Trans id="howDidTheyReachYou.phone" />,
      checkboxName: 'howDidTheyReachYouPhone',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question2" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint2" />,
    },
    {
      name: 'online',
      checkboxLabel: <Trans id="howDidTheyReachYou.online" />,
      checkboxName: 'howDidTheyReachYouOnline',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question3" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint3" />,
    },
    {
      name: 'application',
      checkboxLabel: <Trans id="howDidTheyReachYou.app" />,
      checkboxName: 'howDidTheyReachYouApp',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question4" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint4" />,
    },
    {
      name: 'others',
      checkboxLabel: <Trans id="howDidTheyReachYou.others" />,
      checkboxName: 'howDidTheyReachYouOthers',
      questionLabel: <Trans id="howDidTheyReachYouLabel.question5" />,
      helpText: <Trans id="howDidTheyReachYouLabel.hint5" />,
    },
  ]

  return (
    <React.Fragment>
      <Stack shouldWrapChildren spacing={12}>
        <Formik
          enableReinitialize={true}
          initialValues={howDidItStart}
          validationSchema={getHowDidItStartSchema()}
          onSubmit={async (values) => {
            formOptions.map((question) => {
              if (!values.howDidTheyReachYou.includes(question.name)) {
                values[question.name] = ''
              }
              howDidItStart[question.name] = values[question.name]
            })

            howDidItStart.howDidTheyReachYou = values.howDidTheyReachYou

            props.onSubmit(howDidItStart)
          }}
          render={({ values, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Container>
                <Row className="form-question">
                  <Row className="form-label">
                    <Trans id="howDidTheyReachYou.question" />
                  </Row>
                  <Row className="form-helper-text">
                    <Trans id="howDidTheyReachYou.reminder" />
                  </Row>
                  <ErrorMessage
                    name="howDidTheyReachYou"
                    component={Error}
                    msg={<Trans id="howDidTheyReachYou.error" />}
                  />
                </Row>
                <Row className="form-section">
                  <FieldArray
                    name="howDidTheyReachYou"
                    className="form-section"
                    render={(arrayHelpers) =>
                      formOptions.map((question) => {
                        return (
                          <React.Fragment key={question.name}>
                            <Field
                              name={question.checkboxName}
                              label={question.checkboxLabel}
                              component={CheckBox}
                              value={values.howDidTheyReachYou.includes(
                                question.name,
                              )}
                              handleClick={(e) => {
                                if (
                                  values.howDidTheyReachYou.includes(
                                    question.name,
                                  )
                                ) {
                                  const index = values.howDidTheyReachYou.indexOf(
                                    question.name,
                                  )
                                  values.howDidTheyReachYou.splice(index, 1)
                                } else {
                                  values.howDidTheyReachYou.push(question.name)
                                }
                              }}
                            >
                              <Field
                                name={question.name}
                                label={question.questionLabel}
                                helpText={question.helpText}
                                component={TextArea}
                              />
                            </Field>
                          </React.Fragment>
                        )
                      })
                    }
                  />
                </Row>
                <Row className="form-section">
                  <Well variantColor="blue">
                    <Trans id="howDidItStartPage.tip" />
                  </Well>
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
      </Stack>
    </React.Fragment>
  )
}

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
