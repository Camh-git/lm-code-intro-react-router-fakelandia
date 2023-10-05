import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { Misdemeanour } from "./types/misdemeanours.types";
import MisdemeanourContext from "./hooks/misdemeanour_context";
function App() {
  const [incidents, setIncidents] = useState<Array<Misdemeanour> | undefined>();

  useEffect(() => {
    const list = async () => {
      const result = await fetch("http://localhost:8080/api/misdemeanours/3");
      const json = await result.json();
      setIncidents(json);
    };
    list();
  }, []);
  return (
    <div className="App">
      <MisdemeanourContext.Provider
        value={{ misdemeanours: incidents, setMisdemeanours: setIncidents }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MisdemeanourContext.Provider>
    </div>
  );
}

export default App;
