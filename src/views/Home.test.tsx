import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  test("renders parse log file button", () => {
    render(<Home />);
    const uploadButton = screen.getByText(/Upload a Log File/i);
    expect(uploadButton).toBeInTheDocument();
  });

  test("do not render parse button on load", () => {
    render(<Home />);
    const parseButton = screen.queryByTestId("parse-button");
    expect(parseButton).not.toBeInTheDocument();
  });

  test("do not render Results Panel on load", () => {
    render(<Home />);
    const resultsPanel = screen.queryByTestId("results-panel");
    expect(resultsPanel).not.toBeInTheDocument();
  });
});
