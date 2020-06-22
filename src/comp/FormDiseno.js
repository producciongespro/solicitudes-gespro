import React from 'react';
import Navegacion from './Navegacion';
import config from '../config.json';
const img = config.assets + "img/";

function FormDiseno (props) {
    
    return(

        <React.Fragment>

            <Navegacion  handleNavegacion= {props.handleNavegacion } />

<header className="encabezados-diseno">
    <img id="imagen_encab_index text-center" className="img-fluid" src={img+"banners-diseno.png"}   alt="Baner di8seño" />
  </header>
  {/* Contact*/}
  <section id="contact" data-animate="bounceIn" className="contact-section contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <form id="main-contact-form" className="contact-form" name="contact-form" >
            <div className="messages" />
            <div className="controls">  <br /><br /><hr />
              <div className="row">
                <h3>Datos del contacto</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" id="departamento" name="departamento" placeholder="Dependecia que solicita *" required="required" className="form-control" title="Dependencia" /> <br />
                </div>
                <div className="col-md-6">
                  <input type="text" id="jefa" name="jefatura" placeholder="Nombre de jefatura *" required="required" className="form-control" title="Nombre de jefatura" /> <br />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" id="nombre" name="nombre" placeholder="Nombre del solicitante*" required="required" className="form-control" title="Nombre" /> <br />
                </div>
                <div className="col-md-6">
                  <input type="text" id="email" name="email" placeholder="Correo electrónico *" required="required" className="form-control" title="Correo electrónico" /> <br />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <input type="text" id="celular" name="telefono" placeholder="Teléfono celular *" required="required" className="form-control" title="celular" /> <br />
                </div>
                <div className="col-md-5">
                  <input type="text" id="telefono" name="telefono" placeholder="Teléfono oficina *" required="required" className="form-control" title="Teléfono" /> <br />
                </div>
                <div className="col-md-2">
                  <input type="text" id="extension" name="telefono" placeholder="Extensión *" required="required" className="form-control" title="extension" /> <br />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">Fecha de solicitud:</span>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <hr />
              <br />
              <div className="row">
                <h3>Tipo de Producto</h3>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Diagramación</span>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Banner:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Afiche:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Afiche:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Carpeta:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Certificado:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Atril:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Tarjeta de presentación:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Volantes:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Folletos:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Desplegable:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Papel membretado:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Diseño Logotipo:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Libro:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Revista:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Documento:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Describa:</div>
                <div className="col-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Desarrollo multimedia</span>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Presentación:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Tutorial:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Animación simple:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Animación compleja:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Banner Animado:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Imagen:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Gráfico:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Describa:</div>
                <div className="col-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Web</span>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Minisitio:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Página:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Botón:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Banner:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Boletin:</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">Describa:</div>
                <div className="col-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Otro</span>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">  Describa:</div>
                <div className="col-10">
                  <textarea className="form-control" rows={2} defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12 text-center">
                <input type="button" className="btn btn-primary btn-m rounded-pill mt-5" id="btnEnviar" defaultValue="Enviar" />
                <br />
                <div id="mensajeResultado">
                </div>
                <br />
              </div>
              <div>
                <h3 className="title">Los diseñadores se comunicarán en el momento de análizar la solicitud para coordinar fecha de inicio.</h3>
              </div>
            </div>
          </form>
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

export default FormDiseno;