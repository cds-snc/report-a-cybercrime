import React from "react";
import { Router } from "@reach/router";
import { Trans } from "@lingui/macro";
import { css } from "emotion";
import PhaseBanner from "@govuk-react/phase-banner";
import { ReportScreen } from "./report_screen";

const root = css`
  margin: 20pt;
`;

const screen = css`
  margin-top: 30pt;
`;

const Home = () => (
  <div className={root}>
    <PhaseBanner level="alpha">
      <Trans>For internal use only</Trans>
    </PhaseBanner>

    <div className={screen}>
      <Router>
        <ReportScreen path="/" />
      </Router>
    </div>
  </div>
);

export default Home;
