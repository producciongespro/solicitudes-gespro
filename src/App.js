import React, {useState, useEffect } from 'react';
import Contexto from './Contexto';
import TipoSolicitud from './comp/TipoSolicitud';
import FormMultimedio from './comp/FormMultmedio';
import FormDiseno from './comp/FormDiseno';
import FormProduccion from './comp/FormProduccion';
import PanelAdmin from './comp/Admin-Panel';
import Login from './comp/Login';


function App() {

const [compActual, setCompActual] = useState( null );
const [usuario, setUsuario] = useState(Contexto._currentValue.usuario);    
const contextUsuario = { usuario, setUsuario };

useEffect(()=>{
    init();
}, [])

const init=()=>{  
  setCompActual( <Login handleLogin={handleLogin} /> );
  console.log("usuario",usuario)
}

const handleLogin=()=> {
  setCompActual( <PanelAdmin />);
  //setCompActual( <TipoSolicitud handleNavegacion={handleNavegacion} /> )
}


const handleNavegacion=(e)=> {  
  console.log(e.target.id );  


  switch (e.target.id) {
    case "multimedio":      
      setCompActual(<FormMultimedio />)
    break;
    case "diseno":      
      setCompActual(<FormDiseno />)
    break;
    case "produccion":      
      setCompActual(<FormProduccion />)
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
