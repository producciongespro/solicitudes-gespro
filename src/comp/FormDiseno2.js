import React, { useState, useEffect } from 'react';
import Navegacion from './Navegacion';
import config from '../config.json';
import Radios from './Radios';
import obtener from '../modulos/obtener';
import filtrar from '../modulos/filtrar';

const img = config.assets + "img/";

var aarayDiagramacion;
var arrayMultimedia;


function FormDiseno2(props) {

  useEffect(()=>{
    cargarDatos();
  },[])

  const [isReady, setReady ]= useState (false);
  const [diagramacion, setDiagramacion] = useState(false);
  const [multimedia, setMultimedia] = useState(false);


  async function cargarDatos () {
    let data= await obtener("http://localhost/solicitudes-gespro/webservices/get_proddiseno.php");
    console.log(data);
    filtrarDatosPorCat(data);
    setReady(true);    
  }

  const filtrarDatosPorCat=(array)=>{
    aarayDiagramacion= filtrar(array, "idCatDiseño", 1);
    //console.log("aarayDiagramacion", aarayDiagramacion);    
    arrayMultimedia= filtrar(array, "idCatDiseño", 2);
  }

  const handleAcordeon = (e) => {
    console.log(e.target);

    switch (e.target.title) {
      case "diagramacion":
        setDiagramacion(!diagramacion);
        break;
      case "multimedia":
        setMultimedia(!multimedia);
        break;

      default:
        console.log("Opción fuera de rango");
        break;
    }


  }




  return (

    <React.Fragment>

      <Navegacion handleNavegacion={props.handleNavegacion} />

      <header className="encabezados-diseno">
        <img id="imagen_encab_index text-center" className="img-fluid" src={img + "banners-diseno.png"} alt="Baner di8seño" />
      </header>
      <hr />
      <section id="contact" data-animate="bounceIn" className="contact-section contact">
       { isReady && 
          <div className="container">

          <div className="row">
            <div className="col-sm-12">
              <div
                className="alert alert-dark"
                role="alert"
                title="diagramacion"
                onClick={handleAcordeon}
              >
                <h6 title="diagramacion">Diagramación</h6>
              </div>
            </div>
          </div>
          <div className="container">
            {diagramacion && 
              <Radios array={aarayDiagramacion} />
            }
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12">
              <div
                className="alert alert-dark"
                role="alert"
                title="multimedia"
                onClick={handleAcordeon}
              >
                <h6 title="multimedia">Desarrollo multimedia</h6>
              </div>
            </div>
          </div>
          <div className="container">
            {multimedia && 
              <Radios array={arrayMultimedia} />
            }
          </div>


        </div>
       }
      </section>
      <hr />


      {/* Footer */}
      <footer className="py-5 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">Dirección de Recursos Tecnológicos en Educación</p>
          <p className="m-0 text-center text-white small">Departamento de GESPRO - 2019</p>
          <p className="m-0 text-center text-white small">22553525, ext.4622 </p>
        </div>
        {/* /.container */}
      </footer>


    </React.Fragment>

  );
}

export default FormDiseno2;