import { useFormikContext } from 'formik'

export const FormikListener = () => {
  const { values, status, setStatus } = useFormikContext()
  const formError = status.errors
  let fieldsUpdated = false

  if (formError) {
    if (status.errorValues) {
      fieldsUpdated =
        JSON.stringify(values) !== JSON.stringify(status.errorValues)
    } else {
      setStatus({ errors: formError, errorValues: values })
    }

    if (fieldsUpdated) {
      setStatus({ errors: '' })
    }
  }
  return null
}
