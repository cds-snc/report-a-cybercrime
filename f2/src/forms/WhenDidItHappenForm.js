import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import { Radio } from '../components/formik/radio'
import { DatePicker } from '../components/formik/datePicker'
import { NextCancelButtons } from '../components/formik/button'
import { Error, Info } from '../components/formik/alert'
import { TextArea } from '../components/formik/textArea'
import { whenDidItHappenFormSchema } from './whenDidItHappenFormSchema'

export const WhenDidItHappenForm = (props) => {
  const [data] = useStateValue()
  const whenDidItHappen = {
    ...data.formData.whenDidItHappen,
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={whenDidItHappenFormSchema}
        //validationSchema={}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <Row className="form-label">
                  <Trans id="whenDidItHappenPage.question" />
                </Row>
                <ErrorMessage name="howDidTheyReachYou" component={Error} />
              </Row>
              <Row className="form-section">
                <Field
                  name="incidentFrequency"
                  label={<Trans id="whenDidItHappenPage.options.once" />}
                  component={Radio}
                  value="once"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  id="incidentFrequency-Once"
                >
                  <ErrorMessage name="singleIncident" component={Error} />
                  <Field
                    name="happenedOnce"
                    label={<Trans id="whenDidItHappenPage.singleDate.label" />}
                    helpText={<Trans id="whenDidItStart.labelExample" />}
                    component={DatePicker}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="singleIncident"
                    className="conditional-field"
                  />
                </Field>

                <Field
                  name="incidentFrequency"
                  label={
                    <Trans id="whenDidItHappenPage.options.moreThanOnce" />
                  }
                  component={Radio}
                  value="moreThanOnce"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  id="incidentFrequency-MoreThanOnce"
                >
                  <ErrorMessage
                    name="multipleIncidentsStart"
                    component={Error}
                  />
                  <Field
                    name="start"
                    label={
                      <Trans id="whenDidItHappenPage.dateRange.start.label" />
                    }
                    helpText={<Trans id="whenDidItStart.labelExample" />}
                    component={DatePicker}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="multipleIncidentsStart"
                    className="conditional-field"
                  />
                  <ErrorMessage name="multipleIncidentsEnd" component={Error} />
                  <Field
                    name="end"
                    label={
                      <Trans id="whenDidItHappenPage.dateRange.end.label" />
                    }
                    helpText={<Trans id="whenDidItStart.labelExample" />}
                    component={DatePicker}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="multipleIncidentsEnd"
                    className="conditional-field"
                  />
                </Field>

                <Field
                  name="incidentFrequency"
                  label={<Trans id="whenDidItHappenPage.options.notSure" />}
                  component={Radio}
                  value="notSure"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="radio"
                  id="incidentFrequency-NotSure"
                >
                  <Field
                    name="description"
                    label={<Trans id="whenDidItHappenPage.notSure.label" />}
                    helpText={
                      <Trans id="whenDidItHappenPage.notSure.helperText" />
                    }
                    component={TextArea}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="conditional-field"
                  />
                </Field>
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
                  label={<Trans id="whenDidItHappenPage.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

WhenDidItHappenForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
