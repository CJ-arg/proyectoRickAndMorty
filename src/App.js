import React, { Fragment } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./App.scss";

import "./components/Header.css";
import "./components/Characters.css";

function App() {
  return (
    <Fragment>

    <div className="app">
      <div className="Saas">
        <Header title="Rick and Morty API" />
        <Characters />
      </div>
      
    </div></Fragment>
  );
}

export default App;


