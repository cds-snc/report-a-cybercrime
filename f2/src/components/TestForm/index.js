import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import { getSchema } from '../../utils/validationSchema'
import fetch from 'isomorphic-fetch'

export const TestForm = () => {
  let formStatus
  return (
    <React.Fragment>
      <Formik
        //Initialize values
        initialValues={{ name: '', email: '', phone: '', postalCode: '' }}
        //Set validation schema
        validationSchema={getSchema()}
        //Submit the form if validation passes
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          //Indicate the form has been submitted so the Submit button is disabled
          setSubmitting(true)

          //Set form data
          const form_data = new FormData()
          for (let key in values) {
            form_data.append(key, values[key])
          }

          console.log('Submitting: ', values)

          //Call API to submit to server
          const response = await fetch('/submitTestForm', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrer: 'no-referrer',
            body: form_data,
          }).catch(function (error) {
            console.log({ error })
          })

          //Indicate the form has finished submitting to enable the Submit button
          setSubmitting(false)

          //Reset form state
          resetForm()

          console.log(response.status)

          //Set form status to display Success/Failure message
          formStatus = response.status
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="mx-auto">
            {/*Conditional message to display the status of form submission*/}
            {formStatus === 200 && <div>Submission Success!</div>}
            {formStatus === 400 && (
              <div>There has been an error with your submission. :(</div>
            )}

            <Form.Group controlId="formName">
              <Form.Label>Name :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                /*Tell Formik to handle on change event (when value changes)*/
                onChange={handleChange}
                /*Tell Formik to handle on blur event (when element loses focus)*/
                onBlur={handleBlur}
                /*Set the value from initial values*/
                value={values.name}
                /*Set styling of element, if Formik indicates there is an error and had focus
              apply the error class */
                className={`form-input ${
                  touched.name && errors.name ? 'error' : null
                }`}
              />
              {/*Same as above, if Formik indicates the element had focus and there is an error
              display error message*/}
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={`form-input ${
                  touched.email && errors.email ? 'error' : null
                }`}
              />
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone :</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className={`form-input ${
                  touched.phone && errors.phone ? 'error' : null
                }`}
              />
              {touched.phone && errors.phone ? (
                <div className="error-message">{errors.phone}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code :</Form.Label>
              <Form.Control
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalCode}
                className={`form-input ${
                  touched.postalCode && errors.postalCode ? 'error' : null
                }`}
              />
              {touched.postalCode && errors.postalCode ? (
                <div className="error-message">{errors.postalCode}</div>
              ) : null}
            </Form.Group>
            {/*Button to submit, if the page is waiting on server response this is disabled.*/}
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
