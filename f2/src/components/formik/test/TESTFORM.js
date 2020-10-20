import React from 'react'
import { useStateValue } from '../../../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field } from 'formik'
import { CheckBoxRadio } from '../checkboxRadio'
//import { Radio } from '../radio'
import { TextArea } from '../textArea'
import { Input } from '../input'


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
    },
    {
      name: 'Radio 3',
      label: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      value: 'other',
      id: 'selection-other',
      followUp: 'Additional details',
      helpText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      name: 'Radio 4',
      label: 'Other1',
      value: 'other1',
      id: 'selection-other1',
      followUp: 'Additional details',
    },
    {
      name: 'Radio 4',
      label: 'Other2',
      value: 'other2',
      id: 'selection-other2',
      followUp: 'Additional details',
      helpText: 'Please provide any information regarding the situation',
    },
  ]
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
              <Row>
                <FieldArray
                  name="howDidTheyReachYou"
                  render={() =>
                    questionData.map((question) => {
                      return (
                        <React.Fragment key={question.name + 'checkbox'}>
                          <Field
                            name="howDidTheyReachYou"
                            label={question.label}
                            component={CheckBoxRadio}
                            value={question.value}
                            helpText={question.helpText}
                            type="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id={'checkbox-' + question.id}
                          >
                            <Field
                              name={question.name + 'CheckGroup'}
                              label={question.followUp}
                              helpText={question.helpText}
                              component={Input}
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
              <Row>
                <FieldArray
                  name="radioGroup"
                  render={() =>
                    questionData.map((question) => {
                      return (
                        <React.Fragment key={question.name + 'radio'}>
                          <Field
                            name="radioGroup"
                            label={question.label}
                            component={CheckBoxRadio}
                            value={question.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helpText={question.helpText}
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
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
