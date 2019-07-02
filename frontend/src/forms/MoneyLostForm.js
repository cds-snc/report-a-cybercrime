/** @jsx jsx */
import React from 'react'

import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { I18n, i18nMark } from '@lingui/react'
import { Form, Field } from 'react-final-form'
import { Container } from '../components/container'
import { Checkbox } from '../components/checkbox'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { Text } from '../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const methodsOfPayment = [
  i18nMark('credit card'),
  i18nMark('cash'),
  i18nMark('gift card'),
  i18nMark('other'),
]

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const validate = () => {
  return {}
}

export const MoneyLostForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="lostAmount">
              <Text marginTop={[4, null, 5]}>
                <Trans>Amount</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="lostAmount"
                id="lostAmount"
                component={TextAreaAdapter}
                height="25px"
                width="200px"
              />
            </div>

            <label htmlFor="lostCurrency">
              <Text marginTop={[4, null, 5]}>
                <Trans>Currency</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="lostCurrency"
                id="lostCurrency"
                component={TextAreaAdapter}
                height="25px"
                width="200px"
              />
            </div>

            <label htmlFor="lostMethodsOfPayment">
              <Text marginTop={[4, null, 5]}>
                <Trans>What method of payment was used?</Trans>
              </Text>
              <br></br>
            </label>
            <div>
              <I18n>
                {({ i18n }) =>
                  methodsOfPayment.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="lostMethodsOfPayment"
                          id="lostMethodsOfPayment"
                          component={CheckboxAdapter}
                          type="checkbox"
                          value={key}
                          label={i18n._(key)}
                        />
                      </CheckboxStyle>
                    )
                  })
                }
              </I18n>
            </div>

            {values.lostMethodsOfPayment &&
            values.lostMethodsOfPayment.indexOf('other') > -1 ? (
              <React.Fragment>
                <label htmlFor="lostOtherMethodOfPayment">
                  <Text>
                    <Trans>Other</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="lostOtherMethodOfPayment"
                    id="lostOtherMethodOfPayment"
                    component={TextAreaAdapter}
                    height="25px"
                    width="200px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <Container
              width="305px"
              marginTop={[3, null, 4]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Button type="submit">
                <Trans>Next</Trans>
              </Button>
            </Container>

            <Container
              width="300px"
              marginTop={[2, null, 3]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Link type="button" color="black" to="/" textAlign="center">
                <Trans>Cancel Report</Trans>
              </Link>
            </Container>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

MoneyLostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
