import React from "react";
import logo from "./Fakelandia_DOJ_logo.png";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import {
  MisdemeanourContext,
  placeholderMisdemeanour,
} from "./types/misdemeanours.types";

function App() {
  return (
    <div className="App">
      <MisdemeanourContext.Provider value={[placeholderMisdemeanour]}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MisdemeanourContext.Provider>
    </div>
  );
}

export default App;
