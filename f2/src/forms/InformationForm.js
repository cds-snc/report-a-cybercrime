/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { TextArea } from '../components/text-area'
import { ApolloConsumer } from 'react-apollo'
import { getP2ContactInfo } from '../utils/queriesAndMutations'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { P } from '../components/paragraph'

export const InformationForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getP2ContactInfo(client)}
        onSubmit={data => onSubmit(client, data)}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Field name="typeOfInfoReq">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="typeOfInfoReq">
                    <Trans id="informationPage.typeOfInfoReq" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="informationPage.typeOfInfoReqExample">
                      <VisuallyHidden as="span" />
                    </Trans>
                  </FormHelperText>
                  <TextInput
                    id="typeOfInfoReq"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>            
            <Field name="typeOfInfoObtained">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="typeOfInfoObtained">
                    <Trans id="informationPage.typeOfInfoObtained" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="informationPage.typeOfInfoObtainedExample">
                      <VisuallyHidden as="span" />
                    </Trans>
                  </FormHelperText>
                  <TextInput
                    id="typeOfInfoObtained"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>
            <Field name="tellUsMore">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="tellUsMore">
                    <Trans id="informationPage.tellUsMore" />
                  </FormLabel>
                  <TextArea
                    id="tellUsMore"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>
            <P>
              <Trans id="informationPage.nextStep"/>
            </P>
            <NextAndCancelButtons>
              <Trans id="informationPage.nextButton" />
            </NextAndCancelButtons>
          </Stack>
        )}
      />
    )}
  </ApolloConsumer>
)

InformationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
