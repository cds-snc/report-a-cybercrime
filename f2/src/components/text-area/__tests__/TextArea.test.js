import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { TextArea } from '../'
import canada from '../../../theme/canada'
import { cleanup } from '@testing-library/react'
import { mount } from 'enzyme'

describe('<TextArea />', () => {
  afterEach(cleanup)

  it('properly renders as a textarea tag', () => {
    let wrapper = mount(
      <ThemeProvider theme={canada} >
        <form>
          <label>
            Test
          <TextArea />
          </label>
        </form>
      </ThemeProvider>,
    ).find('textarea')
    expect(wrapper.is('textarea')).toBeTruthy()
  })

})
