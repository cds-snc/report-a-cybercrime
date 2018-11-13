import React from "react";
import Home from "./Home";
import { I18nProvider } from "@lingui/react";
import catalogFr from "../locale/fr/messages.js";
import catalogEn from "../locale/en/messages.js";

const catalogs = { fr: catalogFr, en: catalogEn };

const App = () => (
  <I18nProvider language="fr" catalogs={catalogs}>
    <Home />
  </I18nProvider>
);

export default App;
