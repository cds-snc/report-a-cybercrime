import React from "react";
import { Router, Link } from "@reach/router";

const Home = () => (
  <div>
    <nav>
      <Link to="/">Main</Link> <Link to="p2">Page 2</Link>
    </nav>
    <Router>
      <Main path="/" />
      <Dashboard path="p2" />
    </Router>
  </div>
);

const Main = () => (
  <div>
    <h2>Main Page</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Page 2</h2>
  </div>
);

export default Home
