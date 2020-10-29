/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import line from '../images/line.png'

export const ContactInfoView = (props) => {
  const lang = props.lang

  const contactInfo = {
    ...testdata.formData.contactInfo,
    ...props.data.formData.contactInfo,
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.contactTitle']}
      </Text>
      {containsData(contactInfo) ? (
        <View>
          <DescriptionItemView
            title="confirmationPage.contactInfo.fullName"
            description={contactInfo.fullName}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.contactInfo.email"
            description={contactInfo.email}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.contactInfo.phone"
            description={contactInfo.phone}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.contactInfo.extension"
            description={contactInfo.extension}
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.contactIntro']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
