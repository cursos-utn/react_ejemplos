import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Link to="/1">Página 1</Link>
        <Link to="/2">Página 2</Link>
    </div>
  );
}

export default App;
