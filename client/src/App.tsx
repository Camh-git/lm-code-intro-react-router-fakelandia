import React from "react";
import logo from "./Fakelandia_DOJ_logo.png";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
