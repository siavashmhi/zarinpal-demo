import React from "react";
import './assets/styles/App.css'
import '../src/assets/styles/fonts.css'
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}


