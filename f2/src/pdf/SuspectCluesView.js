/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import line from '../images/line.png'

export const SuspectCluesView = (props) => {
  const lang = props.lang

  const suspectClues = {
    ...testdata.formData.suspectClues,
    ...props.data.formData.suspectClues,
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.suspectClues.title']}
      </Text>
      {containsData(suspectClues) ? (
        <View>
          <DescriptionItemView
            title="confirmationPage.suspectClues.suspectClues1"
            description={suspectClues.suspectClues1}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.suspectClues.suspectClues2"
            description={suspectClues.suspectClues2}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.suspectClues.suspectClues3"
            description={suspectClues.suspectClues3}
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.suspectClues.nag']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
