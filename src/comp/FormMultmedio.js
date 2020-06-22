import React from 'react';
import Navegacion from './Navegacion';
import config from '../config.json';
const img = config.assets + "img/";

function FormMultimedio ( props ) {
    

    return (
        <React.Fragment>
    <Navegacion handleNavegacion= {props.handleNavegacion } />

  <header className="encabezados-multimedios">
    <img id="imagen_encab_index text-center" src={img+"banner-multimedios.png"} alt="Baner Multimedios" />
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
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">Fecha de solicitud:</span>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">Fecha de grabación:</span>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <span className="input-group-text">Fecha de entrega:</span>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <hr />
              <br />
              <div className="row">
                <h3>Datos del multimedio</h3>
              </div>
              <br />
              <div className="row">
                <div className="col-2">  Objetivo:</div>
                <div className="col-10">
                  <textarea className="form-control" rows={2} />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">  Tema:</div>
                <div className="col-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-3">
                  <span className="input-group-text">Público meta:</span>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-primary-o">
                      <label>Estudiantes</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-primary-o">
                      <label>Docentes</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-primary-o">
                      <label>Familia</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-primary-o">
                      <label>Administrativo</label>
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
              <hr />
              <div className="row">
                <h3>Desarrollo del multimedio</h3>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Nombre del Multimedio:</span>
                  </div>
                </div>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-3">
                  <span className="input-group-text">Tipo de contenido:</span>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-3">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Explicar un tema</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Registrar experiencia</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Entrevista</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-danger">
                      <label>Dramatizado</label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2">  Duración:</div>
                <div className="col-4">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Participantes (Seleccione cuáles y indique cuántos)</span>
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-5">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Personal Administrativo del MEP:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-5">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Docentes:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-5">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Estudiantes o menores de edad:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-5">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Actores o actrices:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-5">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                      <label>Experto en un tema:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <input type="text" className="form-control" />
                </div>
              </div><br />
              <div className="row">
                <div className="col-2">Otro:</div>
                <div className="col-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Locación (Seleccione y especifique donde se realizará)</span>
                </div>
              </div><br />
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Área metropolitana:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Área Urbana:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-4">
                  <div className="pretty p-default">
                    <input type="checkbox" />
                    <div className="state p-warning">
                      <label>Área Rural:</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row ">
                <div className="col-sm-12">
                  <span className="input-group-text">Seleccione el ambiente donde se desea realizar el multimedio</span>
                </div>
              </div><br />
              <div className="row ">
                <div className="col-sm-6">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="ambiInterno">Interior</label>
                    </div>
                    <select className="custom-select" id="ambiInterno">
                      <option defaultValue={-1} >Seleccione</option>
                      <option value={1}>Casa</option>
                      <option value={2}>Oficina</option>
                      <option value={3}>Aula</option>
                      <option value={3}>Otro</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="ambiExtern">Exteriores</label>
                    </div>
                    <select className="custom-select" id="ambiExtern">
                    <option defaultValue={-1} >Seleccione</option>
                      <option value={1}>Centro Educativo</option>
                      <option value={2}>Sitio Público</option>
                      <option value={3}>Zona silvestre</option>
                      <option value={3}>Otro</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">Describa:</div>
                <div className="col-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <br />
              <div className="col-md-12 text-center">
                <input type="button" className="btn btn-primary btn-m rounded-pill mt-5" id="btnEnviar" defaultValue="Enviar" />
                <br />
                <div id="mensajeResultado">
                </div>
                <br />
              </div>
              <div className="container">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Esta boleta es indispensable para produccir, ningún trabajo se realizará si no ha sido previamente completada y enviada.</li>
                  <li className="list-group-item">El envío de la boleta no implica que la solicitud ya está aprobada, esta debe ser previamente valorada en una reunion con personal GESPRO y la persona o instancia solicitante.</li>
                  <li className="list-group-item">La fecha de solicitud será en la que se envíe esta boleta.</li>
                  <li className="list-group-item">Los trabajo se asignarán según disponibilidad de personal y equipo, así que el ingreso a producción no es inmediato.</li>
                  <li className="list-group-item">La aprobación final será dada por la jefatura de GESPRO, luego de que el personal de producciónaudiovisual valore el contenido, las caracteristicas y los requerimientos del recurso, y así determine el tiempo de produccióny cualquier otro elemento que se necesite.</li>
                </ul>
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
    )
}

export default FormMultimedio;