/** @jsx jsx */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { H1, H2 } from '../components/header'
import { SubmitButton } from '../components/formik/button'
//import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
//import { useStateValue } from '../utils/state'
import { Error } from '../components/formik/alert'
//import { A } from '../components/formik/link'
//import { P } from '../components/formik/paragraph'
//import { formDefaults } from './defaultValues'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
//import { NextCancelButtons } from '../components/formik/button'
import { InfoCard } from '../components/container'
import { Stack } from '@chakra-ui/core'
import { Button } from '../components/button'
import { TextArea } from '../components/text-area'

export const MidFeedbackForm = (props) => {
  const [status] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  //const [data] = useStateValue()
  const information = {
    // ...data.formData.personalInformation,
  }
  // const validate = () => {
  //   return {}
  // }

  const midFeedback = [
    {
      name: 'confuseProblem',
      checkboxLabel: <Trans id="midFeedback.problem.confusing" />,
      checkboxValue: 'midFeedback.problem.confusing',
    },
    {
      name: 'brokenProblem',
      checkboxLabel: <Trans id="midFeedback.problem.broken" />,
      checkboxValue: 'midFeedback.problem.broken',
    },
    {
      name: 'adaptiveProblem',
      checkboxLabel: <Trans id="midFeedback.problem.adaptive" />,
      checkboxValue: 'midFeedback.problem.adaptive',
    },
    {
      name: 'worryProblem',
      checkboxLabel: <Trans id="midFeedback.problem.worry" />,
      checkboxValue: 'midFeedback.problem.worry',
    },
    {
      name: 'otherProblem',
      checkboxLabel: <Trans id="midFeedback.problem.other" />,
      checkboxValue: 'midFeedback.problem.other',
    },
  ]

  return (
    <React.Fragment>
      {status ? (
        <Row>
          <InfoCard
            bg="blue.200"
            borderColor="blue.300"
            columns={{ base: 4 / 4, md: 6 / 8 }}
          >
            <H2 as="p">
              <Trans id="midFeedback.thankYou" />
            </H2>
          </InfoCard>
        </Row>
      ) : (
        <Container>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            h="inherit"
            py={4}
            whiteSpace="wrap"
            w={{ base: '100%', md: 'auto' }}
            color="black"
            variant="solid"
            variantColor="gray"
            bg="gray.200"
            borderColor="gray.400"
          >
            <Trans id="midFeedback.summary" />
          </Button>
          {isOpen && (
            <Stack
              bg="gray.200"
              rounded="4px"
              border="1px"
              borderColor="gray.400"
              p={4}
              py={8}
              mt={4}
              spacing={10}
            >
              <H1 as="p">
                <Trans id="midFeedback.title" />
              </H1>

              <Formik
                initialValues={information}
                onSubmit={(values) => {
                  props.onSubmit(values)
                }}
              >
                {({ handleSubmit, handleChange, handleBlur }) => (
                  <Form onSubmit={handleSubmit}>
                    <Container>
                      <Row className="form-question" lg={1}>
                        <Row className="form-label" lg={1}>
                          <Trans id="midFeedback.problem.label" />
                        </Row>
                        <Row className="form-helper-text">
                          <Trans id="midFeedback.problem.helperText" />
                        </Row>
                        <ErrorMessage name="midFeedback" component={Error} />
                      </Row>
                      <Row className="form-section">
                        <FieldArray
                          name="midFeedback"
                          className="form-section"
                          render={() =>
                            midFeedback.map((question) => {
                              return (
                                <React.Fragment key={question.name}>
                                  <Field
                                    name="midFeedback"
                                    label={question.checkboxLabel}
                                    component={CheckBox}
                                    value={question.checkboxValue}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="checkbox"
                                    id={'checkbox-' + question.name}
                                  >
                                    <ErrorMessage
                                      name={question.name}
                                      component={Error}
                                    />
                                  </Field>

                                  {/* <ErrorMessage name="postalCode" component={Error} /> */}
                                </React.Fragment>
                              )
                            })
                          }
                        />
                      </Row>
                      <br />
                      <Container>
                        <Row className="form-question" lg={1}>
                          <Row className="form-label">
                            <Trans id="midFeedback.description.label" />
                          </Row>
                          <Row className="form-helper-text">
                            <Trans id="midFeedback.description.helperText" />
                          </Row>
                        </Row>
                        <Row className="form-section">
                          <Field
                            name="problemDescription"
                            component={TextArea}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="problemDescription"
                            type="text"
                          />
                        </Row>
                      </Container>

                      <Row>
                        <SubmitButton
                          label={<Trans id="midFeedback.submit" />}
                        />
                      </Row>
                    </Container>
                  </Form>
                )}
              </Formik>
            </Stack>
          )}
        </Container>
      )}
    </React.Fragment>
  )
}
MidFeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
