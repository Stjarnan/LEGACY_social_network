import React, { Component } from "react";
import "./App.css";

// Import containers
import Navbar from "./components/containers/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
