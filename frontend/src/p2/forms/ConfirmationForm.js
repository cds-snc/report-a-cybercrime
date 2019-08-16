/** @jsx jsx */
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Container } from '../../components/container'
import { TextArea } from '../../components/text-area'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { Text } from '../../components/text'
import { H2 } from '../../components/header'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import {
  getTellUsMore,
  SUBMIT_P2_REPORT_MUTATION,
} from '../../utils/queriesAndMutations'

const TextAreaAdapter = finalFormAdapter(TextArea)

export const ConfirmationForm = props => {
  const [tellUsMore, setTellUsMore] = useState('')

  const onChange = (e, client) => {
    setTellUsMore(e.target.value)
    client.writeData({
      data: { tellUsMore: JSON.stringify({ tellUsMore: e.target.value }) },
    })
  }

  return (
    <React.Fragment>
      <H2 marginTop={[4, null, 5]}>
        <Trans>Tell us more</Trans>
      </H2>
      <ApolloConsumer>
        {client => (
          <Mutation mutation={SUBMIT_P2_REPORT_MUTATION}>
            {submitReport => (
              <Form
                initialValues={getTellUsMore(client)}
                onSubmit={() => props.onSubmit(client, submitReport)}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="tellUsMore">
                      <Text
                        marginTop={[1, null, 2]}
                        marginBottom={[1, null, 2]}
                      >
                        <Trans>
                          Is there information you’d like to add that didn’t fit
                          anywhere else?
                        </Trans>
                      </Text>
                    </label>
                    <div>
                      <Field
                        input={{
                          value: tellUsMore
                            ? tellUsMore
                            : getTellUsMore(client).tellUsMore,
                          onChange: e => onChange(e, client),
                        }}
                        name="tellUsMore"
                        id="tellUsMore"
                        component={TextAreaAdapter}
                        height="200px"
                      />
                    </div>

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
                        <Trans>Submit Report</Trans>
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
                      <Link
                        type="button"
                        color="black"
                        to="/p2"
                        textAlign="center"
                      >
                        <Trans>Cancel report</Trans>
                      </Link>
                    </Container>
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
