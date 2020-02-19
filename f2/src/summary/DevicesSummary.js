/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const DevicesSummary = props => {
  const [data] = useStateValue()

  const devices = {
    ...testdata.formData.devicesInfo,
    ...data.formData.devicesInfo,
  }

  const hasInfoToDisplay =
    (devices.device.length > 0) | (devices.account.length > 0) ||
    devices.devicesTellUsMore.length > 0

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.devices.device" />
          <Trans id="confirmationPage.devices.account" />
          <Trans id="confirmationPage.devices.devicesTellUsMore" />
          <Trans id="confirmationPage.devicesTitle.edit" />
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
            <Trans id="confirmationPage.devicesTitle" />
          </H2>
          <EditButton
            path="/devices"
            label="confirmationPage.devicesTitle.edit"
          />
        </Flex>

        {hasInfoToDisplay ? (
          <Stack as="dl" spacing={4}>
            <DescriptionListItem
              descriptionTitle="confirmationPage.devices.device"
              description={devices.device}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.devices.account"
              description={devices.account}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.devices.devicesTellUsMore"
              description={devices.devicesTellUsMore}
            />
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.devices.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
