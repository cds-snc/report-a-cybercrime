/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import line from '../images/line.png'

export const LocationInfoView = (props) => {
  const lang = props.lang

  const location = {
    ...testdata.formData.location,
    ...props.data.formData.location,
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.location.title']}
      </Text>
      {containsData(location) ? (
        <View>
          <DescriptionItemView
            title="confirmationPage.location.city"
            description={location.city}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.location.province"
            description={location.province}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.location.postalCode"
            description={location.postalCode}
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.location.nag']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
