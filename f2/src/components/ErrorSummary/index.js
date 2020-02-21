/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Alert, Stack } from '@chakra-ui/core'
import { Text } from '../text'
import { Ol } from '../ordered-list'
import { Li } from '../list-item'
import { A } from '../link'
import { useForm } from 'react-final-form'

export const ErrorSummary = (...props) => {
  const { i18n } = useLingui()

  const { errors } = useForm(props.onSubmit).getState()

  return (
    <Alert status="error" borderLeft="3px" borderColor="red.700">
      <Stack>
        <Text fontSize="md" fontWeight="bold">
          <Trans id="default.hasValidationErrors" />
        </Text>

        <Ol>
          {Object.keys(errors).map(key => (
            <Li key={key} fontSize="md">
              <A fontSize="md" fontWeight="bold" href={`#${key}`}>
                {i18n._(errors[key])}
              </A>
            </Li>
          ))}
        </Ol>
      </Stack>
    </Alert>
  )
}