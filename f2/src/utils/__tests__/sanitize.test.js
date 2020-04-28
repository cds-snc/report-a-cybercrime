import { sanitize } from '../sanitize'

describe('sanitize', () => {
  it('strips tags', () => {
    expect(sanitize('<h1>hi</h1>')).toEqual('hi')
    expect(sanitize('<em>hi</em>')).toEqual('hi')
  })

  it('deletes scripts', () => {
    expect(sanitize('<script>alert(1)</script>')).toEqual('')
  })

  it('leaves normal text alone', () => {
    expect(sanitize('Some text!')).toEqual('Some text!')
  })

  it('formats non-tags appropriately', () => {
    expect(sanitize('1 < 2')).toEqual('1 &lt; 2')
    expect(sanitize('1 & 2')).toEqual('1 &amp; 2')
  })
})
