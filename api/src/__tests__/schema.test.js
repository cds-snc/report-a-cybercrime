const { schema } = require('../schema')

describe('GraphQL Query Schema', () => {
  it('Has a stats field', () => {
    let Query = schema.getType('Query')
    expect(Query.getFields()).toHaveProperty('stats')
  })
})
