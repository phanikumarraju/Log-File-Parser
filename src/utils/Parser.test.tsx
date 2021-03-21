import { LogParser } from "./Parser";
import { readFileSync } from "fs";

describe("Test the util functions of parser", () => {
  test("verify results - good data", () => {
    const mock1 = readFileSync(
      process.cwd() + "/src/data/test/Mock1.log",
      "utf-8"
    );
    const parsedResults = LogParser(mock1);
    expect(parsedResults).toBeDefined();
    expect(parsedResults && parsedResults.uniqueIPCount).toEqual(12);
    expect(parsedResults && parsedResults.activeIPlist[0][0].ip).toEqual(
      "168.41.191.40"
    );
    expect(parsedResults && parsedResults.activeIPlist[0][0].count).toEqual(4);
    expect(parsedResults && parsedResults.activeUrlList[0][0].url).toEqual(
      "/docs"
    );
    expect(parsedResults && parsedResults.activeUrlList[0][0].count).toEqual(4);
  });
  test("verify results -  bad data", () => {
    const mock2 = readFileSync(
      process.cwd() + "/src/data/test/Mock2.log",
      "utf-8"
    );
    const parsedResults = LogParser(mock2);
    expect(parsedResults).not.toBeDefined();
  });
});
