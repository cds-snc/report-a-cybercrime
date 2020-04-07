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
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const LocationInfoSummary = (props) => {
  const [data] = useStateValue()
  const location = {
    ...testdata.formData.location, //Remove after done testing
    ...data.formData.location,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.location.city" />
          <Trans id="confirmationPage.location.province" />
          <Trans id="confirmationPage.location.postalCode" />
          <Trans id="confirmationPage.location.title.edit" />
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
            <Trans id="confirmationPage.location.title" />
          </H2>
          <EditButton
            path="/location"
            label="confirmationPage.location.title.edit"
          />
        </Flex>
        {containsData(location) ? (
          <Stack as="dl" spacing={4}>
            <DescriptionListItem
              descriptionTitle="confirmationPage.location.city"
              description={location.city}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.location.province"
              description={location.province}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.location.postalCode"
              description={location.postalCode}
            />
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.location.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
