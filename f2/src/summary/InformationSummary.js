/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'

export const InformationSummary = props => {
  const [data] = useStateValue()

  const personalInformation = {
    ...testdata.formData.personalInformation,
    ...data.formData.personalInformation,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.personalInformation.typeOfInfoReq" />
          <Trans id="confirmationPage.personalInformation.typeOfInfoObtained" />
          <Trans id="confirmationPage.personalInformation.tellUsMore" />
        </div>
      ) : null}

      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
            <Trans id="confirmationPage.personalInformation.title" />
          </H2>
          <EditButton
            path="/information"
            label="Edit affected data or personal information"
          />
        </Flex>

        <Stack as="dl" spacing={4}>
          <DescriptionListItem
            descriptionTitle="confirmationPage.personalInformation.typeOfInfoReq"
            description={personalInformation.typeOfInfoReq}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.personalInformation.typeOfInfoObtained"
            description={personalInformation.typeOfInfoObtained}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.personalInformation.tellUsMore"
            description={personalInformation.tellUsMore}
          />
        </Stack>
      </Stack>
    </React.Fragment>
  )
}
