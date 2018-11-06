import React from "react";
import { Router, Link } from "@reach/router";

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
    <h2>Report a cybercrime</h2>
  </div>
);

const MoreInfo = () => (
  <div>
    <h2>More information</h2>
  </div>
);

export default Home;
