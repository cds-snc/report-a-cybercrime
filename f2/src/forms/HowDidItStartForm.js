import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Well } from '../components/Messages'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { TextArea } from '../components/formik/textArea'
import { NextCancelButtons } from '../components/formik/button'
import { Error } from '../components/formik/alert'
import { phone, postalCode } from '../utils/validationSchema'
import * as Yup from 'yup'

export const HowDidItStartForm = (props) => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const howDidItStart = {
    ...data.formData.howdiditstart,
  }

  //Validation object, defines rules used to validation form data
  const validationSchema = Yup.object().shape({
    howDidTheyReachYou: Yup.array().required(
      'Please select at least one option',
    ),
    email: Yup.string().email('Please enter a valid email address'),
    phone: Yup.string().matches(phone(), {
      excludeEmptyString: true,
      message: 'Please enter a valid phone number',
    }),
    online: Yup.string(),
    application: Yup.string(),
    others: Yup.string().matches(postalCode(), {
      excludeEmptyString: true,
      message: 'Please enter a valid postal code',
    }),
  })

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
        validationSchema={validationSchema}
        onSubmit={(values) => {
          formOptions.map((question) => {
            if (!values.howDidTheyReachYou.includes(question.name)) {
              values[question.name] = ''
            }
          })
          props.onSubmit(values)
        }}
        render={({ values, handleSubmit, handleChange, handleBlur }) => (
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
    </React.Fragment>
  )
}

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
