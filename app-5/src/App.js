import React, { Component } from "react";
import "./App.css";
import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={`https://images.saatchiart.com/saatchi/1283003/art/6813149/5882787-MPJLXPBR-7.jpg`} />
      </div>
    );
  }
}

export default App;
