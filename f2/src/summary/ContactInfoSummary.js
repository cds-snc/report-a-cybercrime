/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const ContactInfoSummary = ({ onSubmit }) => {
  const [data] = useStateValue()
  const contactInfo = {
    fullName: '',
    email: '',
    postalCode: '',
    ...data.formData.contactInfo,
    ...testdata.formData.contactInfo, //Remove after done testing
  }

  return (
    <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
      <Flex align="baseline">
        <H2>
          <Trans id="confirmationPage.contactTitle" />
        </H2>
        <EditButton path="/contactinfo" label="Edit Contact Info" />
      </Flex>
      {contactInfo.fullName + contactInfo.email + contactInfo.postalCode ? (
        <Stack as="dl" spacing={4} shouldWrapChildren>
          <DescriptionListItem
            descriptionTitle="contactinfoPage.fullName"
            description={contactInfo.fullName}
          />
          <DescriptionListItem
            descriptionTitle="contactinfoPage.emailAddress"
            description={contactInfo.email}
          />
          <DescriptionListItem
            descriptionTitle="contactinfoPage.postCode"
            description={contactInfo.postalCode}
          />
        </Stack>
      ) : (
        <Text>
          <Trans id="confirmationPage.contactIntro" />
        </Text>
      )}
    </Stack>
  )
}
