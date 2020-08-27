/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Trans } from '@lingui/macro'
import { jsx } from '@emotion/core'
import { useStateValue } from '../utils/state'
import { Form, Card } from 'react-bootstrap'
import { Formik } from 'formik'
import { NextCancelButtons } from '../components/formik/button'

export const ConfirmationForm = (props) => {
  const [{ reportId, submitted }] = useStateValue()
  return (
    <React.Fragment>
      {false ? ( // the following trans tags are for analyst email
        <div>
          <Trans id="analystReport.reportNumber" />
          <Trans id="analystReport.dateReceived" />
          <Trans id="analystReport.reportLanguage" />
          <Trans id="analystReport.reportVersion" />
          <Trans id="analystReport.flagged" />
          <Trans id="analystReport.noData" />
          <Trans id="analystReport.reportInformation" />
          <Trans id="analystReport.consent.yes" />
          <Trans id="analystReport.consent.no" />
          <Trans id="analystReport.narrative" />
          <Trans id="analystReport.methodOfComms.email" />
          <Trans id="analystReport.methodOfComms.phone" />
          <Trans id="analystReport.methodOfComms.online" />
          <Trans id="analystReport.methodOfComms.app" />
          <Trans id="analystReport.methodOfComms.others" />
          <Trans id="analystReport.numberOfEmployee.100To499" />
          <Trans id="analystReport.numberOfEmployee.1To99" />
          <Trans id="analystReport.numberOfEmployee.500More" />
          <Trans id="analystReport.affected.financial" />
          <Trans id="analystReport.affected.personalinformation" />
          <Trans id="analystReport.affected.business_assets" />
          <Trans id="analystReport.affected.devices" />
          <Trans id="analystReport.affected.other" />
          <Trans id="analystReport.selfHarmString" />
          <Trans id="analystReport.selfHarmWord" />
        </div>
      ) : null}
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {submitted ? (
                <Card bg="primary">
                  <Card.Body> 
                    <Trans
                      id="confirmationPage.thankyou"
                      values={{ reference: reportId }}
                    />
                  </Card.Body>
                </Card>
            ) : (
              <NextCancelButtons
                  submit={<Trans id="confirmationPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                />
                )}
          </Form>
        )}
      </Formik>

    </React.Fragment>
  )
}

ConfirmationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
