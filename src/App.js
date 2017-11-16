import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      someValue: 5
    }
  }

  render() {
    return (
      <div className="App">
        <Header itemsCount={this.state.someValue}/>
        {this.props.children}
      </div>
    );
  }
}

const Header = ({itemsCount}) =>
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React demo, items: {itemsCount}</h1>
  </header>

export default App;
