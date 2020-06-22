import React from 'react';
import Navegacion from './Navegacion';
import config from '../config.json';
const img = config.assets + "img/";

function FormProduccion (props) {

    return (

        <React.Fragment>
            <Navegacion  handleNavegacion= {props.handleNavegacion } />

            <header className="encabezados-produccion">
    <img id="imagen_encab_index text-center" className="img-fluid" src={img+"banner-produccion.png"}  alt="Baner producción" />
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
                <h3>Datos del contacto de contenido</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" id="departamento" name="departamento" placeholder="Departamento *" required="required" className="form-control" title="Departamento" /> <br />
                </div>
                <div className="col-md-6">
                  <input type="text" id="jefa" name="jefatura" placeholder="Nombre de jefatura *" required="required" className="form-control" title="Nombre de jefatura" /> <br />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" id="nombre" name="nombre" placeholder="Nombre del asesor responsable de contenidos*" required="required" className="form-control" title="Nombre" /> <br />
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
                <h3>Datos del recurso propuesto</h3>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-3">
                  <span className="input-group-text">Dirigido a:</span>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Estudiantes</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Docentes</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Familia</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Administrativo</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-3">
                  <span className="input-group-text">Propósito:</span>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success">
                      <label>Introducir</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success">
                      <label>Evaluar</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success">
                      <label>Reforzar</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success">
                      <label>Otro</label>
                    </div>
                  </div>
                </div>
              </div><br />
              <div className="row">
                <div className="col-2">  Otro:</div>
                <div className="col-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-md-4">
                  <div className="input-group input-group-sm">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Nivel Educativo</span>
                    </div>
                    <select id="form_estado_conexion" className="form-control custom-select form-1" name="form_estado_conexion">
                    <option defaultValue={-1} >Seleccione</option>
                      <option value={1}>Preescolar</option>
                      <option value={2}>Primaria</option>
                      <option value={3}>Secundaria</option>
                      <option value={3}>Adultos</option>
                      <option value={4}>Todos</option>
                      <option value={5}>Otro</option>
                    </select>
                  </div>
                </div>
                <div className="col-8">
                  <span className="input-group-text">Mencione a que contenidos curriculares responde:</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Indique nivel *Otro*" />
                </div>
                <div className="col-8">
                  <textarea className="form-control" rows={2} placeholder="Según el programa de estudio vigente" defaultValue={""} />
                </div>
              </div>
              <br /><hr />
              <div className="row">
                <h3>Descripción del desarrollo del recurso</h3>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Nombre del recurso:</span>
                  </div>
                </div>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Seleccione el tipo de recurso que dese realizar</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Juego Interactivo</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <span className="input-group-text">Arrastrar, armar, identificar, colocar,completar, seleccionarv etc.</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Juego RPG</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <span className="input-group-text">Personaje que se desplaza, con roles, obstáculos y acciones.</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Multimedia Interactivo</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <span className="input-group-text">Textos emergente, videos, audios, obstáculos en movimiento.</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Aplicación Web</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <span className="input-group-text">Módulo de gestion de contenidos (cms).</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Otro</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <textarea className="form-control" rows={2} placeholder="Descripción corta" defaultValue={""} />
                </div>
              </div><br />
              <div className="form-group">
                <span className="input-group-text">Describa como visualiza el recurso:</span>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div><br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">En caso de ser necesario redacte las instrucciones que desean se incluyan en los siguientes aspectos.</span>
                </div>
              </div><br />
              <div className="row ">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">¿Cómo se utiliza?</span>
                  </div>
                </div>
                <div className="col-sm-8">
                  <textarea className="form-control" rows={2} defaultValue={""} />
                </div>
              </div><br />
              <div className="row ">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">¿Cómo se gana?</span>
                  </div>
                </div>
                <div className="col-sm-8">
                  <textarea className="form-control" rows={2} defaultValue={""} />
                </div>
              </div><br />
              <div className="row ">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">¿Cómo se avanza?</span>
                  </div>
                </div>
                <div className="col-sm-8">
                  <textarea className="form-control" rows={2} defaultValue={""} />
                </div>
              </div><br />
              <div className="row ">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">¿Cómo se pierde?</span>
                  </div>
                </div>
                <div className="col-sm-8">
                  <textarea className="form-control" rows={2} defaultValue={""} />
                </div>
              </div><br />
              <div className="row ">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">¿Cuántos niveles tiene?</span>
                  </div>
                </div>
                <div className="col-sm-8">
                  <textarea className="form-control" rows={2} defaultValue={""} />
                </div>
              </div><br />
              <div className="col-md-12 text-center">
                <input type="button" className="btn btn-primary btn-m rounded-pill mt-5" id="btnEnviar" defaultValue="Enviar" />
                <br />
                <div id="mensajeResultado">
                </div>
                <br />
              </div>
              <h3 className="title">Los asesores de informática se comunicarán para poder concretar una fecha de una posible reunión inicial, según las cargas laborales.</h3>
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

export default FormProduccion