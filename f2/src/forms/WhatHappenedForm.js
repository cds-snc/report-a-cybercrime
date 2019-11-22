/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { TextArea } from '../components/text-area'
import { Text } from '../components/text'
import { FormHelperText } from '../components/FormHelperText'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getWhatHappened } from '../utils/queriesAndMutations'
import { FormControl, FormLabel } from '@chakra-ui/core'

const TextAreaAdapter = finalFormAdapter(TextArea)

export const WhatHappenedForm = props => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getWhatHappened(client)}
        onSubmit={data => props.onSubmit(client, data)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="whatHappened">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="whatHappened">
                    <Trans id="whatHappendPage.summary" />
                  </FormLabel>
                  <FormHelperText variant="above">
                    <Trans id="whatHappendPage.hint" />
                  </FormHelperText>
                  <TextArea
                    id="whatHappened"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>
            <NextAndCancelButtons>
              <Trans id="whatHappenedPage.nextButton" />
            </NextAndCancelButtons>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
