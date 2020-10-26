import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field } from 'formik'
import { CheckBoxRadio } from '../components/formik/checkboxRadio'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { ErrorSummary } from '../components/formik/alert'
import { NextCancelButtons } from '../components/formik/button'
import { WhatWasAffectedFormSchema } from './WhatWasAffectedFormSchema'
import { ErrorText } from '../components/formik/paragraph'
import { whatWasAffectedPages } from '../utils/nextWhatWasAffectedUrl'
import { WarningModal } from '../components/formik/warningModal'

const createErrorSummary = (errors) => {
  const errorSummary = {}
  if (errors.affectedOptions) {
    errorSummary['affectedOptions'] = {
      label: <Trans id="whatWasAffectedForm.optionsTitle" />,
      message: <Trans id="whatWasAffectedForm.hasValidationErrors" />,
    }
  }

  return errorSummary
}

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
      checkboxValue: whatWasAffectedPages.FINANCIAL.key,
    },
    {
      name: 'personalInformation',
      checkboxLabel: <Trans id="whatWasAffectedForm.personalInformation" />,
      checkboxHelpText: (
        <Trans id="whatWasAffectedForm.personalInformation.example" />
      ),
      checkboxValue: whatWasAffectedPages.INFORMATION.key,
    },
    {
      name: 'devices',
      checkboxLabel: <Trans id="whatWasAffectedForm.devices" />,
      checkboxHelpText: <Trans id="whatWasAffectedForm.devices.example" />,
      checkboxValue: whatWasAffectedPages.DEVICES.key,
    },
    {
      name: 'businessAssets',
      checkboxLabel: <Trans id="whatWasAffectedForm.business_assets" />,
      checkboxHelpText: (
        <Trans id="whatWasAffectedForm.business_assets.example" />
      ),
      checkboxValue: whatWasAffectedPages.BUSINESS.key,
    },
    {
      name: 'other',
      checkboxLabel: <Trans id="whatWasAffectedForm.other" />,
      checkboxHelpText: '',
      checkboxValue: whatWasAffectedPages.OTHER.key,
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={whatWasAffected}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
        validationSchema={WhatWasAffectedFormSchema()}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          submitCount,
          dirty,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <WarningModal dirty={dirty} isSubmitting={isSubmitting} />
            <Container>
              <Row className="form-question">
                <Row className="form-label">
                  <Trans id="whatWasAffectedForm.optionsTitle" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="whatWasAffectedForm.optionsHelpText" />
                </Row>
                {Object.keys(errors).length > 0 && (
                  <ErrorSummary
                    errors={createErrorSummary(errors)}
                    submissions={submitCount}
                    title={<Trans id="default.hasValidationErrors" />}
                  />
                )}
              </Row>
              <Row className="form-section" id="affectedOptions">
                {errors && errors.affectedOptions && (
                  <ErrorText>
                    <Trans id="whatWasAffectedForm.warning" />
                  </ErrorText>
                )}
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
                            component={CheckBoxRadio}
                            value={question.checkboxValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="checkbox"
                            id={'checkbox-' + question.name}
                          />
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
