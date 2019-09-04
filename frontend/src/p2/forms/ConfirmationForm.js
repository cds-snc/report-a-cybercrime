/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { jsx } from '@emotion/core'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Form } from 'react-final-form'
import { ButtonsContainer } from '../../components/buttons-container'
import {
  getTellUsMore,
  SUBMIT_P2_REPORT_MUTATION,
} from '../../utils/queriesAndMutations'

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
                    <ButtonsContainer
                      buttonLink={false}
                      cancel={true}
                      submit={true}
                    />
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
