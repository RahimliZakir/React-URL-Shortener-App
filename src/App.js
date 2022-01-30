import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import {} from "react-bootstrap";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <Form />
    </div>
  );
}

export default App;
