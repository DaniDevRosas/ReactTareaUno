import React from "react";
import "./styles.css";
import Cadena from "./components/Cadena";
import Arreglo from "./components/Arreglo";
import Object from "./components/Object";

function App() {
  return (
    <div className="App">
      <Cadena />
      <Arreglo />
      <Object />
    </div>
  );
}

export default App;
