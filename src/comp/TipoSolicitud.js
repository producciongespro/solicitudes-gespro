import React from 'react';
import Navegacion from './Navegacion';
import config from '../config.json';
const img = config.assets + "img/";


function TipoSolicitud(props) {

    console.log(img);


    return (
        <React.Fragment>

          <Navegacion />

            <header className="encabezados-gespro">
                <img id="imagen_encab_index text-center" className="img-fluid" src={img + "banner-gespro.png"} alt="Banner gespro" />
            </header>
            {/* Contact*/}
            <section id="contact" data-animate="bounceIn" className="contact-section contact">
                <div className="container">
                    <div id="tit_porta" className="container row text-center">
                        <div className="col-sm-4">
                            <h4>Gestión y Producción de Recursos Tecnológicos</h4>
                        </div>
                        <div className="col-sm-8">
                            <p data-animate="fadeInUp" className="lead text-center">El departamento de Recursos Tecnológicos  le corresponde la producción de recursos destinados a los procesos de enseñanza-aprendizaje.</p>
                        </div>
                    </div>
                    <div className="text-center"> <hr /> <hr />
                        <h2 className="title">Seleccione el tipo de solicitud requerida</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="p-5">                                
                                    <img 
                                    id="produccion"
                                    className="img-fluid rounded-circle puntero-mano" 
                                    src={img + "recursos.png"} 
                                    onClick={props.handleNavegacion}
                                    alt="recursos" 
                                    />                                
                                <h4 className="text-center">Producción <br />(recursos)</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <div className="p-5">                                
                                    <img
                                    id="multimedio" 
                                    className="img-fluid rounded-circle puntero-mano" 
                                    src={img + "multimedio.jpg"} 
                                    onClick={props.handleNavegacion}
                                    alt="multimedia" 
                                    />                                    

                                <h4 className="text-center">Multimedios <br /> (audio-video)</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <div className="p-5">                                
                                    <img
                                        id="diseno" 
                                        className="img-fluid rounded-circle puntero-mano" 
                                        src={img + "diseno.jpg"} 
                                        alt="diseño" 
                                        onClick={props.handleNavegacion}
                                        />

                                <h4 className="text-center">Diseño gráfico</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            {/* ********************************* */}
            <hr /><hr /><br /><br />
            {/* Testimonials*/}
            <section id="testimonials" className="testimonials-section bg-gray">
                <div className="container">
                    <header className="text-center mb-2">
                        <h2 data-animate="fadeInUp" className="title">Equipo GESPRO<br /><span>2019</span></h2>
                        <p data-animate="fadeInUp" className="lead">El departamento de Gestión y Producción de Recursos Tecnológicos (GESPRO) le corresponde la producción de recursos tecnológicos destinados a los procesos de enseñanza-aprendizaje.</p>
                    </header>
                    <hr /><hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 text-center">
                                <div><img className="name-picture" alt="Marco Brenes" src={img + "person-1.jpg"} />
                                    <h5>Marco Brenes</h5>
                                    <p>Diseñador Gráfico</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-2.jpg"} />
                                    <h5>Christian Vargas</h5>
                                    <p>Diseñador Gráfico</p>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-3.jpg"} />
                                    <h5>Mariana Molina</h5>
                                    <p>Diseñadora Gráfica</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-4.jpg"} />
                                    <h5>Karla Guevara</h5>
                                    <p>Diseñadora Gráfica</p>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-5.jpg"} />
                                    <h5>Sonia Hernández</h5>
                                    <p>Productora Audiovisual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-6.jpg"} />
                                    <h5>Katherine Williams</h5>
                                    <p>Asesora Inglés</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-7.jpg"} />
                                    <h5>Sirlene Chaves</h5>
                                    <p>Asesora de Artes Plásticas</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-8.jpg"} />
                                    <h5>Óscar Pérez</h5>
                                    <p>Asesor de Informática</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-9.jpg"} />
                                    <h5>Patricia Hernández</h5>
                                    <p>Asesora de Informática</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-10.jpg"} />
                                    <h5>Luis Chacón</h5>
                                    <p>Asesor de Informática</p>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-11.jpg"} />
                                    <h5>Ana Araya</h5>
                                    <p>Asesora de Informática</p>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-12.jpg"} />
                                    <h5>Elí Chacón</h5>
                                    <p>Jefatura</p>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                <div><img className="name-picture" alt="" src={img + "person-13.jpg"} />
                                    <h5>Mauricio Sanabria</h5>
                                    <p>Productor Audiovisual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>
            {/* Footer */}
            <footer className="py-5 bg-black">
                <div className="container">
                    <p className="m-0 text-center text-white small">Dirección de Recursos Tecnológicos en Educación</p>
                    <p className="m-0 text-center text-white small">Departamento de GESPRO - 2012</p>
                    <p className="m-0 text-center text-white small">22553525, ext.4622 </p>
                </div>
                {/* /.container */}
            </footer>

        </React.Fragment>
    );
}

export default TipoSolicitud