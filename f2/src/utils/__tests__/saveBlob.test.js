import { saveBlob } from '../saveBlob'

describe('saveBlob', () => {
  it('logs an error if no blob storage keys, but does not crash', () => {
    console.warn = jest.fn()
    saveBlob([], {})
    expect(console.warn).toHaveBeenCalled()
  })
})
