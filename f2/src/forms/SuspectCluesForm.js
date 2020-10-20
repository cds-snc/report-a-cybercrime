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
import { WarningModal } from '../components/formik/warningModal'

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
      {false ? ( // the following trans tags are for analyst email
        <div>
          <Trans id="suspectClues.suspectDetails" />
        </div>
      ) : null}
      <Formik
        initialValues={suspectClues}
        validationSchema={SuspectCluesFormSchema()}
        onSubmit={(values) => props.onSubmit(values)}
      >
        {({ handleSubmit, handleChange, handleBlur, dirty, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <WarningModal dirty={dirty} isSubmitting={isSubmitting} />
            <Container>
              <Row className="form-section">
                <FieldArray
                  name="suspectClues"
                  className="form-section"
                  render={() =>
                    formOptions.map((question) => {
                      return (
                        <React.Fragment>
                          <Field
                            name={question.name}
                            label={question.label}
                            helpText={question.helpText}
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
              submit={<Trans id="suspectClues.nextButton" />}
              cancel={<Trans id="button.cancelReport" />}
              label={<Trans id="suspectClues.whatComesNext" />}
            />
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
