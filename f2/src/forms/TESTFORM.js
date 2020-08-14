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

  const questionData = [
    {
      name: 'Radio 1',
      label: 'Phone',
      value: 'phone',
      id: 'selection-phone',
      followUp: 'What was the phone number?',
      helpText: 'Please enter the phone number including area code',
    },
    {
      name: 'Radio 2',
      label: 'Online',
      value: 'online',
      id: 'selection-online',
      followUp: 'What was the email address?',
      helpText: 'Please enter the email address, partial entries are allowed',
    },
    {
      name: 'Radio 3',
      label: 'Other',
      value: 'other',
      id: 'selection-other',
      followUp: 'Additional details',
      helpText: 'Please provide any information regarding the situation',
    },
  ]

  console.log(`Rendering form`)
  return (
    <React.Fragment>
      <Formik
        initialValues={data.formData}
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
                <Error>This is an error</Error>
                <Info>This is an info message</Info>
                <Warning>This is a warning message</Warning>
                <Success>This is a success message</Success>
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="howDidTheyReachYou"
                  render={() =>
                    questionData.map((question) => {
                      return (
                        <React.Fragment key={question.name + 'checkbox'}>
                          <Field
                            name="howDidTheyReachYou"
                            label={question.label}
                            component={CheckBox}
                            value={question.value}
                            type="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id={'checkbox-' + question.id}
                          >
                            <Field
                              name={question.name + 'CheckGroup'}
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
                <FieldArray
                  name="radioGroup"
                  render={() =>
                    questionData.map((question) => {
                      return (
                        <React.Fragment key={question.name + 'radio'}>
                          <Field
                            name="radioGroup"
                            label={question.label}
                            component={Radio}
                            value={question.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="radio"
                            id={question.id}
                          >
                            <Field
                              name={question.name + 'RadioGroup'}
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
