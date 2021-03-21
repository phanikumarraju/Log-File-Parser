import React, { FC } from "react";
import "./App.css";
import Home from "./views/Home";

const App: FC = () => {
  return (
    <div className="App">
      {/** Includes the Home page view of the parser tool */}
      <Home />
    </div>
  );
};

export default App;
