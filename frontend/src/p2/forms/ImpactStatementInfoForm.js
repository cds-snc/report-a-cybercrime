/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { ButtonsContainer } from '../../components/buttons-container'
import { Text } from '../../components/text'
import { TextArea } from '../../components/text-area'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getImpact } from '../../utils/queriesAndMutations'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const howWereYouAffected = [
  i18nMark('Device or account hacked'),
  i18nMark('Information stolen'),
  i18nMark('Money lost'),
  i18nMark('Reputation damaged'),
  i18nMark('Safety threatened'),
  i18nMark('Wellbeing affected'),
  i18nMark('No impact'),
]

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
export const ImpactStatementInfoForm = props => (
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
                  <Trans>
                    <strong>What was the impact of the scam?</strong>
                  </Trans>
                </Text>
              </legend>

              <div>
                <I18n>
                  {({ i18n }) =>
                    howWereYouAffected.map(key => {
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
                    })
                  }
                </I18n>
              </div>
            </Fieldset>

            <label htmlFor="damage">
              <Text marginTop={[5, null, 6]}>
                <Trans>
                  <strong>Tell us more about how it impacted you.</strong>
                </Trans>
                <Text color="darkGray" mt="6px" mb="8px">
                  <Trans>
                    For example: the amount of money, the information taken,
                    what else was affected
                  </Trans>
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

ImpactStatementInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
