import React from "react";
import { Router, Link } from "@reach/router";
import { Trans } from "@lingui/macro";

const Home = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> <Link to="moreInfo">More Information</Link>
    </nav>
    <Router>
      <Main path="/" />
      <MoreInfo path="moreInfo" />
    </Router>
  </div>
);

const Main = () => (
  <div>
    <h2>
      <Trans>Report a cybercrime</Trans>
    </h2>
  </div>
);

const MoreInfo = () => (
  <div>
    <h2>
      <Trans>More information</Trans>
    </h2>
  </div>
);

export default Home;
