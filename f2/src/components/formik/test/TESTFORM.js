import React from 'react'
import { useStateValue } from '../../../utils/state'
import { Form, Container } from 'react-bootstrap'
import { Formik } from 'formik'
import { FormRow } from '../row'
import { P, ErrorText } from '../paragraph'


export const TestForm = (props) => {
  const [data] = useStateValue()

  return (
    <React.Fragment>
      <Formik
        initialValues={data.formData}
        validate={(values) => {
          console.log(values)
        }}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
        render={({ values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <FormRow>
                <P fontWeight="700">---Default Text---</P>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </P>
              </FormRow>
              <FormRow>
                <P fontWeight="700">---Error Text---</P>
                <ErrorText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </ErrorText>
              </FormRow>
              <FormRow>
                <P fontWeight="700">---Modified Text---</P>
                <P
                  fontSize="12px"
                  color="#fc03e3"
                  marginTop="1rem"
                  paddingLeft="1rem"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </P>
              </FormRow>
            </Container>
          </Form>
        )}
      />
    </React.Fragment>
  )
}
