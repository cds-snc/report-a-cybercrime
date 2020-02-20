import { saveBlob } from '../saveBlob'

describe('saveBlob', () => {
  it('logs an error if no blob storage keys, but does not crash', () => {
    console.error = jest.fn()
    const id = saveBlob({})
    expect(console.error).toHaveBeenCalled()
  })
})
