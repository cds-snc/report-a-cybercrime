/** @jsx jsx */
import { Component } from 'react'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { FileUpload } from './components/file-upload'
import { finalFormAdapter } from './utils/finalFormAdapter'

const FileUploadAdapter = finalFormAdapter(FileUpload)

export class FileUploadPage extends Component {
  state = {
    file: undefined,
  }

  onChange = e => {
    this.setState({ file: e.target.files[0] })
  }

  submit = () => {
    console.log('submitted:', this.state.file)
  }

  validate = () => {}

  render() {
    return (
      <Form
        margin="20px"
        onSubmit={this.submit}
        validate={this.validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              component={FileUploadAdapter}
              onChange={this.onChange}
              accept=".jpg, .jpeg, .png"
            >
              Upload Image
            </Field>

            <P mt={4}>
              {this.state.file
                ? this.state.file.name
                : 'No files currently selected for upload'}
            </P>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        )}
      />
    )
  }
}
