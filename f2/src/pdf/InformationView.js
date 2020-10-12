/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import { formatList } from '../utils/formatList'
import line from '../images/line.png'

export const InformationView = (props) => {
  const lang = props.lang

  const personalInformation = {
    ...testdata.formData.personalInformation,
    ...props.data.formData.personalInformation,
  }

  //push all select entities into the stack and if 'other' is selected, push the value of other.
  const infoReqSummary = personalInformation.typeOfInfoReq.map((key) =>
    key === 'typeOfInfoReq.other' && personalInformation.infoReqOther !== ''
      ? personalInformation.infoReqOther
      : lang[key],
  )
  const infoReqLine = formatList(infoReqSummary, {
    pair: lang['default.pair'],
    middle: lang['default.middle'],
    end: lang['default.end'],
  })

  //push all select entities into the stack and if 'other' is selected, push the value of other.
  const infoObtainedSummary = personalInformation.typeOfInfoObtained.map(
    (key) =>
      key === 'typeOfInfoObtained.other' &&
      personalInformation.infoObtainedOther !== ''
        ? personalInformation.infoObtainedOther
        : lang[key],
  )
  const infoObtainedLine = formatList(infoObtainedSummary, {
    pair: lang['default.pair'],
    middle: lang['default.middle'],
    end: lang['default.end'],
  })

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.contactTitle']}
      </Text>
      {containsData(personalInformation) ? (
        <View>
          <DescriptionItemView
            title="confirmationPage.personalInformation.typeOfInfoReq"
            description={infoReqLine}
            lang={lang}
          />
          <DescriptionItemView
            title="confirmationPage.personalInformation.typeOfInfoObtained"
            description={infoObtainedLine}
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.personalInformation.nag']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
