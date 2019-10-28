import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { FileUpload } from '../'

describe('<Checkbox />', () => {
  afterEach(cleanup)

  it('renders', () => {
    const onChange = jest.fn()
    const { getAllByText } = render(
      <form>
        <ThemeProvider theme={theme}>
          <FileUpload onChange={onChange}>foo</FileUpload>
        </ThemeProvider>
      </form>,
    )
    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('uses styling props correctly', () => {
    const onChange = jest.fn()
    const { getByText } = render(
      <form>
        <ThemeProvider theme={theme}>
          <FileUpload onChange={onChange} fontSize="34pt">
            foo
          </FileUpload>
        </ThemeProvider>
      </form>,
    )
    const test = getByText(/foo/)
    expect(test).toHaveStyle('font-size: 34pt;')
  })

  test('chooses a file', async () => {
    const onChange = jest.fn()
    const file = new File(['test'], 'testfile')
    const { getByLabelText } = render(
      <form>
        <ThemeProvider theme={theme}>
          <FileUpload onChange={onChange}>Upload File</FileUpload>
        </ThemeProvider>
      </form>,
    )
    const formElement = getByLabelText('Upload File')
    Object.defineProperty(formElement, 'files', { value: [file] })
    fireEvent.change(formElement)
    expect(onChange).toBeCalled()
  })
})
