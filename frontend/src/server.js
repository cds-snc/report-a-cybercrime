import React from 'react'
import { getDataFromTree } from 'react-apollo'
import express from 'express'
import requestLanguage from 'express-request-language'
import { renderToString } from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { renderStylesToString } from 'emotion-server'
import { withLanguageSwitching } from './withLanguageSwitching'
import createApolloClient from './utils/createApolloClient'
import App from './App'

let assets, publicDir

if (process.env.NODE_ENV == 'test') {
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
  .get('/monitoring/alive', (req, res) => {
    res.status(200).send('yes')
  })
  .get('/monitoring/ready', (req, res) => {
    res.status(200).send('yes')
  })

  .get('/*', (req, res) => {
    const client = createApolloClient({
      initialState: { language: req.language },
      ssrMode: true,
      uri: 'http://api/graphql',
    })

    getDataFromTree(withLanguageSwitching(App, client)).then(() => {
      const markup = renderStylesToString(
        renderToString(
          <ServerLocation url={req.url}>
            {withLanguageSwitching(App, client)}
          </ServerLocation>,
        ),
      )

      res.status(200).send(`
        <!doctype html>
        <html lang="${req.language}">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${
              req.language.indexOf('en') > -1
                ? 'Tell us your cybercrime story'
                : 'Racontez-nous votre histoire de cybercriminalité'
            }</title>
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
            }
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${
                    assets.client.js
                  }" defer crossorigin></script>`
            }

            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />
            <script>
              window.__APOLLO_STATE__=${JSON.stringify({
                language: req.language,
              })}
            </script>
          </head>
          <body>
            <div id="root">${markup}</div>
             <script>
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('service-worker.js')
                    .then(swReg => {
                      console.log('Service Worker is registered', swReg);
                    })
                    .catch(err => {
                      console.error('Service Worker Error', err);
                    });
                  });
                }
             </script>            
          </body>
        </html>
      `)
    })
  })

export default server
