/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Trans } from '@lingui/macro'
import { jsx } from '@emotion/core'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import {
  getTellUsMore,
  SUBMIT_P2_REPORT_MUTATION,
} from '../utils/queriesAndMutations'

export const ConfirmationForm = props => {
  return (
    <React.Fragment>
      <ApolloConsumer>
        {client => (
          <Mutation mutation={SUBMIT_P2_REPORT_MUTATION}>
            {submitReportP2 => (
              <Form
                initialValues={getTellUsMore(client)}
                onSubmit={() => props.onSubmit(client, submitReportP2)}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <NextAndCancelButtons>
                      <Trans id="confirmationPage.nextButton" />
                    </NextAndCancelButtons>
                  </form>
                )}
              />
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    </React.Fragment>
  )
}

ConfirmationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
