import React, { useState, Fragment } from "react";

const Object = () => {
  //Declarar el Objeto
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: ""
  });
  const [dato, setDato] = useState("");

  const funcionCambio = (event) => {
    setPersona({
      ...persona,
      [event.target.name]: event.target.value
    });
  };
  const envioBoton = (event) => {
    event.preventDefault();
    setDato(persona.nombre + " " + persona.apellido);
  };
  return (
    <Fragment>
      <input
        placeholder="Ingrese Nombre"
        type="text"
        name="nombre"
        onChange={funcionCambio} //Se indica con llaves un funcion
      />
      <input
        placeholder="Ingrese Apellido"
        type="text"
        name="apellido"
        onChange={funcionCambio} //Se indica con llaves un funcion
      />
      <button onClick={envioBoton}>Guardar</button>
      <p>
        <strong>{dato}</strong>
      </p>
    </Fragment>
  );
};

export default Object;
