/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import line from '../images/line.png'

export const BusinessInfoView = (props) => {
  const lang = props.lang

  const businessInfo = {
    ...testdata.formData.businessInfo,
    ...props.data.formData.businessInfo,
  }

  const origNumberofEmployeeString = businessInfo.numberOfEmployee.replace(
    'numberOfEmployee.',
    '',
  )

  let numberofEmployeeString = origNumberofEmployeeString

  let languageAdjustedNumberofEmployeeString = {
    '1To99': lang['analystReport.numberOfEmployee.1To99'],
    '100To499': lang['analystReport.numberOfEmployee.100To499'],
    '500More': lang['analystReport.numberOfEmployee.500More'],
  }

  for (var key_ne in languageAdjustedNumberofEmployeeString) {
    if (numberofEmployeeString.includes(key_ne)) {
      numberofEmployeeString = numberofEmployeeString.replace(
        key_ne,
        languageAdjustedNumberofEmployeeString[key_ne],
      )
    }
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.businessInfo.title']}
      </Text>
      {containsData(businessInfo) ? (
        <View>
          <DescriptionItemView
            title="confirmationPage.businessInfo.nameOfBusiness"
            description={businessInfo.nameOfBusiness}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.businessInfo.industry"
            description={businessInfo.industry}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.businessInfo.role"
            description={businessInfo.role}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.businessInfo.numberOfEmployee"
            description={numberofEmployeeString}
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.businessInfo.nag']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
