/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Trans } from '@lingui/macro'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack, Box, FormControl } from '@chakra-ui/core'
import { FormLabel} from '../components/FormLabel'
import { TextArea } from '../components/text-area'
import { FormHelperText } from '../components/FormHelperText'

export const ConfirmationForm = props => {
  return (
    <React.Fragment>
      <Form
        onSubmit={props.onSubmit}
        render={({ handleSubmit }) => (

          <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>

          <Field name="tellUsMore">
            {props => (

              <FormControl>
                <FormLabel>
                  <Trans id="confirmationPage.tellUsMore"/>
                </FormLabel>

                <FormHelperText>
                  <Trans id="confirmationPage.tellUsMoreHelperText"/>
                </FormHelperText>
                
                <TextArea id= "tellUsMore"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>

            )}

          </Field>

          <Box as="form" onSubmit={handleSubmit}>
            <NextAndCancelButtons
              next={<Trans id="confirmationPage.correctInfo"/>}
              button={<Trans id="confirmationPage.nextButton" />}
            />
          </Box>
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

ConfirmationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
