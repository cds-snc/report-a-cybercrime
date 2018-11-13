import React from "react";
import { mount } from "enzyme";
import { ReportScreen } from "../report_screen";

describe("ReportScreen", () => {
  it("renders", () => {
    mount(<ReportScreen />);
  });
});
