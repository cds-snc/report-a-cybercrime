/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Label } from '../label'
import { VisuallyHidden } from '@chakra-ui/core'
import { Button } from '../button'

export const FileUpload = ({ onChange, accept, ...props }) => {
  return (
    <Button
      {...props}
      as="div"
      _focusWithin={{
        boxShadow: 'outline',
      }}
    >
      <VisuallyHidden
        as="input"
        type="file"
        id="uploader"
        name="uploader"
        accept=".png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .txt, .rtf"
        max-upload={3}
        onChange={onChange}
      />
      <Label htmlFor="uploader">{props.children}</Label>
    </Button>
  )
}

FileUpload.defaultProps = {
  accept: undefined,
}

FileUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
}
