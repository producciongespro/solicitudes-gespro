import React from 'react';


const Contexto = React.createContext({
  usuario: {
    correo: "",
    idUsuario: "",
    nombre: "",
    apellido1: "",
    apellido2: "",
    idTipoUsuario: "",
    etiquetaTipoUsuario: "",
    isAccesado: false
  },
  setUsuario: () => { }
});

export default Contexto;
