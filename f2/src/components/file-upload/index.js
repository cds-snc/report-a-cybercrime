/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'
import { Label } from '../label'
import { VisuallyHidden } from '@chakra-ui/core'

export const FileUpload = ({ onChange, accept, ...props }) => {
  return (
    <React.Fragment>
      <VisuallyHidden
        as="input"
        type="file"
        id="uploader"
        name="uploader"
        accept=".png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .txt, .rtf"
        max-upload={3}
        onChange={onChange}
      />
      <Label htmlFor="uploader" {...props}>
        {props.children}
      </Label>
    </React.Fragment>
  )
}

FileUpload.defaultProps = {
  accept: undefined,
}

FileUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
}
