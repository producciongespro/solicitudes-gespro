import React, {useState, useEffect } from 'react';
import Contexto from './Contexto';
import TipoSolicitud from './comp/TipoSolicitud';
import FormMultimedio from './comp/FormMultmedio';
import FormDiseno from './comp/FormDiseno';
import FormProduccion from './comp/FormProduccion';
import PanelAdmin from './comp/Admin-Panel';
import Login from './comp/Login';
import obtener from './modulos/obtener';


function App() {

const [compActual, setCompActual] = useState( null );
const [usuario, setUsuario] = useState(Contexto._currentValue.usuario);    
const contextUsuario = { usuario, setUsuario };

useEffect(()=>{
    init();
    //TODO prevista para cargar los datos del API
    //cargarDatos();
}, [])

const init=()=>{  
  setCompActual( <Login handleLogin={handleLogin} /> );
  console.log("usuario",usuario);
}

async function cargarDatos () {
  let data= await obtener("http://localhost/API-solicitudes-gespro/index.php/Diseno/getDiseno");
  console.log(data);
  
}

const handleLogin=()=> {
  //setCompActual( <PanelAdmin />);
  setCompActual( <TipoSolicitud handleNavegacion={handleNavegacion} /> )
}


const handleNavegacion=(e)=> {  
  console.log(e.target.id );  


  switch (e.target.id) {
    case "inicio":      
    case "logo": 
    //clic en el logo del MEP para ir a inicio
      setCompActual( <TipoSolicitud handleNavegacion={handleNavegacion} /> )
    break;
    case "multimedio":      
      setCompActual(<FormMultimedio  handleNavegacion={handleNavegacion} />)
    break;
    case "diseno":      
      setCompActual(<FormDiseno  handleNavegacion={handleNavegacion} />)
    break;
    case "produccion":      
      setCompActual(<FormProduccion  handleNavegacion={handleNavegacion} />)
    break;
  
    default:
      console.log("Parametro fuera de rango");      
      break;
  }

}

  return (
    <Contexto.Provider value={contextUsuario}  > 
    

       { 
        compActual
       }
       
    
    </Contexto.Provider> 
  );
}

export default App;
