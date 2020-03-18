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
import { useEffect } from 'react'

export const ErrorSummary = props => {
  const { i18n } = useLingui()

  const { errors } = useForm(props.onSubmit).getState()

  useEffect(() => {
    const summary = document
      .getElementById('error-summary')
      .getBoundingClientRect()

    window.scrollTo(0, summary.y - 16)
  })

  return (
    <Alert id="error-summary" status="error" aria-atomic>
      <Stack>
        <Text fontSize="md" fontWeight="bold">
          <Trans id="default.hasValidationErrors" />
        </Text>

        <Ol>
          {Object.keys(errors).map(key => (
            <Li key={key} fontSize="md">
              <A
                fontSize="md"
                fontWeight="bold"
                color="blue.900"
                href={`#${key}`}
              >
                {i18n._(errors[key])}
              </A>
            </Li>
          ))}
        </Ol>
      </Stack>
    </Alert>
  )
}
