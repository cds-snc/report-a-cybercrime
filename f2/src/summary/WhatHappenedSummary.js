/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2, H3 } from '../components/header'
import { Text } from '../components/text'

export const WhatHappenedSummary = (props) => {
  const [data] = useStateValue()

  const whatHappened = {
    whatHappened: '',
    ...testdata.formData.whatHappened,
    ...data.formData.whatHappened,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.whatHappened.title.edit" />
        </div>
      ) : null}

      <Stack
        spacing={4}
        borderBottom="2px"
        borderColor="gray.300"
        pb={4}
        {...props}
      >
        <Flex align="baseline">
          <H2 fontWeight="normal">
            <Trans id="confirmationPage.whatHappened.title" />
          </H2>
          {whatHappened.edited && (
            <H3 fontWeight="normal" paddingLeft="1rem">
              <Trans id="confirmationPage.editedTag" />
            </H3>
          )}
          <EditButton
            label="confirmationPage.whatHappened.title.edit"
            path="/whathappened"
            edited={whatHappened.edited}
          />
        </Flex>

        {whatHappened.whatHappened ? (
          <Text>{whatHappened.whatHappened}</Text>
        ) : (
          <Text>
            <Trans id="confirmationPage.whatHappened.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
