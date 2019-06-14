import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { ApolloProvider } from 'react-apollo'
import { testClient } from '../utils/createTestClient'
import { FileUploadPage } from '../FileUpload'

describe('FileUploadPage/>', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ApolloProvider client={testClient({ language: 'en' })}>
        <FileUploadPage />
      </ApolloProvider>,
    )
  })
})
