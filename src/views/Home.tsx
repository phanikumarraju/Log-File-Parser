import React, { FC } from "react";
import Header from "../components/Header";
import ResultsPanel from "../components/ResultsPanel";
import styled from "styled-components";
import { LogParser } from "../utils/Parser";

const Home: FC = () => {
  const [headerTitle, setHeaderTitle] = React.useState(
    "Let's do Log file parsing here !"
  );
  const [logContent, setLogContent] = React.useState("");
  const [results, setResults] = React.useState({
    uniqueIPCount: 0,
    activeUrlList: [[{ url: "", count: 0 }]],
    activeIPlist: [[{ ip: "", count: 0 }]],
  });
  const [showResults, setShowResults] = React.useState(false);
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  let fileReader: FileReader;
  const onUploadFile = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files !== null) {
        const file = e.currentTarget.files[0];
        handleFileChosen(file);
      }
    },
    []
  );
  const handleFileRead = () => {
    const content: any = fileReader.result;
    setLogContent(content);
  };
  const handleFileChosen = (file: File) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };
  const handleParsing = (logData: any) => {
    setShowResults(false);
    const results = LogParser(logData);
    if (results) {
      setResults(results);
      setShowErrorMessage(false);
      setShowResults(true);
      setHeaderTitle("Parsed Results are out !");
    } else {
      setShowErrorMessage(true);
    }
  };
  return (
    <HomeContainer>
      <Header title={headerTitle} />
      <MainContent>
        <ButtonContainer>
          Upload a Log File
          <UploadButton
            type="file"
            id="file"
            accept=".log"
            onChange={onUploadFile}
            data-testid="upload-button"
          />
        </ButtonContainer>
        <LogContent>{logContent}</LogContent>
        {logContent && (
          <ButtonContainer>
            Parse this Log File
            <ParseButton
              type="button"
              value="Parse it now"
              id="parse"
              onClick={(e) => handleParsing(logContent)}
              data-testid="parse-button"
            />
          </ButtonContainer>
        )}
        {showResults && (
          <ResultsPanel resultsData={results} data-testid="results-panel" />
        )}
        {showErrorMessage && (
          <ErrorPanel data-testid="error-panel">
            Something is FISHY with the file ! Is it valid?
          </ErrorPanel>
        )}
      </MainContent>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div``;
const MainContent = styled.div`
  padding: 50px;
`;
const LogContent = styled.div`
  width: 70%;
  margin: 25px auto;
  background-color: #cecece;
  border: 1px solid #000;
  height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const UploadButton = styled.input`
  display: none;
`;
const ParseButton = styled.input`
  display: none;
`;
const ButtonContainer = styled.label`
  height: 50px;
  width: 254px;
  background-color: #ffffff;
  box-sizing: border-box;
  border: 2px solid #0064d2;
  padding: 13px;
  color: #0064d2;
  display: inline-block;
  font-weight: 700;
  :hover {
    transition: color 0.3s, background-color 0.3s, border-color 0.3s;
    background: #0064d2;
    cursor: pointer;
    color: #ffffff;
  }
`;
const ErrorPanel = styled.div`
  padding: 50px;
  font-size: 18px;
  color: red;
  font-weight: bold;
`;
