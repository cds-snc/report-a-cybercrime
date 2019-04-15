const { Email } = require('../types/Email')
const { Kind } = require('graphql/language')
const { GraphQLError } = require('graphql/error')

describe('Email', () => {
  describe('valid inputs', () => {
    it('Serializes valid inputs', () => {
      expect(Email.serialize('anemail@email.com')).toBe('anemail@email.com')
    })

    it('Parses valid inputs by value', () => {
      expect(Email.parseValue('anemail@email.co.uk')).toBe(
        'anemail@email.co.uk',
      )
    })

    it('Parses valid inputs by literal', () => {
      expect(
        Email.parseLiteral({
          value: 'anemail1234@gmail.com',
          kind: Kind.STRING,
        }),
      ).toBe('anemail1234@gmail.com')
    })
  })

  describe('invalid inputs', () => {
    describe('input is not an email address', () => {
      const invalidEmail = 'this is not an email'

      it('rejects invalid emails in serialize()', () => {
        expect(() => Email.serialize(invalidEmail)).toThrow(TypeError)
      })

      it('rejects invalid emails in parseValue()', () => {
        expect(() => Email.parseValue(invalidEmail)).toThrow(TypeError)
      })

      it('rejects invalid emails in parseLiteral()', () => {
        expect(() =>
          Email.parseLiteral({
            value: invalidEmail,
            kind: Kind.STRING,
          }),
        ).toThrow(TypeError)
      })
    })

    describe('input is not a string', () => {
      const notAString = 1234

      it('rejects non string inputs in serialize()', () => {
        expect(() => Email.serialize(notAString)).toThrow(TypeError)
      })

      it('rejects non string inputs in parseValue()', () => {
        expect(() => Email.parseValue(notAString)).toThrow(TypeError)
      })

      it('rejects non string inputs in parseLiteral()', () => {
        expect(() =>
          Email.parseLiteral({
            value: notAString,
            kind: Kind.INT,
          }),
        ).toThrow(GraphQLError)
      })
    })

    describe('input is missing @ symbol', () => {
      const missingAtSymbol = 'iamanemailgmail.com'

      it('rejects emails that are missing an @ symbol in serialize()', () => {
        expect(() => Email.serialize(missingAtSymbol)).toThrow(TypeError)
      })

      it('rejects emails that are missing an @ symbol in parseValue()', () => {
        expect(() => Email.parseValue(missingAtSymbol)).toThrow(TypeError)
      })

      it('rejects emails that are missing an @ symbol in parseLiteral()', () => {
        expect(() =>
          Email.parseLiteral({
            value: missingAtSymbol,
            kind: Kind.STRING,
          }),
        ).toThrow(TypeError)
      })
    })

    describe('input is missing domain extension', () => {
      const missingDomainExt = 'iamanemail@gmailcom'

      it('rejects emails that are missing a domain extension in serialize()', () => {
        expect(() => Email.serialize(missingDomainExt)).toThrow(TypeError)
      })

      it('rejects emails that are missing a domain extension in parseValue()', () => {
        expect(() => Email.parseValue(missingDomainExt)).toThrow(TypeError)
      })

      it('rejects emails that are missing a domain extension in parseLiteral()', () => {
        expect(() =>
          Email.parseLiteral({
            value: missingDomainExt,
            kind: Kind.STRING,
          }),
        ).toThrow(TypeError)
      })
    })
  })
})
