/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import line from '../images/line.png'

export const WhoAreYouReportForView = (props) => {
  const data = props.data
  const lang = props.lang
  console.log('WhoAreYouReportForView data----------------------------')
  console.log(data.formData)

  console.log('Lang is ')
  console.log(lang)

  const whoAreYouReportFor = {
    ...testdata.formData.whoAreYouReportFor,
    ...data.formData.whoAreYouReportFor,
  }

  let whoYouReportForString

  console.log(data.formData.language)
  if (
    whoAreYouReportFor.whoYouReportFor ===
    'whoAreYouReportForPage.options.myself'
  ) {
    whoYouReportForString = lang['whoAreYouReportForPage.options.myself']
  } else if (
    whoAreYouReportFor.whoYouReportFor ===
    'whoAreYouReportForPage.options.someone'
  ) {
    whoYouReportForString = lang['whoAreYouReportForPage.options.someone']
  } else {
    whoYouReportForString = lang['whoAreYouReportForPage.options.business']
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['whoAreYouReportForPage.title']}
      </Text>
      {containsData(whoAreYouReportFor) ? (
        <View>
          <Text style={pdfStyles.sectionContent}>
            {lang['confirmationPage.youAreReportingFor']}
            &nbsp;
            {whoYouReportForString}
          </Text>
          <DescriptionItemView
            title="whoAreYouReportForPage.details"
            description={whoAreYouReportFor.someoneDescription}
            lang={lang}
          />
          <DescriptionItemView
            title="whoAreYouReportForPage.details"
            description={whoAreYouReportFor.businessDescription}
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.whoAreYouReportFor.nag']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
