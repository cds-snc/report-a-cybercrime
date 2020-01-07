/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Trans } from '@lingui/macro'
import { jsx } from '@emotion/core'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Box } from '@chakra-ui/core'

export const ConfirmationForm = props => {
  return (
    <React.Fragment>
      <Form
        onSubmit={props.onSubmit}
        render={({ handleSubmit }) => (
          <Box as="form" onSubmit={handleSubmit}>
            <NextAndCancelButtons>
              <Trans id="confirmationPage.nextButton" />
            </NextAndCancelButtons>
          </Box>
        )}
      />
    </React.Fragment>
  )
}

ConfirmationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
