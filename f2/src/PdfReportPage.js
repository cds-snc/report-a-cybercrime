import React from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import PdfDocument from './pdf/PdfDocument';
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { A } from './components/formik/link'
import { useStateValue } from './utils/state'

const fs = require('fs')

export const PdfReportPage = (props) => {

  const [data] = useStateValue()
  const { i18n } = useLingui()

  
  let lang
  if(i18n.locale === 'fr') {
    lang = fs.readFileSync('src/locales/fr.json')
  }
  else {
    lang = fs.readFileSync('src/locales/en.json')
  }
  console.log(lang)
  console.log("PdfReportPage-------------------------")
  console.log(data)

  let displayProp = props.enabled? 'block':'block'
  return  (
    <BlobProvider document={<PdfDocument data={data} i18n={i18n.locale} />}>
      {({ blob, url, loading, error }) => {
        return (          
          <A
            href={url}
            target = "_blank"
            style={{display:displayProp}}
          > 
            <Trans id="Get your PDF report here" />{i18n._("whoAreYouReportForPage.options.myself")}
          </A>
        )
      }}
    </BlobProvider>	
  )
}