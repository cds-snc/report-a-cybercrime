import { getDataFromTree } from 'react-apollo'
import express from 'express'
import requestLanguage from 'express-request-language'
import { renderToString } from 'react-dom/server'
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
  .get('/*', (req, res) => {
    const client = createApolloClient({
      initialState: { language: req.language },
      ssrMode: true,
    })

    getDataFromTree(withLanguageSwitching(App, client)).then(() => {
      const markup = renderToString(withLanguageSwitching(App, client))

      res.status(200).send(`
        <!doctype html>
        <html lang="${req.language}">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>🙅🖥️😈</title>
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

            <script>
              window.__APOLLO_STATE__=${JSON.stringify({
                language: req.language,
              })}
            </script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `)
    })
  })

export default server
