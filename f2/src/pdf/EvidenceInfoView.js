/** @jsx jsx */
import { jsx } from '@emotion/core'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import line from '../images/line.png'

export const EvidenceInfoView = (props) => {
  const lang = props.lang

  const evidence = {
    files: [],
    fileDescriptions: [],
    ...testdata.formData.evidence,
    ...props.data.formData.evidence,
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>{lang["confirmationPage.evidence.title"]}</Text>      
      {evidence.files && evidence.files.length > 0 ? (
        <View>
            {evidence.files ? (
              <View>
                {evidence.files.map((file, index) => (
                  <View>
                    <Text style={pdfStyles.sectionContent}>
                      {index + 1}.
                      &nbsp;
                      <Text style={pdfStyles.descriptionContentTitle}>{file.name}</Text>
                    </Text>
                    <Text style={{ fontSize: 12, marginTop: 8, marginBottom: 10, marginLeft: 28 }}>                
                      {evidence.fileDescriptions[index]}
                    </Text>
                  </View>
                ))}
            </View>
            ) : null}
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>{lang["confirmationPage.evidence.nag"]}</Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
