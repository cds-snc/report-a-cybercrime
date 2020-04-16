/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2 } from '../components/header'
import { Text } from '../components/text'

export const AnonymousSummary = (props) => {
  const [data] = useStateValue()

  const anonymous = {
    ...testdata.formData.anonymous,
    ...data.formData.anonymous,
  }

  return (
    <React.Fragment>
      <Stack
        spacing={4}
        borderBottom="2px"
        borderColor="gray.300"
        pb={4}
        {...props}
      >
        <Flex align="baseline">
          <H2 fontWeight="normal">
            <Trans id="confirmationPage.anonymous.title" />
          </H2>
          <EditButton
            label="confirmationPage.anonymous.title.edit"
            path="/anonymous"
          />
        </Flex>

        <Text>{anonymous.anonymousOption}</Text>
        <Text>
          <Trans id="confirmationPage.anonymous.nag" />
        </Text>
      </Stack>
    </React.Fragment>
  )
}
