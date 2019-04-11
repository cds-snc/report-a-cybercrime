/** @jsx jsx */
import { Component } from 'react'
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Button } from './components/button'
import { Label } from './components/label'
import { P } from './components/paragraph'

// based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Examples

const buttonStyle = css`
  input:focus {
    outline: 5px solid red;
  }
`

export class FileUpload extends Component {
  state = {
    file: undefined,
  }

  onChange = e => {
    this.setState({ file: e.target.files[0] })
  }

  render() {
    return (
      <form>
        <div>
          <Label
            colors="button"
            css={buttonStyle}
            padding={1}
            htmlFor="image_uploads"
          >
            <Trans>Choose image to upload (PNG, JPG)</Trans>
          </Label>
          <input
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            onChange={this.onChange}
            css={css`
              opacity: 0;
            `}
          />
        </div>
        <P mt={4}>
          {this.state.file ? (
            this.state.file.name
          ) : (
            <Trans>{'No files currently selected for upload'}</Trans>
          )}
        </P>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    )
  }
}
