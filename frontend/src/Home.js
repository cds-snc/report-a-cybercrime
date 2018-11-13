import React from "react";
import { Router } from "@reach/router";
import { ReportScreen } from "./report_screen";
import PhaseBanner from "@govuk-react/phase-banner";
import { css } from "emotion";

const root = css`
  margin: 20pt;
`;

const screen = css`
  margin-top: 30pt;
`;

const Home = () => (
  <div className={root}>
    <PhaseBanner level="alpha">For internal use only</PhaseBanner>

    <div className={screen}>
      <Router>
        <ReportScreen path="/" />
      </Router>
    </div>
  </div>
);

export default Home;
