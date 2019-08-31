/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { TextArea } from '../../components/text-area'
import { Text } from '../../components/text'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getWhatHappened } from '../../utils/queriesAndMutations'
import { ButtonsContainer } from '../../components/buttons-container'

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
                <Trans>
                  <strong>Tell us what happened</strong>
                </Trans>
              </Text>
              <Field
                name="whatHappened"
                id="whatHappened"
                component={TextAreaAdapter}
                height="200px"
              />
            </label>
            <ButtonsContainer
              buttonLink={false}
              cancel={true}
              nextPage="Scammer details"
            />
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
