/* global describe, expect */

const { Kind } = require('graphql/language')
const { URL } = require('../types/URL')

/*
 * this file taken and modified from https://github.com/okgrow/graphql-scalars
 * these test cases are picked up from https://mathiasbynens.be/demo/url-regex
 */

const SHOULD_MATCH = [
  'http://foo.com/blah_blah',
  'http://foo.com/blah_blah/',
  'http://foo.com/blah_blah_(wikipedia)',
  'http://foo.com/blah_blah_(wikipedia)_(again)',
  'http://www.example.com/wpstyle/?p=364',
  'https://www.example.com/foo/?bar=baz&inga=42&quux',
  'http://✪df.ws/123',
  'http://userid:password@example.com:8080',
  'http://userid:password@example.com:8080/',
  'http://userid@example.com',
  'http://userid@example.com/',
  'http://userid@example.com:8080',
  'http://userid@example.com:8080/',
  'http://userid:password@example.com',
  'http://userid:password@example.com/',
  'http://142.42.1.1/',
  'http://142.42.1.1:8080/',
  'http://➡.ws/䨹',
  'http://⌘.ws',
  'http://⌘.ws/',
  'http://foo.com/blah_(wikipedia)#cite-1',
  'http://foo.com/blah_(wikipedia)_blah#cite-1',
  'http://foo.com/unicode_(✪)_in_parens',
  'http://foo.com/(something)?after=parens',
  'http://☺.damowmow.com/',
  'http://code.google.com/events/#&product=browser',
  'http://j.mp',
  'ftp://foo.bar/baz',
  'http://foo.bar/?q=Test%20URL-encoded%20stuff',
  'http://例子.测试',
  'http://उदाहरण.परीक्षा',
  'http://1337.net',
  'http://a.b-c.de',
  'http://223.255.255.254',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://127.0.0.1/',
  'http://127.0.0.1:8080/',
  'tcp://localhost:8529',
  'ssl://localhost:8529',
  'tcp://unix:/tmp/arangodb.sock',
  'ssl://unix:/tmp/arangodb.sock',
  'mongodb://localhost:27017/foodb',
]

const SHOULD_NOT_MATCH = [
  'http://',
  'http://.',
  'http://..',
  'http://../',
  'http://?',
  'http://??',
  'http://??/',
  'http://#',
  'http://##',
  'http://##/',
  'http://foo.bar?q=Spaces should be encoded',
  '//',
  '//a',
  '///a',
  '///',
  'http:///a',
  'foo.com',
  'rdar://1234',
  'h://test',
  'http:// shouldfail.com',
  'http://foo.bar/foo(bar)baz quux',
  'http://3628126748',
  'http://.www.foo.bar/',
  'http://.www.foo.bar./',
]

describe('URL', () => {
  describe('valid', () => {
    // eslint-disable-next-line
    SHOULD_MATCH.forEach(url => {
      it(`serialize ${url}`, () => {
        expect(URL.serialize(url)).toBe(url)
      })
      it(`parseValue ${url}`, () => {
        expect(URL.parseValue(url)).toBe(url)
      })
      it(`parseLiteral ${url}`, () => {
        expect(URL.parseLiteral({ value: url, kind: Kind.STRING })).toBe(url)
      })
    })
  })

  describe('valid - localhost', () => {
    it('serialize', () => {
      expect(URL.serialize('http://localhost')).toBe('http://localhost')
    })

    it('parseValue', () => {
      expect(URL.parseValue('http://localhost')).toBe('http://localhost')
    })

    it('parseLiteral', () => {
      expect(
        URL.parseLiteral({ value: 'http://localhost', kind: Kind.STRING }),
      ).toBe('http://localhost')
    })
  })

  describe('valid - localhost with port', () => {
    it('serialize', () => {
      expect(URL.serialize('http://localhost:3000')).toBe(
        'http://localhost:3000',
      )
    })

    it('parseValue', () => {
      expect(URL.parseValue('http://localhost:3000')).toBe(
        'http://localhost:3000',
      )
    })

    it('parseLiteral', () => {
      expect(
        URL.parseLiteral({ value: 'http://localhost:3000', kind: Kind.STRING }),
      ).toBe('http://localhost:3000')
    })
  })

  describe('invalid', () => {
    describe('not a URL', () => {
      // eslint-disable-next-line
      SHOULD_NOT_MATCH.forEach(url => {
        it(`serialize ${url}`, () => {
          expect(() => URL.serialize(url)).toThrow(/Value is not a valid URL/)
        })

        it(`parseValue ${url}`, () => {
          expect(() => URL.parseValue(url)).toThrow(/Value is not a valid URL/)
        })

        it(`parseLiteral ${url}`, () => {
          expect(() =>
            URL.parseLiteral({ value: url, kind: Kind.STRING }),
          ).toThrow(/Value is not a valid URL/)
        })
      })
    })

    describe('not a string', () => {
      it('serialize', () => {
        expect(() => URL.serialize(123)).toThrow(/Value is not a string/)
      })

      it('parseValue', () => {
        expect(() => URL.parseValue(123)).toThrow(/Value is not a string/)
      })

      it('parseLiteral', () => {
        expect(() => URL.parseLiteral({ value: 123, kind: Kind.INT })).toThrow(
          /Can only validate strings as URLs/,
        )
      })
    })
  })
})
