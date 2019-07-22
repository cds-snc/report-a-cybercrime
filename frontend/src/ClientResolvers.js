import gql from 'graphql-tag'

export const language = (_, _args, { cache }) => {
  return cache.readQuery({
    query: gql`
      {
        language @client
      }
    `,
  })
}
