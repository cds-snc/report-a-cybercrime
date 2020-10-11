/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import { formatDate } from '../utils/formatDate'
import line from '../images/line.png'

export const WhenDidItHappenView = (props) => {
  const lang = props.lang

  const whenDidItHappen = {
    ...testdata.formData.whenDidItHappen,
    ...props.data.formData.whenDidItHappen,
  }

  let freqString

  if (whenDidItHappen.incidentFrequency === 'once') {
    freqString = lang["whenDidItHappenPage.options.once"]
  } else if (whenDidItHappen.incidentFrequency === 'moreThanOnce') {
    freqString = lang["whenDidItHappenPage.options.moreThanOnce"]
  } else {
    freqString = lang["whenDidItHappenPage.options.notSure"]
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>{lang["whenDidItHappenPage.title"]}</Text>      
      {containsData(whenDidItHappen) ? (
        <View>
          <DescriptionItemView 
            title="confirmationPage.howManyTimes" 
            description={freqString} 
            lang={lang}
          />  
          <DescriptionItemView 
            title="whenDidItHappenPage.singleDate.label" 
            description={formatDate(
              whenDidItHappen.happenedOnceDay,
              whenDidItHappen.happenedOnceMonth,
              whenDidItHappen.happenedOnceYear,
            )} 
            lang={lang}
          /> 
          <DescriptionItemView 
            title="whenDidItHappenPage.dateRange.start.label" 
            description={formatDate(
              whenDidItHappen.startDay,
              whenDidItHappen.startMonth,
              whenDidItHappen.startYear,
            )}
            lang={lang}
          />
          <DescriptionItemView 
            title="whenDidItHappenPage.dateRange.end.label" 
            description={formatDate(
              whenDidItHappen.endDay,
              whenDidItHappen.endMonth,
              whenDidItHappen.endYear,
            )}
            lang={lang}
          /> 
          {containsData(whenDidItHappen.description) ? (
            <Text style={pdfStyles.sectionContent}>{whenDidItHappen.description}</Text>
          ) : null}
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>{lang["confirmationPage.howDidItStart.nag"]}</Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
