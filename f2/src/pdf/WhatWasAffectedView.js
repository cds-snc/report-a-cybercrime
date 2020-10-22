/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { formatList } from '../utils/formatList'
import line from '../images/line.png'

export const WhatWasAffectedView = (props) => {
  const lang = props.lang

  const impact = {
    affectedOptions: [],
    ...testdata.formData.whatWasAffected,
    ...props.data.formData.whatWasAffected,
  }

  const summaryOptions = impact.affectedOptions.map((key) =>
    lang[key].toLowerCase(),
  )
  const summaryLine = formatList(summaryOptions, {
    pair: lang['default.pair'],
    middle: lang['default.middle'],
    end: lang['default.end'],
  })

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.ImpactTitle']}
      </Text>
      {containsData(impact) ? (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.whatWasAffected.format']}
          &nbsp;
          {summaryLine}
        </Text>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.contactIntro']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
