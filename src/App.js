import React, {Component} from 'react';
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container"><Dashboard/></div>
      </div>
    )
  }
}

export default App;

