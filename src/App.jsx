import { useState } from "react";

import "./App.css";
import DisplayDrinks from "./components/DisplayDrinks";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <DisplayDrinks />
    </div>
  );
}

export default App;
