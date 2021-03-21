import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  test("renders header title correctly", () => {
    const mockTitle = "Here is the title";
    render(<Header title={mockTitle} />);
    const uniqueIPCount = screen.getByText("Here is the title");
    expect(uniqueIPCount).toBeInTheDocument();
  });
  test("render logos", () => {
    const mockTitle = "Here is the title";
    render(<Header title={mockTitle} />);
    expect(screen.getByAltText("logo")).toBeDefined();
    expect(screen.getByAltText("react")).toBeDefined();
  });
});
