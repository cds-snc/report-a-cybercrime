/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import { useStateValue } from '../../utils/state'
import { Redirect } from 'react-router-dom'

export const RedirectRoute = ({ children, ...rest }) => {
  let consented = true
  const [state] = useStateValue()
  if (state.formData.consent.consentOptions.length === 0) {
    consented = false
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        consented ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/privacyconsent',
            }}
          />
        )
      }
    />
  )
}
