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
                <Trans>What happened?</Trans>
              </Text>
              <Field
                name="whatHappened"
                id="whatHappened"
                component={TextAreaAdapter}
                height="200px"
              />
            </label>

            <Container
              width="305px"
              marginTop={[1, null, 1]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Button type="submit">
                <Trans>Continue</Trans>
              </Button>
            </Container>

            <Container
              width="300px"
              marginTop={[1, null, 1]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Link type="button" color="black" to="/p2" textAlign="center">
                <Trans>Cancel report</Trans>
              </Link>
            </Container>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
