/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { useIntl } from 'react-intl'
import { useLingui } from '@lingui/react'
import { Text } from '../components/text'

export const InformationSummary = props => {
  const [data] = useStateValue()
  const { i18n } = useLingui()
  const intl = useIntl()

  const personalInformation = {
    condition: {
      ...testdata.formData.whatWasAffected,
      ...data.formData.whatWasAffected,
    },
    typeOfInfoReq: [],
    typeOfInfoObtained: [],
    ...testdata.formData.personalInformation,
    ...data.formData.personalInformation,
  }

  const shouldExist = personalInformation.condition.affectedOptions.includes(
    'whatWasAffectedForm.personal_information',
  )

  const hasInfoToDisplay =
    personalInformation.typeOfInfoReq.length > 0 ||
    personalInformation.typeOfInfoObtained.length > 0 ||
    personalInformation.tellUsMore.length > 0

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.personalInformation.typeOfInfoReq" />
          <Trans id="confirmationPage.personalInformation.typeOfInfoObtained" />
          <Trans id="confirmationPage.personalInformation.tellUsMore" />
          <Trans id="confirmationPage.personalInformation.title.edit" />
        </div>
      ) : null}

      {shouldExist ? (
        <Stack
          className="section"
          spacing={4}
          borderBottom="2px"
          borderColor="gray.300"
          pb={4}
          {...props}
        >
          <Flex align="baseline">
            <H2>
              <Trans id="confirmationPage.personalInformation.title" />
            </H2>
            <EditButton
              path="/information"
              label="Edit affected data or personal information"
            />
          </Flex>

          {hasInfoToDisplay ? (
            <Stack as="dl" spacing={4} shouldWrapChildren>
              {personalInformation.typeOfInfoReq.length > 0 ? (
                <DescriptionListItem
                  descriptionTitle="confirmationPage.personalInformation.typeOfInfoReq"
                  description={intl.formatList(
                    personalInformation.typeOfInfoReq.map(i => i18n._(i)),
                    { type: 'conjunction' },
                  )}
                />
              ) : null}

              {personalInformation.typeOfInfoObtained.length > 0 ? (
                <DescriptionListItem
                  descriptionTitle="confirmationPage.personalInformation.typeOfInfoObtained"
                  description={intl.formatList(
                    personalInformation.typeOfInfoObtained.map(i => i18n._(i)),
                    { type: 'conjunction' },
                  )}
                />
              ) : null}
              <DescriptionListItem
                descriptionTitle="confirmationPage.personalInformation.tellUsMore"
                description={personalInformation.tellUsMore}
              />
            </Stack>
          ) : (
            <Text>
              <Trans id="confirmationPage.personalInformation.nag" />
            </Text>
          )}
        </Stack>
      ) : null}
    </React.Fragment>
  )
}
