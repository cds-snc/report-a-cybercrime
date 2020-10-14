import React from 'react'
import styled from '@emotion/styled'
import { FormFile } from 'react-bootstrap'
import { UploadButton } from '../button'
import { acceptableExtensions } from '../../../utils/acceptableFiles'
import { FormRow } from '../row'

const FileInput = styled(FormFile)`
  display: none;
`

export const FileUpload = ({ field, form, onChange, ...props }) => {
  const selectFileInput = () => {
    document.getElementById(props.id).click()
  }

  return (
    <FormRow>
      <FileInput id={props.id} custom>
        <FormFile.Input accept={acceptableExtensions} onChange={onChange} />
        <FormFile.Label />
      </FileInput>
      <UploadButton label={props.label} onClick={selectFileInput} />
    </FormRow>
  )
}
