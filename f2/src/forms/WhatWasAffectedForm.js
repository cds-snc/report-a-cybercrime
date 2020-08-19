import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { Error } from '../components/formik/alert'
import { NextCancelButtons } from '../components/formik/button'

export const whatWasAffectedPages = [
  {
    key: 'whatWasAffectedForm.financial',
    url: 'moneylost',
  },
  {
    key: 'whatWasAffectedForm.personalInformation',
    url: 'information',
  },
  { key: 'whatWasAffectedForm.devices', url: 'devices' },
  { key: 'whatWasAffectedForm.business_assets', url: 'business' },
  { key: 'whatWasAffectedForm.other', url: '' },
]

export const WhatWasAffectedForm = (props) => {
  const [data] = useStateValue()
  const whatWasAffected = {
    ...formDefaults.whatWasAffected,
    ...data.formData.whatWasAffected,
  }

  const formOptions = [
    {
      name: 'financial',
      checkboxLabel: <Trans id="whatWasAffectedForm.financial" />,
      checkboxHelpText: <Trans id="whatWasAffectedForm.financial.example" />,
      checkboxValue: 'whatWasAffectedForm.financial',
    },
    {
      name: 'personalInformation',
      checkboxLabel: <Trans id="whatWasAffectedForm.personalInformation" />,
      checkboxHelpText: (
        <Trans id="whatWasAffectedForm.personalInformation.example" />
      ),
      checkboxValue: 'whatWasAffectedForm.personalInformation',
    },
    {
      name: 'devices',
      checkboxLabel: <Trans id="whatWasAffectedForm.devices" />,
      checkboxHelpText: <Trans id="whatWasAffectedForm.devices.example" />,
      checkboxValue: 'whatWasAffectedForm.devices',
    },
    {
      name: 'businessAssets',
      checkboxLabel: <Trans id="whatWasAffectedForm.business_assets" />,
      checkboxHelpText: (
        <Trans id="whatWasAffectedForm.business_assets.example" />
      ),
      checkboxValue: 'whatWasAffectedForm.business_assets',
    },
    {
      name: 'other',
      checkboxLabel: <Trans id="whatWasAffectedForm.other" />,
      checkboxHelpText: <Trans id="whatWasAffectedForm.other.example" />,
      checkboxValue: 'whatWasAffectedForm.other',
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={whatWasAffected}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <Row className="form-label">
                  <Trans id="whatWasAffectedForm.optionsTitle" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="whatWasAffectedForm.optionsHelpText" />
                </Row>
                <ErrorMessage name="whatWasAffected" component={Error} />
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="affectedOptions"
                  className="form-section"
                  render={() =>
                    formOptions.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="affectedOptions"
                            label={question.checkboxLabel}
                            helpText={question.checkboxHelpText}
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
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="whatWasAffectedForm.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="whatWasAffectedForm.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

WhatWasAffectedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
