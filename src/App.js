import React from "react";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import Form from "./components/Form";
import Advanced from "./components/Advanced";
import {} from "react-bootstrap";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <Form />
      <Advanced />
    </div>
  );
}

export default App;
