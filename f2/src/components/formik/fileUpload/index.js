import React from 'react'
import styled from '@emotion/styled'
import { FormFile } from 'react-bootstrap'
import { UploadButton } from '../button'
import { acceptableExtensions } from '../../../utils/acceptableFiles'
import { FormRow } from '../row'

const FileInput = styled(FormFile.Input)`
  display: none;
`

export const FileUpload = ({ field, form, onChange, ...props }) => {
  const selectFileInput = () => {
    document.getElementById(props.id).click()
  }

  return (
    <FormRow>
      <FormFile id={props.id} custom>
        <FileInput accept={acceptableExtensions} onChange={onChange} />
        <FormFile.Label />
      </FormFile>
      <UploadButton label={props.label} onClick={selectFileInput} />
    </FormRow>
  )
}
