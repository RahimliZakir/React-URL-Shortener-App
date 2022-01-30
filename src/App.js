import React from "react";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import Form from "./components/Form";
import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import {} from "react-bootstrap";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <Form />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
