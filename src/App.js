import React, { Component } from 'react';
import logo from './logo.svg';
import { getLights, setLight } from './utils/api';
import './App.css';

function Light(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('Button was clicked.')
    setLight();
  }

  return (
    <button className="light" onClick={handleClick}>
      {props.name}
    </button>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = { lights: [] };
  }

  componentDidMount() {
    getLights().then((data) => {
      console.log(data[0]);
      this.setState( {
        lights: [data[0].name, data[1].name]});
    });    
  }

  render() {
    const listItems = this.state.lights.map((light) => 
      <li><Light name={light} /></li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="lights">
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default App;
