import React, { Component } from 'react';
import "./App.css";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      deathStar: ''
    };
  }

  componentDidMount() {
    axios.get("http://swapi.dev/api/starships/9/").then(response => {
      this.setState({
        lukeSkywalker: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.deathStar.name}</h1>
        <h1>Model: {this.state.deathStar.model}</h1>
        <h1>Length: {this.state.deathStar.length}</h1>
        <h1>Manufacture: {this.state.deathStar.manufacture}</h1>
      </div>
    );
  }
}

export default App;
