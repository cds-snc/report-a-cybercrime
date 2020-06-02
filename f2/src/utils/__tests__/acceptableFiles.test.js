import { fileExtensionPasses, fileSizePasses } from '../acceptableFiles'

describe('fileExtensionPasses', () => {
  it('passes if extension allowed', () => {
    expect(fileExtensionPasses('file.jpg')).toEqual(true)
    expect(fileExtensionPasses('anotherfile.test.txt')).toEqual(true)
  })

  it('fails if extension not allowed', () => {
    expect(fileExtensionPasses('file.nope')).toEqual(false)
    expect(fileExtensionPasses('anotherfile')).toEqual(false)
  })
})

describe('fileSizePasses', () => {
  it('passes if file size small', () => {
    expect(fileSizePasses(10)).toEqual(true)
  })
  
  it('fails if file size zero', () => {
    expect(fileSizePasses(0)).toEqual(false)
  })
  
  it('fails if file size too big', () => {
    expect(fileSizePasses(5 * 1024 * 1024)).toEqual(false)
  })
})
