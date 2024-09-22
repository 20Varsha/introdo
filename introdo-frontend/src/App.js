import React from "react";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar";
import PerksSection from "./components/PerksSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Tabs />
        <PerksSection />
        <Footer/>
      </header>
    </div>
  );
};

export default App;
