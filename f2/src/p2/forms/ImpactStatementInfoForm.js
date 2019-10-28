import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { ButtonsContainer } from '../../components/buttons-container'
import { P } from '../../components/paragraph'
import { Text } from '../../components/text'
import { TextArea } from '../../components/text-area'
import { Label } from '../../components/label'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getImpact } from '../../utils/queriesAndMutations'

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
    i18n._('Device or account hacked'),
    i18n._('Information stolen'),
    i18n._('Money lost'),
    i18n._('Reputation damaged'),
    i18n._('Safety threatened'),
    i18n._('Wellbeing affected'),
    i18n._('No impact'),
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
                <Label htmlFor="howWereYouAffected">
                  <P>
                    <Trans>
                      <strong>What was the impact of the scam?</strong>
                    </Trans>
                  </P>
                </Label>

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

              <Text marginTop={[5, null, 6]}>
                <Trans>
                  <strong>Tell us more about how it impacted you.</strong>
                </Trans>
              </Text>
              <Text
                css={css`
                  color: gray;
                `}
                mt="6px"
                mb="8px"
              >
                <Trans>
                  For example: the amount of money, the information taken, what
                  else was affected
                </Trans>
              </Text>
              <div>
                <Field
                  name="damage"
                  id="damage"
                  component={TextAreaAdapter}
                  height="50px"
                  width="100%"
                />
              </div>

              <ButtonsContainer
                buttonLink={false}
                cancel={true}
                nextPage="Contact info"
              />
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
