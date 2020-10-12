import React from 'react'
import { PdfDocument } from './pdf/PdfDocument'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { useStateValue } from './utils/state'
import { PDFViewer } from '@react-pdf/renderer'

export const PdfReportPage = () => {
  const [data] = useStateValue()
  const { i18n } = useLingui()

  console.log('PdfReportPage-------------------------')
  console.log(data)

  return (
    <React.Fragment>
      {false ? ( // the following trans tags are for analyst email
        <div>
          <Trans id="pdf.betaText" />
          <Trans id="pdf.getPdfReport" />
          <Trans id="pdf.next.title" />
          <Trans id="pdf.next.content" />
          <Trans id="pdf.referenceNumber" />
          <Trans id="pdf.thankyou" />
          <Trans id="pdf.websites.title" />
        </div>
      ) : null}
      <PDFViewer style={{ minHeight: '99vh' }} width="100%">
        <PdfDocument data={data} locale={i18n.locale} />
      </PDFViewer>
    </React.Fragment>
  )
}
