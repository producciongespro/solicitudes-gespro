import React, {useState, useEffect } from 'react';
import TipoSolicitud from './comp/TipoSolicitud';
import FormMultimedio from './comp/FormMultmedio';


function App() {

const [compActual, setCompActual] = useState( null  );

useEffect(()=>{
    init();
}, [])

const init=()=>{
  setCompActual( <TipoSolicitud handleNavegacion={handleNavegacion} /> )
}


const handleNavegacion=(e)=> {  
  console.log(e.target.id );  


  switch (e.target.id) {
    case "multimedio":      
      setCompActual(<FormMultimedio />)
      break;
  
    default:
      console.log("Parametro fuera de rango");      
      break;
  }

}

  return (
    <React.Fragment>          

       { 
        compActual
       }
       
    </React.Fragment>
  );
}

export default App;
