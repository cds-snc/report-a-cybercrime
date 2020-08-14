/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Stack } from '@chakra-ui/core'
import { Trans } from '@lingui/macro'
import { jsx } from '@emotion/core'
import { Form } from 'react-final-form'
import { Well } from '../components/Messages'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { useStateValue } from '../utils/state'

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
      <Form
        onSubmit={props.onSubmit}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            {submitted ? (
              <Well variantColor="blue">
                <Trans
                  id="confirmationPage.thankyou"
                  values={{ reference: reportId }}
                />
              </Well>
            ) : (
              <NextAndCancelButtons
                button={<Trans id="confirmationPage.nextButton" />}
              />
            )}
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

ConfirmationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
