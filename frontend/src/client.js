import { hydrate } from 'react-dom'
import { withLanguageSwitching } from './withLanguageSwitching'
import createApolloClient from './utils/createApolloClient'
import App from './App'

const client = createApolloClient({
  initialState: window.__APOLLO_STATE__,
  ssrMode: false,
  uri: '/graphql',
})

hydrate(withLanguageSwitching(App, client), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
