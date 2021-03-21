import { FC } from "react";
import styled from "styled-components";

/**
 *The Props for the component are defined here with their types.
 */
export interface Props {
  resultsData: {
    uniqueIPCount: number;
    activeUrlList: Array<any>;
    activeIPlist: Array<any>;
  };
}

const ResultsPanel: FC<Props> = (props: Props) => {
  const { resultsData } = props;
  return (
    <Results>
      <UniqueIPs>
        The unique IP addresses are:{" "}
        <strong data-testid="unique-ip-count">
          {resultsData.uniqueIPCount}
        </strong>
      </UniqueIPs>
      <ActiveIPs data-testid="active-ip-table">
        <Title>The Top 3 Active IP addresses are:</Title>
        <TableContainer>
          <Table aria-label="active IPs">
            <TableHead>
              <TableRow>
                <TableCellHead>IP address</TableCellHead>
                <TableCellHead align="right">Occurrences</TableCellHead>
                <TableCellHead align="right">Rank</TableCellHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultsData.activeIPlist.map((row, index) =>
                row.map(
                  (item: { ip: string; count: number }, itemIndex: number) => (
                    <TableRow key={itemIndex}>
                      <TableCell scope="row" data-testid="ip-address">
                        {item.ip}
                      </TableCell>
                      <TableCell align="right" data-testid="ip-count">
                        {item.count}
                      </TableCell>
                      <TableCell align="right" data-testid="ip-rank">
                        {index + 1}
                      </TableCell>
                    </TableRow>
                  )
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </ActiveIPs>
      <ActiveURLs data-testid="active-url-table">
        <Title>The Top 3 Active URLs are:</Title>
        <TableContainer>
          <Table aria-label="active URLs">
            <TableHead>
              <TableRow>
                <TableCellHead>URL</TableCellHead>
                <TableCellHead align="right">Visits</TableCellHead>
                <TableCellHead align="right">Rank</TableCellHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultsData.activeUrlList.map((row, index) =>
                row.map(
                  (item: { url: string; count: number }, itemIndex: number) => (
                    <TableRow key={itemIndex}>
                      <TableCell scope="row" data-testid="url-address">
                        {item.url}
                      </TableCell>
                      <TableCell align="right" data-testid="url-count">
                        {item.count}
                      </TableCell>
                      <TableCell align="right" data-testid="url-rank">
                        {index + 1}
                      </TableCell>
                    </TableRow>
                  )
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </ActiveURLs>
    </Results>
  );
};

export default ResultsPanel;

/**
 * Styled components that define the css stylings of Results displayed.
 */
const Results = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 25px auto;
  align-items: center;
`;
const UniqueIPs = styled.div`
  height: 50px;
  border: 1px solid grey;
  background-color: #8fd19e;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ;
`;
const ActiveIPs = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ;
`;
const ActiveURLs = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ;
`;
const TableContainer = styled.div``;
const Table = styled.table`
  width: 300px;
  border: 1px solid grey;
`;
const TableHead = styled.thead`
  background-color: #8fd19e;
`;
const TableRow = styled.tr``;
const TableBody = styled.tbody`
  ${TableRow} {
    &:nth-child(odd) {
      background-color: #c6c8ca;
    }
    &:nth-child(even) {
      background-color: #b3b7bb;
    }
  }
`;
const TableCellHead = styled.th`
  padding: 5px;
  border: 1px solid grey;
`;
const TableCell = styled.td`
  padding: 5px;
  border: 1px solid grey;
`;
const Title = styled.p``;
