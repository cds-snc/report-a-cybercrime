/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { formatList } from '../utils/formatList'
import { DescriptionItemView } from './DescriptionItemView'
import line from '../images/line.png'

export const HowDidItStartView = (props) => {
  const lang = props.lang

  const summary = []
  let overviewLine = ' '

  const howdiditstart = {
    ...testdata.formData.howdiditstart,
    ...props.data.formData.howdiditstart,
  }

  if (howdiditstart.howDidTheyReachYou.length > 0) {
    howdiditstart.howDidTheyReachYou.map((key) =>
      summary.push(
        key === 'howDidTheyReachYou.others' && howdiditstart.others !== ''
          ? howdiditstart.others
          : lang[key].toLowerCase(),
      ),
    )

    overviewLine =
      lang['confirmationPage.howDidItStart.overviewPrefix'] +
      formatList(summary, {
        pair: lang['default.pair'],
        middle: lang['default.middle'],
        end: lang['default.end'],
      })
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.howDidItStart.title']}
      </Text>
      {containsData(howdiditstart) ? (
        <View>
          <Text style={pdfStyles.sectionContent}>{overviewLine}</Text>
          <DescriptionItemView
            title="confirmationPage.howDidItStart.email"
            description={howdiditstart.email}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.howDidItStart.phone"
            description={howdiditstart.phone}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.howDidItStart.online"
            description={howdiditstart.online}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.howDidItStart.application"
            description={howdiditstart.application}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.howDidItStart.others"
            description={howdiditstart.others}
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.howDidItStart.nag']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
