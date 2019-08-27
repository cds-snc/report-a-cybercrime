/** @jsx jsx */
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { ButtonsContainer } from '../../components/buttons-container'
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
      <hr />
      <br></br>
      <H2>Tell us more</H2>
      <ApolloConsumer>
        {client => (
          <Mutation mutation={SUBMIT_P2_REPORT_MUTATION}>
            {submitReportP2 => (
              <Form
                initialValues={getTellUsMore(client)}
                onSubmit={() => props.onSubmit(client, submitReportP2)}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="tellUsMore">
                      <Text
                        marginTop={[1, null, 2]}
                        marginBottom={[1, null, 2]}
                      >
                        <Trans>
                          Is there any information you'd like to add that didn't
                          fit elsewhere?
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
                        height="75px"
                      />
                    </div>

                    <ButtonsContainer
                      buttonLink={false}
                      cancel={true}
                      buttonTitle="Submit Report"
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
