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
  const infoReqSummary = []
  let infoReqLine = " "
  let infoReqSummaryLastItem = []
  let infoReqSummaryFirstitems = []
  const infoObtainedSummary = []
  let infoObtainedLine = " "
  let infoObtainedSummaryLastItem = []
  let infoObtainedSummaryFirstitems = []

  const personalInformation = {
    ...testdata.formData.personalInformation,
    ...data.formData.personalInformation,
  }

  //push all select entities into the stack and if 'other' is selected, push the value of other.
  personalInformation.typeOfInfoReq.map(key =>
    infoReqSummary.push(
      key === 'typeOfInfoReq.other'
        ? personalInformation.infoReqOther : i18n._(key).toLowerCase(),
    ),
  )
  //Pop the last item of the array to be used in conjuction
  infoReqSummaryLastItem = infoReqSummary.pop();
  //Join the arr with comma delimiter
  infoReqSummaryFirstitems = infoReqSummary.join(', ');

  //compose the overview summary
  infoReqLine = infoReqSummaryFirstitems
    + i18n._('confirmationPage.howDidItStart.conjuction')
    + infoReqSummaryLastItem

  //push all select entities into the stack and if 'other' is selected, push the value of other.
  personalInformation.typeOfInfoObtained.map(key =>
    infoObtainedSummary.push(
      key === 'typeOfInfoObtained.other'
        ? personalInformation.infoObtainedOther : i18n._(key).toLowerCase(),
    ),
  )
  //Pop the last item of the array to be used in conjuction
  infoObtainedSummaryLastItem = infoObtainedSummary.pop();
  //Join the arr with comma delimiter
  infoObtainedSummaryFirstitems = infoObtainedSummary.join(', ');

  //compose the overview summary
  infoObtainedLine = infoObtainedSummaryFirstitems
    + i18n._('confirmationPage.howDidItStart.conjuction')
    + infoObtainedSummaryLastItem


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


        <Stack as="dl" spacing={4} shouldWrapChildren>
          {personalInformation.typeOfInfoReq.length > 0 ? (
            <DescriptionListItem
              descriptionTitle="confirmationPage.personalInformation.typeOfInfoReq"
              description={infoReqLine}
            />
          ) : (
              <Text>
                <Trans id="confirmationPage.impactIntro" />
              </Text>
            )}

          {personalInformation.typeOfInfoObtained.length > 0 ? (
            <DescriptionListItem
              descriptionTitle="confirmationPage.personalInformation.typeOfInfoObtained"
              description={infoObtainedLine}
            />
          ) : (
              <Text>
                <Trans id="confirmationPage.impactIntro" />
              </Text>
            )}
          <DescriptionListItem
            descriptionTitle="confirmationPage.personalInformation.tellUsMore"
            description={personalInformation.tellUsMore}
          />
        </Stack>
      </Stack>
    </React.Fragment>
  )
}
