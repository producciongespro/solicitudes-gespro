import React, { useState } from 'react';
import Navegacion from './Navegacion';
import config from '../config.json';

const img = config.assets + "img/";


function FormDiseno2(props) {

  const [abierto1, setAbierto1] = useState(false);



  return (

    <React.Fragment>

      <Navegacion handleNavegacion={props.handleNavegacion} />

      <header className="encabezados-diseno">
        <img id="imagen_encab_index text-center" className="img-fluid" src={img + "banners-diseno.png"} alt="Baner di8seño" />
      </header>
      <hr/>
      <section id="contact" data-animate="bounceIn" className="contact-section contact">        
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            <div className="alert alert-dark" role="alert">
              A simple dark alert—check it out!
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              
            </div>
          </div>
        </div>
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