import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/buttons-container'
import { Checkbox } from '../components/checkbox'
import { Text } from '../components/text'
import { TextArea } from '../components/text-area'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getImpact } from '../utils/queriesAndMutations'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`
const Fieldset = styled('fieldset')`
  margin: 0;
  padding: 0;
  border: none;
`

const validate = () => {
  return {}
}

export const ImpactStatementInfoForm = props => {
  const { i18n } = useLingui()

  const howWereYouAffected = [
    'impactPage.affected1',
    'impactPage.affected2',
    'impactPage.affected3',
    'impactPage.affected4',
    'impactPage.affected5',
    'impactPage.affected6',
    'impactPage.affected7',
  ]
  return (
    <ApolloConsumer>
      {client => (
        <Form
          initialValues={getImpact(client)}
          onSubmit={data => props.onSubmit(client, data)}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Fieldset>
                <legend>
                  <Text marginTop={[5, null, 6]}>
                    <strong>
                      <Trans id="impactPage.detail" />
                    </strong>
                  </Text>
                </legend>

                <div>
                  {howWereYouAffected.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="howWereYouAffected"
                          component={CheckboxAdapter}
                          type="checkbox"
                          value={key}
                          label={i18n._(key)}
                        />
                      </CheckboxStyle>
                    )
                  })}
                </div>
              </Fieldset>

              <label htmlFor="damage">
                <Text marginTop={[5, null, 6]}>
                  <strong>
                    <Trans id="impactPage.summary" />
                  </strong>
                  <Text color="darkGray" mt="6px" mb="8px">
                    <Trans id="impactPage.example" />
                  </Text>
                </Text>
              </label>
              <div>
                <Field
                  name="damage"
                  id="damage"
                  component={TextAreaAdapter}
                  height="50px"
                  width="100%"
                />
              </div>
              <NextAndCancelButtons>
                <Trans id="impactPage.nextButton">
                  Next: Contact information
                </Trans>
              </NextAndCancelButtons>
            </form>
          )}
        />
      )}
    </ApolloConsumer>
  )
}

ImpactStatementInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
