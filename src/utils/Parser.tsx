import * as _ from "lodash";
/**
 * Parsing util that takes log data and return the parsed results
 * @param logData the content of the log file
 * @returns Parsed IP data results
 */
export const LogParser = (logData: any) => {
  let IPData: {
    uniqueIPCount: number;
    activeUrlList: Array<any>;
    activeIPlist: Array<any>;
  } = {
    uniqueIPCount: 0,
    activeUrlList: [[{ url: "", count: 0 }]],
    activeIPlist: [[{ ip: "", count: 0 }]],
  };
  try {
    const parsedIPData = getParsedIPData(logData);
    IPData.uniqueIPCount = parsedIPData.uniqueIPCount;
    IPData.activeIPlist = parsedIPData.activeIPlist;
    IPData.activeUrlList = getActiveUrlList(logData);
  } catch (error) {
    // console.log('Error:', error);
    return;
  }
  return IPData;
};
/**
 * Counts the occurrences of an item in the given array
 * @param List the list of IPs and URLs
 * @returns the reduced array with count of occurrences
 */
const CountOccurrences = (List: Array<any>) =>
  List.reduce(
    (prev: any, curr: any) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
/**
 * Sort the given array list based on the count
 * @param List the list of IPs and URLs
 * @returns the sorted array based on count of occurrences
 */
const SortListWithCount = (List: Array<any>) =>
  Object.entries(List).sort((a: any, b: any) => b[1] - a[1]);
/**
 * Parse the log data and find unique IP count and their occurrences
 * @param logData the content of the log file
 * @returns the parsed IP results
 */
const getParsedIPData = (logData: any) => {
  const logs = logData.trim().split("\n");
  let IPList: Array<string> = [];
  logs.forEach((log: string) => {
    let ip = JSON.stringify(log).split(" ")[0];
    if (ip !== null) {
      IPList.push(ip.replace('"', ""));
    }
  });
  const IPOccurrences = CountOccurrences(IPList);
  const parsedIPResults = { uniqueIPCount: 0, activeIPlist: [[{}]] };

  parsedIPResults.uniqueIPCount = Object.keys(IPOccurrences).length;
  const ipAndCount = SortListWithCount(IPOccurrences);
  let sortedIPs: any = [];
  for (const [ip, count] of ipAndCount) {
    sortedIPs.push({ ip: ip, count: count });
  }
  sortedIPs = _.groupBy(sortedIPs, (sortedIPs) => sortedIPs.count);
  parsedIPResults.activeIPlist = _.take(
    _.sortBy(sortedIPs, ["count"]).reverse(),
    3
  );
  return parsedIPResults;
};
/**
 * Parse the log data and find active url list
 * @param logData the content of the log file
 * @returns the parsed URL results
 */
const getActiveUrlList = (logData: any) => {
  let URLList: Array<string> = [];
  const logs = logData.split("\n");
  logs.forEach((log: string) => {
    const domain = log.match(/"(.*?)"/);
    const request = domain ? domain[1] : log;
    let url = request.trim().split(" ")[1];
    let page = url.replace("://", "").match(/\/(.*?)\//);
    if (page !== null) {
      URLList.push("/" + page[1]);
    } else {
      page = url.replace("://", "").split("/");
      if (page !== null) {
        URLList.push("/" + page[1]);
      }
    }
  });
  const URLOccurrences = CountOccurrences(URLList);
  const urlAndCount = SortListWithCount(URLOccurrences);
  let sortedURLs: any = [];
  for (const [url, count] of urlAndCount) {
    sortedURLs.push({ url: url, count: count });
  }
  // Group urls based on their count of occurrences
  sortedURLs = _.groupBy(sortedURLs, (sortedURLs) => sortedURLs.count);
  // Pick Top 3 urls based on their count of occurrences
  const parsedURLList = _.take(_.sortBy(sortedURLs, ["count"]).reverse(), 3);
  return parsedURLList;
};
