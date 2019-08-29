/** @jsx jsx */
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { Container } from '../../components/container'
import { P } from '../../components/paragraph'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
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
                    <strong>How were you affected?</strong>
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
                <strong>Tell us more about what was affected.</strong>
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

ImpactStatementInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
