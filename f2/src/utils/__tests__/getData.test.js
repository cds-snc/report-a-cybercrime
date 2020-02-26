import { getFileExtension } from '../getData'

describe('getFileExtension', () => {
  it('finds an extension', () => {
    expect(getFileExtension('test.JPG')).toEqual('jpg')
  })

  it('is empty if there is no extension', () => {
    expect(getFileExtension('')).toEqual('')
    expect(getFileExtension('test')).toEqual('')
    expect(getFileExtension('.JPG')).toEqual('')
  })
})
