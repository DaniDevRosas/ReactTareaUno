import React, { useState, Fragment } from "react";

const Arreglo = () => {
  const [miArreglo, setMiArreglo] = useState([1, 2, 3]);
  const [numero, setNumero] = useState(4);
  const añadir = () => {
    setNumero(numero + 1);
    setMiArreglo([...miArreglo, numero]);
  };
  return (
    <Fragment>
      <br />
      <br />
      <button onClick={añadir}>Agrega numero</button>
      <p>{miArreglo}</p>
    </Fragment>
  );
};

export default Arreglo;
