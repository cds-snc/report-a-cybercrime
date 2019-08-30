/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { Container } from '../../components/container'
import { ButtonsContainer } from '../../components/buttons-container'
import { P } from '../../components/paragraph'
import { TextArea } from '../../components/text-area'
import { Label } from '../../components/label'
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
  i18nMark('Other impact'),
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
        render={({ handleSubmit, values }) => (
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

            {values.howWereYouAffected &&
            values.howWereYouAffected.indexOf('Other impact') > -1 ? (
              <Container marginTop={[2, null, 3]}>
                <Field
                  name="otherImpact"
                  id="otherImpact"
                  component={TextAreaAdapter}
                  height="50px"
                />
              </Container>
            ) : (
              ''
            )}

            <br />
            <P>
              <Trans>
                <strong>
                  Tell us more about what was affected, lost, or damaged.
                </strong>
              </Trans>
            </P>
            <div>
              <Field
                name="damage"
                id="damage"
                component={TextAreaAdapter}
                height="75px"
              />
            </div>

            <ButtonsContainer buttonLink={false} cancel={true} />
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

ImpactStatementInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
