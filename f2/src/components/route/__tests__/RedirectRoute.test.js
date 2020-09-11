import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { Router, Route } from 'react-router-dom'
import { StateProvider, initialState, reducer } from '../../../utils/state'
import {RedirectRoute} from '../'
import { createMemoryHistory } from 'history'

describe('<RedirectRoute />', () => {
  afterEach(cleanup)

  it('Renders children if consented', () => {
    initialState.formData.consent.consentOptions.push('yes')
    const mhistory = createMemoryHistory()
    mhistory.push('/howdiditstart')

    const { getAllByText } = render(
      <Router history={mhistory}>
        <ThemeProvider theme={canada}>
        <StateProvider initialState={initialState} reducer={reducer}>
            <RedirectRoute path="/howdiditstart">
                ABC
            </RedirectRoute>
        </StateProvider>    
        </ThemeProvider>
      </Router>,
    )

    expect(getAllByText(/ABC/)).toHaveLength(1)    
  })

  it('Renders to / if not consented', () => {
    initialState.formData.consent.consentOptions.pop()
    const mhistory = createMemoryHistory()
    mhistory.push('/howdiditstart')

    const { getAllByText } = render(
      <Router history={mhistory}>
        <ThemeProvider theme={canada}>
        <StateProvider initialState={initialState} reducer={reducer}>
            <RedirectRoute path="/howdiditstart">
                ABC
            </RedirectRoute>
            <Route exact path="/">
                DEF
            </Route>            
        </StateProvider>    
        </ThemeProvider>
      </Router>,
    )

    expect(getAllByText(/DEF/)).toHaveLength(1)    
  })  
})

