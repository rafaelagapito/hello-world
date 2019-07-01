import React, { Component } from 'react';
import './App.css';
import Menu from "./Component/Menu";
import axios from 'axios';
import Routes from './routes';


//https://private-afe609-testefront.apiary-mock.com/anual-result
class App extends Component {


  render() {
    return (
      <div className="App">
        <Menu />
        <Routes />
      </div>
    );
  }
}
export default App;
