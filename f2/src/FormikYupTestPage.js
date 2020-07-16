/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { useStateValue } from './utils/state'
import { TestPage } from './components/TestPage'
import { TestForm } from './components/TestForm'

export const FormikYupTestPage = () => {
  const [state, dispatch] = useStateValue()
  const { doneForms, formData } = state

  return (
    <Route
      render={({ history }) => (
        <TestPage title="Test Form" description="Testing Formik and Yup">
          <TestForm />
        </TestPage>
      )}
    />
  )
}
