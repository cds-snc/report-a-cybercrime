/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { TextArea } from '../components/formik/textArea'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import { NextCancelButtons } from '../components/formik/button'
import { LocationInfoFormSchema } from './LocationInfoFormSchema'
import { P } from '../components/paragraph'
import { Button } from '../components/button'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Icon } from '@chakra-ui/core'

export const LocationInfoForm = (props) => {
  const [data] = useStateValue()
  const locationInfo = {
    ...data.formData.locationInfo,
  }

  let formLabel = <Trans id="locationinfoPage.postalCode" />
  let formHelpText = <Trans id="locationinfoPage.postalCodeExample" />
  let nextPage = <Trans id="locationinfoPage.nextPage" />

  return (
    <Formik
      initialValues={locationInfo}
      validationSchema={LocationInfoFormSchema()}
      onSubmit={(values) => {
        props.onSubmit(values)
      }}
    >
      {({ handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            <P w="100%">
              <Trans id="locationinfoPage.skipInfo" />
            </P>
            <Button
              as={ReactRouterLink}
              fontSize={{ base: 'lg', md: 'xl' }}
              color="black"
              variant="solid"
              variantColor="gray"
              bg="gray.400"
              borderColor="gray.500"
              to="/contactinfo"
              textAlign="center"
              className="button-link black-button-link"
            >
              <Trans id="locationinfoPage.skipButton" />
              <Icon
                focusable="false"
                ml={2}
                mr={-2}
                name="chevron-right"
                size="28px"
              />
            </Button>
            <P>
              <br />{' '}
            </P>
            <Row className="form-question" lg={1}>
              <Row className="form-label">{formLabel}</Row>

              <Row className="form-helper-text">{formHelpText}</Row>
              <ErrorMessage name="postalCode" component={Error} />
            </Row>
            <Row className="form-section">
              <Field
                name="postalCode"
                component={TextArea}
                onChange={handleChange}
                onBlur={handleBlur}
                h="12px"
                w="25px "
                marginTop="-0.5rem"
                id="textarea-locationInfo"
              ></Field>
            </Row>
            <Row>
              <NextCancelButtons
                submit={<Trans id="locationPage.nextButton" />}
                cancel={<Trans id="button.cancelReport" />}
                label={nextPage}
              />
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

LocationInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
