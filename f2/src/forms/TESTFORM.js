import React from 'react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { Radio } from '../components/formik/radio'
import { TextArea } from '../components/formik/textArea'
import { Input } from '../components/formik/input'
import { FileUpload } from '../components/formik/fileUpload'
import { DatePicker } from '../components/formik/datePicker'
import { Error, Info, Warning, Success } from '../components/formik/alert'
import { NextCancelButtons, SkipButton } from '../components/formik/button'

export const TestForm = (props) => {
  const [data] = useStateValue()

  const radioData = [
    {
      name: 'Radio 1',
      label: 'Phone',
      value: 'phone',
      id: 'radio-selection-phone',
      followUp: 'What was the phone number?',
      helpText: 'Please enter the phone number including area code',
    },
    {
      name: 'Radio 2',
      label: 'Online',
      value: 'online',
      id: 'radio-selection-online',
      followUp: 'What was the email address?',
      helpText: 'Please enter the email address, partial entries are allowed',
    },
    {
      name: 'Radio 3',
      label: 'Other',
      value: 'other',
      id: 'radio-selection-other',
      followUp: 'Additional details',
      helpText: 'Please provide any information regarding the situation',
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={{ howDidTheyReachYou: [], howDidTheyContactYou: [] }}
        validate={(values) => {
          console.log(values)
        }}
        onSubmit={(values) => {
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
              </Row>
              <Row className="form-section">
                <Error msg="This is an error" />
                <Info msg="This is an info message" />
                <Warning msg="This is a warning message" />
                <Success msg="This is a success message" />
              </Row>
              <Row className="form-section">
                <Field
                  name="howDidTheyReachYou"
                  label="Question Label"
                  component={CheckBox}
                  value="Test Check"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.howDidTheyReachYou.includes('Test Check')}
                  id="test-check"
                >
                  <Field
                    name="Test Text"
                    label="Text Area"
                    helpText="This should help"
                    component={TextArea}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                <Field
                  name="howDidTheyReachYou"
                  label="Question Label #2"
                  component={CheckBox}
                  value="Test Check #2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.howDidTheyReachYou.includes('Test Check #2')}
                  id="test-radio"
                >
                  <Field
                    name="Test Text #2"
                    label="Text Area #2"
                    helpText="This should help...again"
                    component={TextArea}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="howDidTheyContactYou"
                  render={(arrayHelpers) =>
                    radioData.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="howDidTheyContactYou"
                            label={question.label}
                            component={Radio}
                            value={question.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.howDidTheyContactYou.includes(
                              `${question.value}`,
                            )}
                            id={question.id}
                          >
                            <Field
                              name={question.name}
                              label={question.followUp}
                              helpText={question.helpText}
                              component={TextArea}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Field>
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>
              <Row className="form-section">
                <Field
                  name="firstName"
                  label="First Name"
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="first-name-input"
                  type="input"
                />
                <Field
                  name="lastName"
                  label="Last Name"
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="last-name-input"
                  type="input"
                />
                <Field
                  name="email"
                  label="Email"
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email-input"
                  type="email"
                  placeholder="example@email.com"
                  helpText="Email addresses must be unique"
                />
                <Field
                  name="password"
                  label="Password"
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="password-input"
                  type="password"
                  helpText="Must include letters, numbers, and special characters"
                />
              </Row>

              <Row className="form-section">
                <FileUpload
                  id="testUpload"
                  label={<Trans id="evidencePage.addFileButton" />}
                  onChange={(e) => {
                    const file = e.target.files[0]
                    console.log(file)
                    alert(`File Uploaded - ${file.name}`)
                  }}
                />
              </Row>

              <Row className="form-section">
                <DatePicker
                  name="startDate"
                  label="When did it start?"
                  onChange={handleChange}
                  id="startDate"
                  helpText="For example: 26 02 2020"
                  day={values.day}
                  month={values.month}
                  year={values.year}
                />
              </Row>

              <Row className="form-section">
                <SkipButton
                  label={<Trans id="locationinfoPage.skipButton" />}
                  to="/privacyconsent"
                />
              </Row>

              <Row>
                <NextCancelButtons
                  submit={<Trans id="howDidItStartPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label="Test Page Next"
                />
              </Row>
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
