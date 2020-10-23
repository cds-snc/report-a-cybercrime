/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import line from '../images/line.png'

export const WhatHappenedView = (props) => {
  const lang = props.lang

  const whatHappened = {
    whatHappened: '',
    ...testdata.formData.whatHappened,
    ...props.data.formData.whatHappened,
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>
        {lang['confirmationPage.whatHappened.title']}
      </Text>
      {containsData(whatHappened) ? (
        <View>
          <Text style={pdfStyles.sectionContent}>
            {whatHappened.whatHappened}
          </Text>
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>
          {lang['confirmationPage.whatHappened.nag']}
        </Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
