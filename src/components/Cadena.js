import React, { useState, Fragment } from "react";

const Cadena = () => {
  const [miCadena, setMiCadena] = useState("");
  const cambiar = (e) => {
    setMiCadena(e.target.value);
  };
  return (
    <Fragment>
      <p>El Valor de mi Cadena es: {miCadena}</p>
      <input type="text" value={miCadena} onChange={cambiar} />
    </Fragment>
  );
};

export default Cadena;
