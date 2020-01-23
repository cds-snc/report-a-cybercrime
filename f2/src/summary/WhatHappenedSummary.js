/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { Text } from '../components/text'

export const WhatHappenedSummary = props => {
  const [data] = useStateValue()

  const whatHappened = {
    whatHappened: '',
    ...testdata.formData.whatHappened,
    ...data.formData.whatHappened,
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.whatHappened.title" />
        </H2>
        <EditButton label="confirmationPage.whatHappened.title.edit" path="/whathappened" />
      </Flex>

      {whatHappened.whatHappened.length > 0 ? (
        <Text>{whatHappened.whatHappened}</Text>
      ) : (
        <Text>
          <Trans id="confirmationPage.whatHappened.nag" />
        </Text>
      )}
    </Stack>
  )
}
