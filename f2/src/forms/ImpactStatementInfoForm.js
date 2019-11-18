import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { Checkbox } from '../components/checkbox'
import { ButtonsContainer } from '../components/buttons-container'
import { TextArea } from '../components/text-area'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getImpact } from '../utils/queriesAndMutations'
import { CheckboxGroup, FormControl, FormLabel } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const validate = () => {
  return {}
}

export const ImpactStatementInfoForm = props => {
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
              <FormControl as="fieldset">
                <FormLabel as="legend" htmlFor="howWereYouAffected">
                  <Trans id="impactPage.detail" />
                </FormLabel>
                <CheckboxGroup>
                  {howWereYouAffected.map(key => {
                    return (
                      <CheckboxAdapter value={key}>
                        <Trans id={key}></Trans>
                      </CheckboxAdapter>
                    )
                  })}
                </CheckboxGroup>
              </FormControl>

              <FormControl>
                <FormLabel>
                  <Trans id="impactPage.summary" />
                </FormLabel>
                <FormHelperText variant="above">
                  <Trans id="impactPage.example" />
                </FormHelperText>
                <TextAreaAdapter id="damage" name="damage" />
              </FormControl>

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
