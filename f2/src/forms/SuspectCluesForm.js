/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { TextArea } from '../components/formik/textArea'
import { NextCancelButtons } from '../components/formik/button'
import { useStateValue } from '../utils/state'
import { Formik, FieldArray, Field } from 'formik'
import { SuspectCluesFormSchema } from './SuspectCluesFormSchema'
import { Form, Container, Row } from 'react-bootstrap'

export const SuspectCluesForm = (props) => {
  const [data] = useStateValue()
  const suspectClues = {
    ...data.formData.suspectClues,
  }
  const formOptions = [
    {
      name: 'suspectClues1',
      label: <Trans id="suspectClues.question1" />,
      helpText: <Trans id="suspectClues.question1Details" />,
    },
    {
      name: 'suspectClues2',
      label: <Trans id="suspectClues.question2" />,
      helpText: <Trans id="suspectClues.question2Details" />,
    },
    {
      name: 'suspectClues3',
      label: <Trans id="suspectClues.question3" />,
      helpText: <Trans id="suspectClues.question3Details" />,
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={suspectClues}
        validationSchema={SuspectCluesFormSchema()}
        onSubmit={props.onSubmit()}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-section">
                <FieldArray
                  name="suspectClues"
                  className="form-section"
                  render={() =>
                    formOptions.map(() => {
                      return (
                        <React.Fragment>
                          <Field
                            name={props.name}
                            label={props.label}
                            helpText={props.helpText}
                            component={TextArea}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>
            </Container>

            <NextCancelButtons
              submit={<Trans id="howDidItStartPage.nextButton" />}
              cancel={<Trans id="button.cancelReport" />}
              label={<Trans id="howDidItStartPage.nextPage" />}
            />
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
