import React from 'react'
import { FormFile } from 'react-bootstrap'
import { UploadButton } from '../button'
import { acceptableExtensions } from '../../../utils/acceptableFiles'
import { FormRow } from '../row'

export const FileUpload = ({ field, form, onChange, ...props }) => {
  return (
    <FormRow>
      <div className="upload-container">
        <FormFile id={props.id} custom>
          <FormFile.Input accept={acceptableExtensions} onChange={onChange} />
          <FormFile.Label />
        </FormFile>
        <UploadButton label={props.label} />
      </div>
    </FormRow>
  )
}
