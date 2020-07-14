import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { PageNotFound } from './PageNotFound'
import { LandingPage } from './LandingPage'
import { ThankYouPage } from './ThankYouPage'
import { WhatHappenedPage } from './WhatHappenedPage'
import { ContactInfoPage } from './ContactInfoPage'
import { SuspectCluesPage } from './SuspectCluesPage'
import { HowDidItStartPage } from './HowDidItStartPage'
import { ConfirmationPage } from './ConfirmationPage'
import { MoneyLostPage } from './MoneyLostPage'
import { BusinessPage } from './BusinessPage'
import { InformationPage } from './InformationPage'
import { LocationPage } from './LocationPage'
import { DevicesPage } from './DevicesPage'
import { EvidencePage } from './EvidencePage'
import { PrivacyConsentPage } from './PrivacyConsentPage'
import { PrivacyStatementPage } from './PrivacyStatementPage'
import { WhatWasAffectedPage } from './WhatWasAffected'
import { FinalFeedbackPage } from './FinalFeedbackPage'
import { FinalFeedbackThanksPage } from './FinalFeedbackThanksPage'
import { StartPage } from './StartPage'
import { ConfirmCancelPage } from './ConfirmCancelPage'
import { CancelPage } from './CancelPage'
import { TermsAndConditions } from './TermsAndConditions'
import { AnonymousPage } from './AnonymousPage'
import { LocationAnonymousPage } from './LocationAnonymousPage'
/*Consider removing after c19 pandemic*/
import { Covid19Page } from './Covid19Page'
import { RedirectRoute } from './components/route'
import { WhenDidItHappenPage } from './WhenDidItHappenPage'

export const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/covid-19">
        <Covid19Page />
      </Route>

      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/startPage">
        <StartPage />
      </Route>
      <Route path="/privacyconsent">
        <PrivacyConsentPage />
      </Route>
      <Route path="/privacystatement">
        <PrivacyStatementPage />
      </Route>
      <Route path="/termsandconditions">
        <TermsAndConditions />
      </Route>
      <RedirectRoute path="/howdiditstart">
        <HowDidItStartPage />
      </RedirectRoute>
      <RedirectRoute path="/whatwasaffected">
        <WhatWasAffectedPage />
      </RedirectRoute>
      <RedirectRoute path="/moneylost">
        <MoneyLostPage />
      </RedirectRoute>
      <RedirectRoute path="/information">
        <InformationPage />
      </RedirectRoute>
      <RedirectRoute path="/devices">
        <DevicesPage />
      </RedirectRoute>
      <RedirectRoute path="/business">
        <BusinessPage />
      </RedirectRoute>
      <RedirectRoute path="/whathappened">
        <WhatHappenedPage />
      </RedirectRoute>
      <RedirectRoute path="/suspectclues">
        <SuspectCluesPage />
      </RedirectRoute>
      <RedirectRoute path="/evidence">
        <EvidencePage />
      </RedirectRoute>
      <RedirectRoute path="/location">
        <LocationPage />
      </RedirectRoute>
      <RedirectRoute path="/anonymous">
        <AnonymousPage />
      </RedirectRoute>
      <RedirectRoute path="/contactinfo">
        <ContactInfoPage />
      </RedirectRoute>
      <RedirectRoute path="/confirmation">
        <ConfirmationPage />
      </RedirectRoute>
      <Route exact path="/thankYouPage">
        <ThankYouPage />
      </Route>
      <Route exact path="/confirmCancel">
        <ConfirmCancelPage />
      </Route>
      <Route exact path="/cancelled">
        <CancelPage />
      </Route>
      <Route path="/finalFeedback">
        <FinalFeedbackPage />
      </Route>
      <Route path="/finalFeedbackThanks">
        <FinalFeedbackThanksPage />
      </Route>
      <Route exact path="/whenDidItHappen">
        <WhenDidItHappenPage />
      </Route>
      <RedirectRoute path="/locationAnonymous">
        <LocationAnonymousPage />
      </RedirectRoute>

      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
)
