/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2, H3 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const DevicesSummary = (props) => {
  const [data] = useStateValue()

  const devices = {
    ...testdata.formData.devicesInfo,
    ...data.formData.devicesInfo,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.devices.device" />
          <Trans id="confirmationPage.devices.account" />
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
          {devices.edited && (
            <H3 fontWeight="normal" paddingLeft="1rem">
              <Trans id="confirmationPage.editedTag" />
            </H3>
          )}
          <EditButton
            label="confirmationPage.devicesTitle.edit"
            path="/devices"
            edited={devices.edited}
          />
        </Flex>

        {containsData(devices) ? (
          <Stack as="dl" spacing={4}>
            <DescriptionListItem
              descriptionTitle="confirmationPage.devices.device"
              description={devices.device}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.devices.account"
              description={devices.account}
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
