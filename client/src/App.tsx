import React from "react";
import logo from "./Fakelandia_DOJ_logo.png";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import {
  misdemeanourContext,
  placeholderMisdemeanour,
} from "./types/misdemeanours.types";

function App() {
  return (
    <div className="App">
      <misdemeanourContext.Provider value={[placeholderMisdemeanour]}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </misdemeanourContext.Provider>
    </div>
  );
}

export default App;
