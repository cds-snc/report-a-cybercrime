/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'

export const DevicesSummary = props => {
  const [data] = useStateValue()

  const devices = {
    ...testdata.formData.devicesInfo,
    ...data.formData.devicesInfo,
  }
  const hasDataToDisplay =
    devices.deviceOrAccount.length > 0 || devices.devicesTellUsMore.length > 0

  console.log({ devices })

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.devices.deviceOrAccount" />
          <Trans id="confirmationPage.devices.devicesTellUsMore" />
        </div>
      ) : null}

      {hasDataToDisplay ? (
        <React.Fragment>
          <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
            <Flex align="baseline">
              <H2>
                <Trans id="confirmationPage.devicesTitle" />
              </H2>
              <EditButton
                path="/devices"
                label="Edit affected devices or accounts"
              />
            </Flex>

            <React.Fragment>
              <Stack as="dl" spacing={4} shouldWrapChildren>
                <DescriptionListItem
                  descriptionTitle="confirmationPage.devices.deviceOrAccount"
                  description={devices.deviceOrAccount}
                />
                <DescriptionListItem
                  descriptionTitle="confirmationPage.devices.devicesTellUsMore"
                  description={devices.devicesTellUsMore}
                />
              </Stack>
            </React.Fragment>
          </Stack>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
}