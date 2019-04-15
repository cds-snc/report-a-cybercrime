/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { fontSize, fontWeight, lineHeight, space, color } from 'styled-system'
import { Trans } from '@lingui/macro'
import { Label } from '../label'
import { Input } from '../input'

export const FileUpload = ({ label, onChange, accept, ...props }) => {
  return (
    <React.Fragment>
      <Label colors="button" padding={1} htmlFor="uploader" {...props}>
        <Trans>{label}</Trans>
      </Label>
      <Input
        type="file"
        id="uploader"
        name="uploader"
        accept={accept}
        onChange={onChange}
        css={css`
          opacity: 0;
        `}
      />
    </React.Fragment>
  )
}

FileUpload.defaultProps = {
  accept: undefined,
  fontWeight: '400',
  fontSize: [2, null, 3],
  lineHeight: [2, null, 3],
}

FileUpload.propTypes = {
  label: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
}
