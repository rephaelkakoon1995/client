import React from 'react';
import AppBar from './AppBar/AppBar';
import Content from './Content/Content';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <AppBar />
        <Content />
      </div >
    </Router>
  );
}

export default App;
