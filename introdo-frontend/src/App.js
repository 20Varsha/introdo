// src/App.js
import React from "react";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar"; 

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar /> 
        <Tabs />
      </header>
    </div>
  );
};

export default App;
