import React, { Component } from 'react';
import logo from './logo.svg';
import { getLights, setLight } from './utils/api';
import './App.css';

function Light(props) {
  function handleClick(e) {
    e.preventDefault();
    setLight(props.id, !props.on).then((res) => {
      console.log(res);
      window.location.reload();
    });
  }
  return (
    <button className="light" onClick={handleClick}>
      {props.name}
    </button>
  );
}

function LightList(props) {
  const lights = props.lights;
  const listItems = lights.map((light) =>
    <li key={light.id}>
      <Light id={light.id} name={light.name} on={light.state.on} />
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class App extends Component {
  constructor() {
    super();
    var testLight = {};
    testLight["id"] = 0;
    testLight["name"] = "test";
    testLight["state"] = { on: true };
    this.state = { lights: [testLight] };
  }

  componentDidMount() {
    getLights().then((lights) => {
      this.setState( { lights } );
    }).catch((err) => {
      console.log(err);
    });    
  }

  render() {
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
          <LightList lights={this.state.lights}/>
        </div>
      </div>
    );
  }
}

export default App;
