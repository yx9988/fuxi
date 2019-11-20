import React from 'react';
import './App.css';
import Header from './component/Header'

import{
  HashRouter as Router,
  Link,
  Roure,
}from "react-router-dom";
import Jump from "./components/Jump"
function App() {
  return (
    <div className="App">
      <Header title="首页"></Header>
      <Router>
        <Link to ="/">首页</Link>
        <Link to ="/a/5">首页</Link>
        <Link to ="/b">首页</Link>
        <Link to ="/c">首页</Link>
        <Link to ="/">首页</Link>
      </Router>  
    </div>
  );
}

export default App;
