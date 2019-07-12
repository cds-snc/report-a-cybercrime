import React from 'react'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { LanguageSwitching } from './LanguageSwitching'
import { HelmetProvider } from 'react-helmet-async'
import express from 'express'
import requestLanguage from 'express-request-language'
import { ServerLocation } from '@reach/router'
import App from './App'

let assets, publicDir

const {
  RAZZLE_SERVER_SIDE_API_URI, // Razzle strips env vars that are not prefixed
} = process.env

if (process.env.NODE_ENV === 'test') {
  assets = { client: { css: {} } }
  publicDir = 'public'
} else {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
  publicDir = process.env.RAZZLE_PUBLIC_DIR
}

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(publicDir))
  .use(
    requestLanguage({
      languages: ['en', 'fr'],
    }),
  )
  .get('/assets', (_req, res) => {
    res.status(200).send(JSON.stringify(assets))
  })
  .get('/monitoring/alive', (_req, res) => {
    res.status(200).send('yes')
  })
  .use('/public', express.static(__dirname + '/public'))
  .use('/static', express.static('static'))
  .get('/monitoring/ready', (_req, res) => {
    res.status(200).send('yes')
  })
  .get('/*', async (req, res) => {
    const cache = new InMemoryCache()

    // Add defaults for form fields
    cache.writeData({
      data: {
        language: req.language,
        scamInfo: JSON.stringify({}),
        lostMoney: JSON.stringify({}),
        suspectInfo: JSON.stringify({}),
        files: [],
        contactInfo: JSON.stringify({}),
      },
    })

    const client = new ApolloClient({
      ssrMode: true,
      link: new HttpLink({
        uri: RAZZLE_SERVER_SIDE_API_URI,
        fetch,
      }),
      cache,
      resolvers: {},
    })

    const helmetContext = {}

    let markup
    try {
      markup = await renderToStringWithData(
        <HelmetProvider context={helmetContext}>
          <ApolloProvider client={client}>
            <ServerLocation url={req.url}>
              <LanguageSwitching>
                <App />
              </LanguageSwitching>
            </ServerLocation>
          </ApolloProvider>
        </HelmetProvider>,
      )
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Data fetching during SSR Failed:', e)
    }

    const { helmet } = helmetContext

    res
      .set({ 'Content-Language': req.language })
      .status(200)
      .send(
        `<!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}>
        <head>
          ${helmet.title.toString()} ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${
            assets.client.css
              ? `<link rel="stylesheet" href="${assets.client.css}">`
              : ''
          }
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${markup}</div>
        </body>
      </html>`,
      )
  })

export default server
