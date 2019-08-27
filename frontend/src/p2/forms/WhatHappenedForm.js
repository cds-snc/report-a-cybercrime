/** @jsx jsx */
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Container } from '../../components/container'
import { TextArea } from '../../components/text-area'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { Text } from '../../components/text'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getWhatHappened } from '../../utils/queriesAndMutations'
import { BREAKPOINTS } from '../../theme'
import { ButtonsContainer } from '../../components/buttons-container'

const TextAreaAdapter = finalFormAdapter(TextArea)
const mq = BREAKPOINTS.map(bp => `@media (min-width: ${bp})`)

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
            <ButtonsContainer buttonLink={false} cancel={true} />
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
