// src/App.js
import React from "react";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar"; 

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar /> {/* Add Navbar here */}
        <h1>Triple The Benefits!</h1>
        <Tabs />
      </header>
    </div>
  );
};

export default App;
