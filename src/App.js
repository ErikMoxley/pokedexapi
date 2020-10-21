import React, {Component} from 'react';
import NavBar from "./components/layout/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    )
  }
}

export default App;

