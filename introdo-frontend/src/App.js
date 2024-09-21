// src/App.js
import React from "react";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar";
import PerksSection from "./components/PerksSection";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Tabs />
        <PerksSection />
      </header>
    </div>
  );
};

export default App;
