import gql from 'graphql-tag'

export const language = (_, args, { cache }) => {
  return cache.readQuery({
    query: gql`
      {
        language @client
      }
    `,
  })
}
