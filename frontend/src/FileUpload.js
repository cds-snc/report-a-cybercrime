/** @jsx jsx */
import { Component } from 'react'
import { jsx } from '@emotion/core'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { FileUpload } from './components/file-upload'

// based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Examples

export class FileUploadPage extends Component {
  state = {
    file: undefined,
  }

  onChange = e => {
    this.setState({ file: e.target.files[0] })
  }

  render() {
    return (
      <div>
        <form margin="20px">
          <FileUpload onChange={this.onChange} accept=".jpg, .jpeg, .png">
            Upload Image
          </FileUpload>
          <P mt={4}>
            {this.state.file
              ? this.state.file.name
              : 'No files currently selected for upload'}
          </P>
          <div>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    )
  }
}
