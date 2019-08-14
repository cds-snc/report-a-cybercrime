/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../../components/checkbox'
import { Container } from '../../components/container'
import { H3,H4 } from '../../components/header'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { TextArea } from '../../components/text-area'
import { finalFormAdapter } from '../../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const howWereYouAffected = [
  i18nMark('Account hacked'),
  i18nMark('Information stolen'),
  i18nMark('Money lost'),
  i18nMark('Reputation damaged'),
  i18nMark('Safety harmed or threatened'),
  i18nMark('Wellbeing affected'),
  i18nMark('Other impact')
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
            
            onSubmit={data => props.onSubmit(client, data)}
            validate={validate}
            render={({
              handleSubmit,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
               
                <label htmlFor="howWereYouAffected">
                  <H4 marginTop={[5, null, 6]}>
                    <H4><Trans>Select all that apply:</Trans></H4>
                  </H4>
                </label>
                
                <Fieldset>
                  
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
    <React.Fragment>
      <label htmlFor="other impact">
        
      </label>
      <div>
        <Field
          name="otherImpact"
          id="otherImpact"
          component={TextAreaAdapter}
          height="50px"
          width="300px"
        />
      </div>
    </React.Fragment>
  ) : (
    ''
  )}



                <br/>
                <H3>
                    <Trans>Describe the extent of the damage.</Trans>
                </H3>
<ul>
    <li>What did you lose? </li>
    <li>What personal information was compromised?</li>
    <li>How much money was involved? </li>
</ul>

         <div>
              <Field
                name="scamDetails"
                id="scamDetails"
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
                  <Link
                    type="button"
                    color="black"
                    to="/p2/"
                    textAlign="center"
                  >
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
