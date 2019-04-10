import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '../label'
import { Text } from '../text'
import { Input } from '../input'

export const FileUpload = ({
  meta,
  children,
  hint,
  acceptedFormats,
  onChange,
  ...props
}) => {
  return (
    <Label {...props}>
      <Text error={meta.error}>{children}</Text>
      {hint && (
        <Text fontSize={[1, null, 1]} color="purple">
          {hint}
        </Text>
      )}
      {meta.touched && meta.error && <Text color="red">{meta.error}</Text>}
      <Input
        type="file"
        accept={acceptedFormats}
        error={meta.error}
        onChange={onChange}
        ref={fileInput => console.log({ fileInput })}
      />
    </Label>
  )
}

FileUpload.defaultProps = {
  hint: undefined,
  meta: {},
  acceptedFormats: undefined,
}

FileUpload.propTypes = {
  /**
   * Optional hint text
   */
  hint: PropTypes.any,
  /**
   * Final form meta object, pending adjustment/removal
   */
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.any,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  acceptedFormats: PropTypes.string,
}
