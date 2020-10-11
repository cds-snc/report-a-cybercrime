import React from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import { PdfDocument } from './pdf/PdfDocument';
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { A } from './components/formik/link'
import { useStateValue } from './utils/state'


export const PdfReportPage = (props) => {

  const [data] = useStateValue()
  const { i18n } = useLingui()
  

  console.log("PdfReportPage-------------------------")
  console.log(data)

  let displayProp = props.enabled? 'block':'none'
  return  (
    <BlobProvider document={<PdfDocument referenceNumber={props.referenceNumber} data={data} locale={i18n.locale} />}>
      {({ blob, url, loading, error }) => {
        return (          
          <A
            href={url}
            target = "_blank"
            style={{display:displayProp}}
          >             
            <Trans id="Get your PDF report here" /> 
          </A>
        )
      }}
    </BlobProvider>	
  )
}