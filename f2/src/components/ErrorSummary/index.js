/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack } from '@chakra-ui/core'
import { Text } from '../text'
import { Ol } from '../ordered-list'
import { Li } from '../list-item'
import { A } from '../link'
import { useForm } from 'react-final-form'
import { Alert } from '../Messages'
import { focusTarget } from '../../utils/focusTarget'
import { useEffect } from 'react'

export const ErrorSummary = (props) => {
  const { i18n } = useLingui()

  const { errors } = useForm(props.onSubmit).getState()

  useForm(props.onSubmit).pauseValidation()

  useEffect(() => {
    const summary = document
      .getElementById('error-summary')
      .getBoundingClientRect()

    window.scrollTo(0, summary.y - 16)
  })
  console.log(errors)

  return (
    <Alert id="error-summary" status="error" aria-atomic>
      <Stack>
        <Text fontSize="md" fontWeight="bold">
          <Trans id="default.hasValidationErrors" />
        </Text>
        <Ol>
          {Object.keys(errors).map((key) => {
            // Omit all errors set to true from showing in ErrorSummary
            return errors[key] !== true ? (
              <Li key={key} fontSize="md">
                <A
                  fontSize="md"
                  fontWeight="bold"
                  color="blue.900"
                  href={`#${key}`}
                  onClick={(event) => {
                    let target = event.target

                    if (focusTarget(target)) {
                      event.preventDefault()
                    }
                  }}
                >
                  {i18n._(errors[key])}
                </A>
              </Li>
            ) : null
          })}
        </Ol>
      </Stack>
    </Alert>
  )
}
