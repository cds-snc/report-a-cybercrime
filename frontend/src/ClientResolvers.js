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

export const switchLanguage = (_, args, { cache }) => {
  let query = gql`
    {
      language @client
    }
  `
  let current = cache.readQuery({ query })
  const data = {
    language: current.language === 'en' ? 'fr' : 'en',
  }
  cache.writeQuery({ data, query })
  return null
}
