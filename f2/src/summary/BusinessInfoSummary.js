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

export const BusinessInfoSummary = (props) => {
  const [data] = useStateValue()

  const businessInfo = {
    ...testdata.formData.businessInfo,
    ...data.formData.businessInfo,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.businessInfo.nameOfBusiness" />
          <Trans id="confirmationPage.businessInfo.industry" />
          <Trans id="confirmationPage.businessInfo.role" />
          <Trans id="confirmationPage.businessInfo.numberOfEmployee" />
          <Trans id="confirmationPage.businessInfo.title.edit" />
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
            <Trans id="confirmationPage.businessInfo.title" />
          </H2>

          <EditButton
            path="/business"
            label="confirmationPage.businessInfo.title.edit"
          />
        </Flex>

        {containsData(businessInfo) ? (
          <Stack as="dl" spacing={4}>
            <DescriptionListItem
              descriptionTitle="confirmationPage.businessInfo.nameOfBusiness"
              description={businessInfo.nameOfBusiness}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.businessInfo.industry"
              description={businessInfo.industry}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.businessInfo.role"
              description={businessInfo.role}
            />
            <DescriptionListItem
              descriptionTitle="confirmationPage.businessInfo.numberOfEmployee"
              description={businessInfo.numberOfEmployee}
            />
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.businessInfo.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
