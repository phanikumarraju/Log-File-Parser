import React from "react";
import { render, screen, within } from "@testing-library/react";
import ResultsPanel from "./ResultsPanel";

describe("<ResultsPanel />", () => {
  test("renders Unique IP count correctly", () => {
    const mockResultsData = {
      uniqueIPCount: 11,
      activeUrlList: [[{}]],
      activeIPlist: [[{}]],
    };
    render(<ResultsPanel resultsData={mockResultsData} />);
    const uniqueIPCount = screen.getByTestId("unique-ip-count");
    expect(uniqueIPCount.textContent).toEqual("11");
  });
  test("renders IP and URL results correctly", () => {
    const mockResultsData = {
      uniqueIPCount: 11,
      activeUrlList: [
        [{ url: "abc.com", count: 2 }],
        [{ url: "xyz.com", count: 1 }],
      ],
      activeIPlist: [
        [{ ip: "99.99.99", count: 3 }],
        [{ ip: "11.11.11", count: 2 }],
      ],
    };
    render(<ResultsPanel resultsData={mockResultsData} />);
    const ipTable = within(screen.getByTestId("active-ip-table"));
    expect(ipTable.getAllByTestId("ip-address")[0].textContent).toEqual(
      "99.99.99"
    );
    expect(ipTable.getAllByTestId("ip-count")[0].textContent).toEqual("3");
    expect(ipTable.getAllByTestId("ip-rank")[0].textContent).toEqual("1");

    const urlTable = within(screen.getByTestId("active-url-table"));
    expect(urlTable.getAllByTestId("url-address")[1].textContent).toEqual(
      "xyz.com"
    );
    expect(urlTable.getAllByTestId("url-count")[1].textContent).toEqual("1");
    expect(urlTable.getAllByTestId("url-rank")[1].textContent).toEqual("2");
  });
});
