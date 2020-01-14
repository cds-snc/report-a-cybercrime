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
    ...data.formData.whatHappened,
    ...testdata.formData.whatHappened,
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.scamTitle" />
        </H2>
        <EditButton label={'Edit what happened'} path="/whathappened" />
      </Flex>

      {whatHappened ? (
        <Text>{whatHappened.whatHappened}</Text>
      ) : (
        <Text>
          <Trans id="confirmationPage.scamIntro" />
        </Text>
      )}
    </Stack>
  )
}
