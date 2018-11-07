import React from "react";
import { mount } from "enzyme";
import Home from "../Home";

describe("Home", () => {

  it("renders", () => {
    mount(<Home />)
  });
});
