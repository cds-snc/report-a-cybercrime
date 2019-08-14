/** @jsx jsx */
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { css, jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Container } from '../../components/container'
import { TextArea } from '../../components/text-area'
import { Button } from '../../components/button'
import { Link } from '../../components/link'
import { Text } from '../../components/text'
import { ApolloConsumer } from 'react-apollo'
import { finalFormAdapter } from '../../utils/finalFormAdapter'
import { getContactInfo } from '../../utils/queriesAndMutations'

const TextAreaAdapter = finalFormAdapter(TextArea)

const validate = () => {
  return {}
}

export const ContactInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        initialValues={getContactInfo(client)}
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="contactInfoFullname">
              <Text marginTop={[4, null, 5]}>
                <Trans>Full name</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="contactInfoFullname"
                id="contactInfoFullname"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="contactInfoEmail">
              <Text marginTop={[4, null, 5]}>
                <Trans>Email address</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="contactInfoEmail"
                id="contactInfoEmail"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="contactInfoPhone">
              <Text marginTop={[4, null, 5]}>
                <Trans>Phone number</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="contactInfoPhone"
                id="contactInfoPhone"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="contactInfoPostalcode">
              <Text marginTop={[4, null, 5]}>
                <Trans>Postal code</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="contactInfoPostalcode"
                id="contactInfoPostalcode"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <Container
              width="305px"
              marginTop={[3, null, 4]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <Button
                type="submit"
                onClick={() => navigate('/p1/confirmation')}
              >
                <Trans>Continue</Trans>
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
              <Link type="button" color="black" to="/p1/" textAlign="center">
                <Trans>Cancel report</Trans>
              </Link>
            </Container>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

ContactInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
