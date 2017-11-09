import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { getLights, setLight } from './utils/api';
import './App.css';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 2em;
  margin: 1em;
  padding: 0.35em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Light(props) {
  function handleClick(e) {
    e.preventDefault();
    setLight(props.id, !props.on).then((res) => {
      console.log(res);
      window.location.reload();
    });
  }
  return (
    <Button primary={props.on} onClick={handleClick}>
      {props.name}
    </Button>
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
        <div className="lights">
          <LightList lights={this.state.lights}/>
        </div>
      </div>
    );
  }
}

export default App;
