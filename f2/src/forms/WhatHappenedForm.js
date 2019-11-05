/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { TextArea } from '../components/text-area'
import { Text } from '../components/text'
import { NextAndCancelButtons } from '../components/buttons-container'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getWhatHappened } from '../utils/queriesAndMutations'

const TextAreaAdapter = finalFormAdapter(TextArea)

export const WhatHappenedForm = props => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getWhatHappened(client)}
        onSubmit={data => props.onSubmit(client, data)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="whatHappened">
              <Text marginTop={[5, null, 6]}>
                <strong>
                  <Trans id="whatHappendPage.summary" />
                </strong>
              </Text>
              <Text color="darkGray" mt="6px" mb="8px">
                <Trans id="whatHappendPage.hint" />
              </Text>
              <Field
                name="whatHappened"
                id="whatHappened"
                component={TextAreaAdapter}
                height="100px"
                width="100%"
              />
            </label>
            <NextAndCancelButtons>
              <Trans id="whatHappenedPage.nextButton">
                Next: Scammer details
              </Trans>
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
