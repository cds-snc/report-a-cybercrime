const { schema } = require('../schema')

describe('GraphQL Schema', () => {
  it('Has a hello field whose name is hello', () => {
    let Query = schema.getType('Query')
    let {
      hello: { name },
    } = Query.getFields()
    expect(name).toEqual('hello')
  })
})
