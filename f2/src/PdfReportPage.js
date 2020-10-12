import React from 'react'
import { BlobProvider } from '@react-pdf/renderer'
import { PdfDocument } from './pdf/PdfDocument'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { A } from './components/formik/link'
import { useStateValue } from './utils/state'

export const PdfReportPage = (props) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()

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
      <BlobProvider document={<PdfDocument data={data} locale={i18n.locale} />}>
        {({ blob, url, loading, error }) => {
          return (
            <A href={url} target="_blank">
              <Trans id="pdf.getPdfReport" />
            </A>
          )
        }}
      </BlobProvider>
    </React.Fragment>
  )
}
