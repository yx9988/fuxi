import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Route,Link} from "react-router-dom";
import A from './components/A';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <hr></hr>
          <Link to="/a">A</Link>
          <Route path="/a" component={A}></Route>
    </div>
  );
}

export default App;
