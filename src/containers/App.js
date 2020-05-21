import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Event from "./Event";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Event />
      </Router>
    );
  }
}

export default App;
