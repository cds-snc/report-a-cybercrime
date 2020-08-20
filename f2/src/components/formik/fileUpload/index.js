import React from 'react'
import { FormFile, Row } from 'react-bootstrap'
import { UploadButton } from '../button'
import { acceptableExtensions } from '../../../utils/acceptableFiles'

export const FileUpload = ({ field, form, onChange, ...props }) => {
  return (
    <Row className="form-row">
      <div className="upload-container">
        <FormFile id={props.id} custom>
          <FormFile.Input accept={acceptableExtensions} onChange={onChange} />
          <FormFile.Label />
        </FormFile>
        <UploadButton label={props.label} />
      </div>
    </Row>
  )
}
